[Calorie coefficient] in [Nutritive Value of Indian Foods 1989].

```javascript
const calorieCoefficient = require('@nvif1989/caloriecoefficient');
// calorieCoefficient.corpus: Map {group => {group, cu}}
// calorieCoefficient.load(): true (corpus loaded)
// calorieCoefficient.sql([table], [options]): sql commands
// calorieCoefficient.csv(): path to csv file
// calorieCoefficient(<query>)
// -> [{group, cu}] for matched groups


calorieCoefficient.load();
/* load corpus first */

calorieCoefficient('children 8 years');
calorieCoefficient('8 years');
calorieCoefficient('8');
// [ { group: 'Children 7 to 9 years', cu: 0.7 } ]

calorieCoefficient('12 years');
calorieCoefficient('12');
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

calorieCoefficient('heavy worker');
// [
//   { group: 'Adult male (heavy worker)', cu: 1.6 },
//   { group: 'Adult female (heavy worker)', cu: 1.2 }
// ]

// ->
// cu: Consumption units
```


[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[Calorie coefficient]: https://github.com/nvif1989/caloriecoefficient/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1p73WlTkJubfbc2jlGSCBZ53nwQ1joACeFJ6SqY4MuGI/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vRx_dTVsd2ROW6yuYk_2m1hb7X2T4vo7KatM1ZzHIhxivr21_SgozG1j6FU0TxAk7fKKqg06HgLoCr3/pubhtml
