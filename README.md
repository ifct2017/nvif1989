[Food groups] in [Nutritive Value of Indian Foods 1989].

```javascript
const groups = require('@nvif1989/groups');
// groups.corpus: Map {code => {code, group, entries, tags}}
// groups.load(): true (corpus loaded)
// groups.sql([table], [options]): sql commands
// groups.csv(): path to csv file
// groups(<query>)
// -> [{code, group, entries, tags}] for matched groups


groups.load();
/* load corpus first */

groups('cereals');
groups('Millet');
// [ { code: 'A',
//     group: 'Cereals and Millets',
//     entries: 24,
//     tags: 'vegetarian eggetarian fishetarian veg' } ]

groups('what is vegetable?');
groups('vegetable group code?');
// [ { code: 'D',
//     group: 'Other Vegetables',
//     entries: 78,
//     tags: 'vegetarian eggetarian fishetarian veg' },
//   { code: 'C',
//     group: 'Green Leafy Vegetables',
//     entries: 34,
//     tags: 'vegetarian eggetarian fishetarian veg' } ]
```


[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[Food descriptions]: https://github.com/nvif1989/descriptions/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1mQgRIU0EO8t1ZT72Fc6qAgcWBoqBTMK-gYl5fS9CrFE/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vSrD1oY4lNHWpBxzKsnYW9RelZDksfhuDITKyqGqUYAu69V6EyeIe7RajqxxKNu6_bCAg5Il7mB1WGC/pubhtml
