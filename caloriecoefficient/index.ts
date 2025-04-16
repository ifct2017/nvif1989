// const Sql = require('sql-extra');
// const lunr = require('lunr');
// const path = require('path');

// var corpus = new Map();
// var ranges = new Map();
// var index = null;
// var ready = false;


// function loadCorpus() {
//   for(var [k, v] of require('./corpus'))
//     corpus.set(k, v);
// };

// function setupIndex() {
//   index = lunr(function() {
//     this.ref('group');
//     this.field('group');
//     this.pipeline.remove(lunr.stopWordFilter);
//     for(var r of corpus.values())
//       this.add(r);
//   });
// };

// function setupRanges() {
//   for(var {group} of corpus.values()) {
//     if(!group.includes(' to ')) continue;
//     group.replace(/(\d+)\s+to\s+(\d+)/, (m, p1, p2) => {
//       ranges.set([parseInt(p1, 10), parseInt(p2, 10)], group);
//     });
//   }
// }

// function csv() {
//   return path.join(__dirname, 'index.csv');
// };

// function sql(tab='caloriecoefficient', opt={}) {
//   return Sql.setupTable(tab, {group: 'TEXT', cu: 'REAL'}, require('./corpus').values(),
//     Object.assign({pk: 'group', index: true, tsvector: {group: 'A'}}, opt));
// };

// function load() {
//   if(ready) return true;
//   loadCorpus(); setupIndex(); setupRanges();
//   return ready = true;
// };

// function findEntry(entry) {
//   if(!/\d+/.test(entry)) return null;
//   var n = parseInt(entry.substring(entry.search(/\d+/)), 10);
//   for(var [[bgn, end], group] of ranges)
//     if(bgn<=n && n<=end) return group;
//   return null;
// }

// function calorieCoefficient(txt) {
//   if(index==null) return [];
//   var z = [], txt = txt.replace(/\W|years?|old/gi, ' ');
//   var mats = index.search(txt), max = 0;
//   for(var mat of mats)
//     max = Math.max(max, Object.keys(mat.matchData.metadata).length);
//   for(var mat of mats)
//     if(Object.keys(mat.matchData.metadata).length===max) z.push(corpus.get(mat.ref));
//   var code = findEntry(txt);
//   if(!code) return z;
//   var mat = corpus.get(code);
//   if(z.includes(mat)) z.splice(z.indexOf(mat), 1);
//   z.unshift(mat);
//   return z;
// };
// calorieCoefficient.csv = csv;
// calorieCoefficient.sql = sql;
// calorieCoefficient.load = load;
// calorieCoefficient.corpus = corpus;
// module.exports = calorieCoefficient;


















// const csvParse = require('csv-parse');
// const fs = require('fs');
// const os = require('os');

// var map = new Map();
// var stream = fs.createReadStream('index.csv').pipe(csvParse({columns: true, comment: '#'}));
// stream.on('error', console.log);
// stream.on('data', (r) => {
//   r.cu = parseFloat(r.cu);
//   map.set(r.group, r);
// });
// stream.on('end', () => {
//   var z = `const CORPUS = new Map([${os.EOL}`;
//   for(var [k, v] of map)
//     z += `  ["${k}", ${JSON.stringify(v).replace(/\"(\w+)\":/g, '$1:')}],${os.EOL}`;
//   z += `]);${os.EOL}`;
//   z += `module.exports = CORPUS;${os.EOL}`;
//   fs.writeFileSync('corpus.js', z);
// });
