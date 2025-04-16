// const Sql = require('sql-extra');
// const lunr = require('lunr');
// const path = require('path');

// var corpus = new Map();
// var index = null;
// var ready = false;


// function loadCorpus() {
//   for(var [k, v] of require('./corpus'))
//     corpus.set(k, v);
// };

// function setupIndex() {
//   index = lunr(function() {
//     this.ref('name');
//     this.field('name');
//     this.field('group');
//     this.pipeline.remove(lunr.stopWordFilter);
//     for(var r of corpus.values())
//       this.add(r);
//   });
// };

// function csv() {
//   return path.join(__dirname, 'index.csv');
// };

// function sql(tab='proteinvalue', opt={}) {
//   return Sql.setupTable(tab, {name: 'TEXT', group: 'TEXT', bv: 'REAL', npu: 'REAL', per: 'REAL'}, require('./corpus').values(),
//     Object.assign({pk: 'name', index: true, tsvector: {name: 'A', group: 'B'}}, opt));
// };

// function load() {
//   if(ready) return true;
//   loadCorpus(); setupIndex();
//   return ready = true;
// };

// function proteinValue(txt) {
//   if(index==null) return [];
//   var z = [], txt = txt.replace(/\W|years?|old/gi, ' ');
//   var mats = index.search(txt), max = 0;
//   for(var mat of mats)
//     max = Math.max(max, Object.keys(mat.matchData.metadata).length);
//   for(var mat of mats)
//     if(Object.keys(mat.matchData.metadata).length===max) z.push(corpus.get(mat.ref));
//   return z;
// };
// proteinValue.csv = csv;
// proteinValue.sql = sql;
// proteinValue.load = load;
// proteinValue.corpus = corpus;
// module.exports = proteinValue;











// const csvParse = require('csv-parse');
// const fs = require('fs');
// const os = require('os');

// var map = new Map();
// var stream = fs.createReadStream('index.csv').pipe(csvParse({columns: true, comment: '#'}));
// stream.on('error', console.log);
// stream.on('data', (r) => {
//   r.bv = parseFloat(r.bv);
//   r.npu = parseFloat(r.npu);
//   r.per = parseFloat(r.per);
//   map.set(r.name, r);
// });
// stream.on('end', () => {
//   var z = `const CORPUS = new Map([${os.EOL}`;
//   for(var [k, v] of map)
//     z += `  ["${k}", ${JSON.stringify(v).replace(/\"(\w+)\":/g, '$1:')}],${os.EOL}`;
//   z += `]);${os.EOL}`;
//   z += `module.exports = CORPUS;${os.EOL}`;
//   fs.writeFileSync('corpus.js', z);
// });
