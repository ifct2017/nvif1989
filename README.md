[Classification of activities] based on occupations in [Nutritive Value of Indian Foods 1989].

```javascript
const activityClass = require('@nvif1989/activityclass');
// activityClass.corpus: Map {activity => {activity, occupation}}
// activityClass.load(): true (corpus loaded)
// activityClass.sql([table], [options]): sql commands
// activityClass.csv(): path to csv file
// activityClass(<query>)
// -> [{activity, occupation}] for matched activities


activityClass.load();
/* load corpus first */

activityClass('teacher');
// [
//   {
//     activity: 'Sedentary, Female',
//     occupation: 'Teacher, Tailor, Executives, Housewife, Nurses, etc.'
//   },
//   {
//     activity: 'Sedentary, Male',
//     occupation: 'Teacher, Tailor, Barber, Executives, Shoe-maker, Priest, Retired Personnel, Land-Lord,Peon, Postman, etc.'
//   }
// ]

activityClass('beedi maker');
// [
//   {
//     activity: 'Moderate, Female',
//     occupation: 'Servant-maid, Cooli, Basket-maker, Weaver, Agricultural labourer, Beedi-maker, etc.'
//   }
// ]

activityClass('gang man');
// [
//   {
//     activity: 'Heavy, Male',
//     occupation: 'Stone-cutter, Blacksmith, Mine-worker, Wood-cutter, Gang-man, etc.'
//   }
// ]
```


[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[Classification of activities]: https://github.com/nvif1989/activityclass/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1MgVqwiZXYDj2nGfLqKRMTy2B3GDenzS5Gr_QVBJIifk/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vTseDkyRdiNh0TnhsB3wwphlHhvpZZs4uu5vU1ks0JgZg_S_ds-1VPLaucsQAq18e0xjYRPIQAplkQ9/pubhtml
