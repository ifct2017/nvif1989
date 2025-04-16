import * as path from "jsr:@std/path@1.0.8";
import * as csv  from "jsr:@std/csv@1.0.5";
import lunr from "npm:lunr@2.3.9";  // @deno-types="npm:@types/lunr@2.3.7"
import {type RowData, type SetupTableOptions, setupTable} from "jsr:@nodef/extra-sql@0.1.2";




//#region TYPES
/** Name and unique code of a (key) food in the database. */
export interface Code {
  /** Name of the food, e.g., Rajmah. */
  name: string;
  /** Unique code of the food, e.g., 43. */
  code: string;
};
//#endregion




//#region GLOBALS
let corpus: Map<string, Code> | null = null;
let index: lunr.Index | null = null;
//#endregion




//#region FUNCTIONS
/**
 * Load the codes corpus from CSV file.
 * @param file CSV file path
 * @returns codes corpus
 */
async function loadFromCsv(file: string) {
  const map  = new Map<string, Code>();
  const data = await Deno.readTextFile(file);
  const records = csv.parse(data, {skipFirstRow: true, comment: "#"});
  for (const r of records)
    map.set(r.name.toLowerCase(), r as unknown as Code);
  return map;
}


/**
 * Setup the lunr index for the codes corpus.
 * @returns lunr index
 */
function setupIndex(corpus: Map<string, Code>) {
  return lunr(function(this: lunr.Builder) {
    this.ref('key');
    this.field('name');
    this.field('code');
    // this.pipeline.remove(lunr.stopWordFilter);
    for (const r of corpus?.values() || [])
      this.add({key: r.name, name: r.name.replace(/\W+/g, ' '), code: r.code});
  });
}


/**
 * Load the codes corpus from the file.
 * @returns codes corpus
 */
export async function loadCodes(): Promise<Map<string, Code>> {
  if (corpus) return corpus;
  corpus = await loadFromCsv(codesCsv());
  index  = setupIndex(corpus);
  return corpus;
}


/**
 * Get the path to the codes CSV file.
 * @returns CSV file path
 */
export function codesCsv(): string {
  return path.join(import.meta.dirname || '', 'index.csv');
}


/**
 * Obtain SQL command to create and populate the codes table.
 * @param tab table name
 * @param opt options for the table
 * @returns SQL command
 */
export async function codesSql(tab: string="codes", opt: SetupTableOptions={}): Promise<string> {
  return setupTable(tab, {name: "TEXT", code: "TEXT"}, (await loadCodes()).values() as Iterable<RowData>,
    Object.assign({pk: "name", index: true, tsvector: {name: "A", code: "B"}}, opt));
}


/**
 * Get the details of a code (i.e., unique food code).
 * @param txt text to search for
 * @returns `{name, code}` if found, null otherwise
 */
export function codes(txt: string): Code[] {
  if (index == null) return [];
  const a: Code[] = []; txt = txt.replace(/\W/g, ' ');
  const mats = index.search(txt); let max = 0;
  for (const mat of mats)
    max = Math.max(max, Object.keys(mat.matchData.metadata).length);
  for (const mat of mats)
    if (Object.keys(mat.matchData.metadata).length === max) a.push(corpus?.get(mat.ref) || {} as Code);
  return a;
}
//#endregion
