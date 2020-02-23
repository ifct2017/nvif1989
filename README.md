Full forms of [abbreviations] used in the original book.
> This is part of package [nvif1989].<br>
> Source: [Nutritive Value of Indian Foods 1989].

```javascript
const abbreviations = require('@nvif1989/abbreviations');
// abbreviations.corpus: Map {key => {abbr, full}}
// abbreviations.load(): true (corpus loaded)
// abbreviations.sql([table], [options]): sql commands
// abbreviations.csv(): path of csv file
// abbreviations(<query>)
// -> {abbr, full} if supported, null otherwise.


abbreviations.load();
/* load corpus first */

abbreviations('GLVs');
abbreviations('g l v s');
// Green Leafy Vegetables

abbreviations('what is D.R.I.');
abbreviations('d. r. i. stands for?');
/* (full stops must immediately follow character, if present) */
/* (for single character abbreviations, full stop is mandatory) */
// Dietary reference intake
```
<br>

[![nvif1989](https://i.imgur.com/mGVou5c.png)](https://www.npmjs.com/package/nvif1989)
> You can ask about composition of 592 key foods in India here: [nvif1989.github.io].<br>
> Food composition values were measured by [National Institute of Nutrition, Hyderabad].

[nvif1989]: https://www.npmjs.com/package/nvif1989
[abbreviations]: https://github.com/nvif1989/abbreviations/blob/master/index.csv
[Nutritive Value of Indian Foods 1989]: https://www.icmr.nic.in/content/nutritive-value-indian-foods-nvif-c-gopalan-b-v-rama-sastri-sc-balasubramanian-revised
[Codes and names]: https://github.com/nvif1989/columns/blob/master/index.csv
[nvif1989.github.io]: https://nvif1989.github.io
[National Institute of Nutrition, Hyderabad]: https://www.nin.res.in/
