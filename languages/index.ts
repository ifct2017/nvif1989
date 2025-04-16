import * as path from "jsr:@std/path@1.0.8";
import * as csv  from "jsr:@std/csv@1.0.5";
import {type RowData, type SetupTableOptions, setupTable} from "jsr:@nodef/extra-sql@0.1.2";




//#region TYPES
/** Language used for common names of foods in the database. */
interface Language {
  /** Abbreviation of the language, e.g., "O.". */
  abbr: string;
  /** Full name of the language, e.g., Oriya. */
  lang: string;
};
//#endregion




//#region GLOBALS
const RLANGUAGES = /((\w\s+|\w\.\s*|\w\-\s*|\w$)+)|\w+/g;
let corpus: Map<string, Language> | null = null;
let match: RegExp | null = null;
//#endregion




//#region FUNCTIONS
/**
 * Create a regex to match the language abbreviations in the corpus.
 * @param lst list of language abbreviations to match
 * @returns a regex to match the language abbreviations
 */
function createRegex(lst: Iterable<string>) {
  let a = '\\b(';
  for (const v of lst)
    a += v.length>1? `${v}|` : `${v}\\.|`;
  a = a.substring(0, a.length-1);
  a += `)\\b`;
  return new RegExp(a, 'i');
}


/**
 * Load the languages corpus from CSV file.
 * @param file CSV file path
 * @returns languages corpus
 */
async function loadFromCsv(file: string) {
  const map  = new Map<string, Language>();
  const data = await Deno.readTextFile(file);
  const records = csv.parse(data, {skipFirstRow: true, comment: "#"});
  for (const r of records) {
    map.set(r.abbr, r as unknown as Language);
  }
  return map;
}


/**
 * Load the languages corpus from the file.
 * @returns languages corpus
 */
export async function loadLanguages(): Promise<Map<string, Language>> {
  if (corpus) return corpus;
  corpus = await loadFromCsv(languagesCsv());
  match  = createRegex(corpus.keys());
  return corpus;
}


/**
 * Get the path to the languages CSV file.
 * @returns CSV file path
 */
export function languagesCsv(): string {
  return path.join(import.meta.dirname || '', 'index.csv');
}


/**
 * Obtain SQL command to create and populate the languages table.
 * @param tab table name
 * @param opt options for the table
 * @returns SQL command
 */
export async function languagesSql(tab: string="languages", opt: SetupTableOptions={}): Promise<string> {
  return setupTable(tab, {abbr: "TEXT", lang: "TEXT"},
    (await loadLanguages()).values() as Iterable<RowData>,
    Object.assign({pk: "abbr", index: true, tsvector: {abbr: "A", lang: "B"}}, opt));
}


/**
 * Get matching languages for the given text.
 * @param txt text to search for
 * @returns `{abbr, lang}` if found, otherwise null
 */
export function languages(txt: string): Language | null {
  if (match == null) return null;
  txt = txt.replace(RLANGUAGES, (m) => {
    const v = m.replace(/\W/g, '');
    return v.length===1? `${m.trim()} ` : `${v} `;
  }).toLowerCase();
  const m = txt.match(match);
  if (m == null) return null;
  return corpus?.get(m[2].replace('.', '')) || null;
}
