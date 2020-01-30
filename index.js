const Sql = require('sql-extra');
const lunr = require('lunr');
const path = require('path');

var corpus = new Map();
var ranges = new Map();
var exacts = new Map();
var index = null;
var ready = false;


function loadCorpus() {
  for(var [k, v] of require('./corpus'))
    corpus.set(k, v);
};

function setupIndex() {
  index = lunr(function() {
    this.ref('code');
    this.field('code');
    this.field('group');
    this.field('tags');
    this.pipeline.remove(lunr.stopWordFilter);
    for(var r of corpus.values())
      this.add(r);
  });
};

function setupRanges() {
  for(var {code, entries} of corpus.values()) {
    for(var entry of entries.split(';')) {
      if(!entry.includes('-')) exacts.set(entry, code);
      else ranges.set(entry.split('-').map(v => parseInt(v, 10)), code);
    }
  }
}

function csv() {
  return path.join(__dirname, 'index.csv');
};

function sql(tab='groups', opt={}) {
  return Sql.setupTable(tab, {code: 'TEXT', group: 'TEXT', entries: 'INT', tags: 'TEXT'}, require('./corpus').values(),
    Object.assign({pk: 'code', index: true, tsvector: {code: 'A', group: 'B', tags: 'C'}}, opt));
};

function load() {
  if(ready) return true;
  loadCorpus(); setupIndex(); setupRanges();
  return ready = true;
};

function findEntry(entry) {
  if(exacts.has(entry)) return exacts.get(entry);
  var n = parseInt(entry, 10);
  for(var [[bgn, end], code] of ranges)
    if(bgn<=n && n<=end) return code;
  return null;
}

function groups(txt) {
  if(index==null) return [];
  var z = [], txt = txt.replace(/\W/g, ' ');
  var mats = index.search(txt), max = 0;
  for(var mat of mats)
    max = Math.max(max, Object.keys(mat.matchData.metadata).length);
  for(var mat of mats)
    if(Object.keys(mat.matchData.metadata).length===max) z.push(corpus.get(mat.ref));
  var code = findEntry(txt);
  if(!code) return z;
  var mat = corpus.get(code);
  if(z.includes(mat)) z.splice(z.indexOf(math), 1);
  z.unshift(mat);
  return z;
};
groups.csv = csv;
groups.sql = sql;
groups.load = load;
groups.corpus = corpus;
module.exports = groups;
