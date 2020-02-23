[Contents] in the original book.
> This is part of package [nvif1989].<br>
> Source: [Nutritive Value of Indian Foods 1989].

```javascript
const contents = require('@nvif1989/contents');
// contents.corpus: Map {sno => {sno, title, pagenos}}
// contents.load(): true (corpus loaded)
// contents.sql([table], [options]): sql commands
// contents.csv(): path to csv file
// contents(<query>)
// -> [{sno, title, pagenos}] for matched contents


contents.load();
/* load corpus first */

contents('table 2');
contents('Water soluble vitamins');
// [ { sno: '6.2.',
//     title: 'Table 2:  Water Soluble Vitamins',
//     pagenos: '31' } ]

contents('what is page number of table 3?');
contents('fat soluble vitamin page number');
// [ { sno: '6.3.',
//     title: 'Table 3:  Fat Soluble Vitamins',
//     pagenos: '61' } ]
```

<br>

[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].

[nvif1989]: https://www.npmjs.com/package/nvif1989
[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[Contents]: https://github.com/nvif1989/contents/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
