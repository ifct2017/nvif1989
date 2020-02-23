The Nutritive Value of Indian Foods ([NVIF 1989]) provides nutrient composition for 592 key foods.
Food composition values were measured by [National Institute of Nutrition, Hyderabad]. You can ask about composition of 592 key foods in India here: [nvif1989.github.io].

Shown below is a text-query javascript API for search information through these tables. However, you may also add these to a database for more control over the query.

```javascript
const nvif1989 = require('nvif1989');
// nvif1989.activityClass(<query>)
// nvif1989.calorieCoefficient(<query>)
// ...
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
| [activityClass]         | Activity class of person, based on occupation.
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
