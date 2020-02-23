Uniquely identifiable [codes] for each food.
> This is part of package [nvif1989].<br>
> Source: [Nutritive Value of Indian Foods 1989].

```javascript
const codes = require('@nvif1989/codes');
// codes.corpus: Map {name => {name, code}}
// codes.load(): Promise (corpus loaded)
// codes.sql([table], [options]): Promise (sql commands)
// codes.csv(): path to csv file
// codes(<query>)
// -> [{name, code}] for matched food names


await codes.load();
/* load corpus first */

codes('hing');
// [ { name: 'Hing (B.,G.,H.,Mar.,P.)', code: '215' } ]

codes('atta');
// [
//   { name: 'Valia atta (Mal.)', code: '384' },
//   { name: 'Atta (B.,H.,O.)', code: '21' },
//   { name: 'Am-ka-guthli-ka-atta (H.)', code: '546' }
// ]
```


[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].<br>
> Take a peek at the raw data here: [Document], [Webpage].

[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[codes]: https://github.com/nvif1989/codes/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
[Document]: https://docs.google.com/spreadsheets/d/1kQ_uvtA83QVWstHE_ILJIKvff7tBBQ4X0NcxydKA2W4/edit?usp=sharing
[Webpage]: https://docs.google.com/spreadsheets/d/e/2PACX-1vQtkim3JqHFkdobAjUUmy0S3vv6bG0FwnE8-HG6S03hqYS8BKInKghZcyeiafKed2dNumNyDThcbNP_/pubhtml
