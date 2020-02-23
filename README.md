The Nutritive Value of Indian Foods ([NVIF 1989]) provides nutrient composition for 592 key foods.
Food composition values were measured by [National Institute of Nutrition, Hyderabad]. You can ask about composition of 592 key foods in India here: [nvif1989.github.io].

Shown below is a text-query javascript API for search information through these tables. However, you may also add these to a database for more control over the query.

```javascript
const nvif1989 = require('nvif1989');


async function main() {
await nvif1989.compositions.load();
await nvif1989.codes.load();
nvif1989.columns.load();
nvif1989.groups.load();
/* load corpus first */
 
// NOTE: grup is wrong, curd is wrong
nvif1989.compositions('pine apple');
nvif1989.compositions('ananas comosus');
nvif1989.compositions('sapuri');
nvif1989.compositions('294');
// [
//   {
//     code: '294',
//     name: 'PINE APPLE',
//     scie: 'Ananas comosus',    lang: 'B. Anarash; G., H., Kan., Mar., P. Ananas; Mal. Kayitha chakka; O. Sapuri Anasianas; Tam. Anasi pazham; Tel. Anasa Pandu',
//     grup: 'Cereal grains and products',
//     tags: 'vegetarian eggetarian fishetarian veg',
//     enerc: 46,
//     water: 87.8,
//     ...
//   }
// ]

nvif1989.columns('vitamin c');
nvif1989.columns('c-vitamin');
// [
//   {
//     code: 'vitc',
//     name: 'Vitamin C',
//     tags: 'ascorbic acid total ascorbate water soluble essential'
//   }
// ]

nvif1989.codes('hing');
// [ { name: 'Hing (B.,G.,H.,Mar.,P.)', code: '215' } ]

nvif1989.groups('cereals');
nvif1989.groups('Grains');
nvif1989.groups('505a');
// [
//   {
//     code: 'A',
//     group: 'Cereal grains and products',
//     entries: '1-27;452-465;505a',
//     tags: 'vegetarian eggetarian fishetarian veg'
//   }
// ]
}
main();
```

### reference

| Method                  | Action
|-------------------------|-------
| [compositions]          | Detailed nutrient composition of 592 key foods in India.
| [columns]               | Codes and names of nutrients, and its components.
| *pictures*              | Single representative photo of each foods (JPEG, 307x173).
| *intakes*               | Recommended daily intakes of nutrients.
| *hierarchy*             | Tree-like hierarchy of nutrients, and its components.
| *representations*       | Representations of columns (as factors and units).
| [codes]                 | Uniquely identifiable codes for each food.
| [groups]                | Categorization of food by their common names.
| [descriptions]          | Names of each food in local languages, including scientific name.
| *abbreviations*         | Full forms of abbreviations used in the original book.
| [languages]             | Full form of language abbreviations.
| [nutrients]             | Detailed description of various nutrients, and its components.
| [proteinValue]          | Absorption and bioavailability of different protein sources.
| [calorieCoefficient]    | Relative calorie requirement of distinct demographics.
| [activityClass]         | Classification of activities based on occupations.
| [energies]              | Metabolizable energy conversion factors.
| [jonesFactors]          | Jones factors for conversion of nitrogen to protein.
| [carbohydrates]         | Conversion of carbohydrate weights to monosaccharide equivalents.
| [about]                 | On the history of malnutrition, current status, and data details.
| [contents]              | Contents in the original book.

> TODO: methods in italic.

<br>

[![nodef](https://i.imgur.com/mGVou5c.png)](https://nodef.github.io)

[activityClass]: https://www.npmjs.com/package/@nvif1989/activityclass
[calorieCoefficient]: https://www.npmjs.com/package/@nvif1989/caloriecoefficient
[codes]: https://www.npmjs.com/package/@nvif1989/codes
[columns]: https://www.npmjs.com/package/@nvif1989/columns
[compositions]: https://www.npmjs.com/package/@nvif1989/compositions
[descriptions]: https://www.npmjs.com/package/@nvif1989/descriptions
[groups]: https://www.npmjs.com/package/@nvif1989/groups
[languages]: https://www.npmjs.com/package/@nvif1989/languages
[proteinValue]: https://www.npmjs.com/package/@nvif1989/proteinvalue
[NVIF 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
