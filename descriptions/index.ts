import * as path from "jsr:@std/path@1.0.8";
import * as csv  from "jsr:@std/csv@1.0.5";
import lunr from "npm:lunr@2.3.9";  // @deno-types="npm:@types/lunr@2.3.7"
import {type RowData, type SetupTableOptions, setupTable} from "jsr:@nodef/extra-sql@0.1.2";




//#region TYPES
/** Description of a (key) food in the database. */
interface Description {
  /** Unique code of the (key) food, e.g., 43. */
  code: string;
  /** Name of the food, e.g., Rajmah. */
  name: string;
  /** Scientific name of the food, e.g., Phaseolus vulgaris. */
  scie: string;
  /** Local name of the food, e.g., "B. Barbati; G. Phanasi; ...". */
  desc: string;
};
//#endregion




//#region GLOBALS
let corpus: Map<string, Description> | null = null;
let index: lunr.Index | null = null;
//#endregion




//#region FUNCTIONS
/**
 * Load the descriptions corpus from CSV file.
 * @param file CSV file path
 * @returns descriptions corpus
 */
async function loadFromCsv(file: string) {
  const map  = new Map<string, Description>();
  const data = await Deno.readTextFile(file);
  const records = csv.parse(data, {skipFirstRow: true, comment: "#"});
  for (const r of records) {
    for (const code of r.code.split(","))
      map.set(code, {code, name: r.name, scie: r.scie, desc: r.desc});
  }
  return map;
}


/**
 * Setup the lunr index for the descriptions corpus.
 * @returns lunr index
 */
function setupIndex(corpus: Map<string, Description>) {
  return lunr(function(this: lunr.Builder) {
    this.ref('code');
    this.field('code');
    this.field('name');
    this.field('scie');
    this.field('desc');
    for (const r of corpus?.values() || []) {
      let {code, name, scie, desc} = r;
      name = name.replace(/^(\w+),/g, '$1 $1 $1 $1,');
      desc = desc.replace(/\[.*?\]/g, '').replace(/\w+\.\s([\w\',\/\(\)\- ]+)[;\.]?/g, '$1');
      desc = desc.replace(/[,\/\(\)\- ]+/g, ' ').trim();
      this.add({code, name, scie, desc});
    }
  });
}


/**
 * Load the descriptions corpus from the file.
 * @returns descriptions corpus
 */
export async function loadDescriptions(): Promise<Map<string, Description>> {
  if (corpus) return corpus;
  corpus = await loadFromCsv(descriptionsCsv());
  index  = setupIndex(corpus);
  return corpus;
}


/**
 * Get the path to the descriptions CSV file.
 * @returns CSV file path
 */
export function descriptionsCsv(): string {
  return path.join(import.meta.dirname || '', 'index.csv');
}


/**
 * Obtain SQL command to create and populate the descriptions table.
 * @param tab table name
 * @param opt options for the table
 * @returns SQL command
 */
export async function descriptionsSql(tab: string="descriptions", opt: SetupTableOptions={}): Promise<string> {
  return setupTable(tab, {code: "TEXT", name: "TEXT", scie: "TEXT", desc: "TEXT"},
    (await loadDescriptions()).values() as Iterable<RowData>,
    Object.assign({pk: "code", index: true, tsvector: {code: "A", name: "B", scie: "B", desc: "C"}}, opt));
}


/**
 * Get matching descriptions for the given text.
 * @param txt text to search for
 * @returns `{code, name, scie, desc}` of matching descriptions
 */
export function descriptions(txt: string): Description[] {
  if (index == null) return [];
  const a: Description[] = []; txt = txt.replace(/\W/g, ' ');
  const mats = index.search(txt); let max = 0;
  for (const mat of mats)
    max = Math.max(max, Object.keys(mat.matchData.metadata).length);
  for (const mat of mats)
    if (Object.keys(mat.matchData.metadata).length === max) a.push(corpus?.get(mat.ref) || {} as Description);
  const row = corpus?.get(txt) || corpus?.get(parseInt(txt, 10).toString());
  if (!row) return a;
  if (a.includes(row)) a.splice(a.indexOf(row), 1);
  a.unshift(row);
  return a;
}
//#endregion
