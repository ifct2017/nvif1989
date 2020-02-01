[Nutritive value of Proteins] in [Nutritive Value of Indian Foods 1989].

```javascript
const proteinValue = require('@nvif1989/proteinvalue');
// proteinValue.corpus: Map {name => {name, group, bv, npu, per}}
// proteinValue.load(): true (corpus loaded)
// proteinValue.sql([table], [options]): sql commands
// proteinValue.csv(): path to csv file
// proteinValue(<query>)
// -> [{name, group, bv, npu, per}] for matched names


proteinValue.load();
/* load corpus first */

proteinValue('egg');
// [
//   { name: 'Egg', group: 'Animal proteins', bv: 96, npu: 96, per: 3.8 }
// ]

proteinValue('animal');
// [
//   { name: 'Egg', group: 'Animal proteins', bv: 96, npu: 96, per: 3.8 },
//   { name: 'Milk', group: 'Animal proteins', bv: 90, npu: 85, per: 2.8 },
//   { name: 'Meat', group: 'Animal proteins', bv: 74, npu: 76, per: 3.2 },
//   { name: 'Fish', group: 'Animal proteins', bv: 80, npu: 74, per: 3.5 }
// ]

proteinValue('oilseed');
// [
//   {
//     name: 'Groundnut',
//     group: 'Oilseeds',
//     bv: 55,
//     npu: null,
//     per: null
//   },
//   { name: 'Gingelly', group: 'Oilseeds', bv: 62, npu: null, per: null }
// ]

// ->
// bv: Biological value          (% protein retained by body)
// npu: Net protein utilized     (% protein retained and digested)
// per: Protein efficiency ratio (gain in weight : weight of protein consumed)
```


[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[Nutritive value of Proteins]: https://github.com/nvif1989/proteinvalue/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1xyvkD1L5oYW8KP7M0ZOgCt9vJw5r0mEXdMMnDdaizyc/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vQBP-lCOemaLzLVoe5BkEmybQ1kQTAt8rKv46UOSLO4bhCwhi7zQZcFSJs6v6yQWkwRYosy0LL0jGmw/pubhtml
