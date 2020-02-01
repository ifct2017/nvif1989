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

proteinValue('children 8 years');
proteinValue('8 years');
proteinValue('8');
// [ { group: 'Children 7 to 9 years', cu: 0.7 } ]

proteinValue('12 years');
proteinValue('12');
// [
//   { group: 'Adolescents 12 to 21 years', cu: 1.0 },
//   { group: 'Children 9 to 12 years', cu: 0.8 }
// ]

cc('adult male');
// [
//   { group: 'Adult male (sedentary worker)', cu: 1.0 },
//   { group: 'Adult male (moderate worker)', cu: 1.2 },
//   { group: 'Adult male (heavy worker)', cu: 1.6 }
// ]

proteinValue('heavy worker');
// [
//   { group: 'Adult male (heavy worker)', cu: 1.6 },
//   { group: 'Adult female (heavy worker)', cu: 1.2 }
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
