[Food descriptions] in [Nutritive Value of Indian Foods 1989].

```
Name looks like mispronounced from their
english version: french beans
```

```javascript
const descriptions = require('@nvif1989/descriptions');
// descriptions.corpus: Map {code => {code, name, scie, desc}}
// descriptions.load(): Promise (corpus loaded)
// descriptions.sql([table], [options]): Promise (sql commands)
// descriptions.csv(): path to csv file
// descriptions(<query>)
// -> [{code, name, scie, desc}] for matched foods


await descriptions.load();
/* load corpus first */

descriptions('amchoor');
// [
//   {
//     code: '228',
//     name: 'Mango powder',
//     scie: 'Mangifera Indica',
//     desc: 'H. Amchoor'
//   }
// ]

descriptions('khoa');
// [
//   {
//     code: '430',
//     name: 'Khoa',
//     scie: '',
//     desc: 'B., H., Kan., Mal., P., Tel. Khoa; O. Kua; Tam. Thirattu pal'
//   },
//   {
//     code: '429',
//     name: 'Khoa (whole buffalo milk)',
//     scie: '',
//     desc: ''
//   }
// ]
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
