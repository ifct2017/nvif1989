[Codes and names] of nutrients, and its components.
> This is part of package [nvif1989].<br>
> Source: [Nutritive Value of Indian Foods 1989].

```javascript
const columns = require('@nvif1989/columns');
// columns.corpus: Map {code => {code, name, tags}}
// columns.load(): true (corpus loaded)
// columns.sql([table], [options]): sql commands
// columns.csv(): path to csv file
// columns(<query>)
// -> [{code, name, tags}] for matched columns


columns.load();
/* load corpus first */

columns('vitamin c');
columns('c-vitamin');
// [
//   {
//     code: 'vitc',
//     name: 'Vitamin C',
//     tags: 'ascorbic acid total ascorbate water soluble essential'
//   }
// ]

columns('what is thiamine?');
columns('vitamin b1 stands for?');
// [
//   {
//     code: 'thia',
//     name: 'Thiamine (B1)',
//     tags: 'thiamin aneurine vitamin b1 b 1 water soluble essential'
//   }
// ]
```


[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].

[nvif1989]: https://www.npmjs.com/package/nvif1989
[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[Codes and names]: https://github.com/nvif1989/columns/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
