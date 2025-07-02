
import { franc, francAll } from 'franc'; //import used instead of require for ES6 compatibility(the library stopped working with require after the update so it is different from the web dev tutorial by Colt Steele)
import pkg from 'langs';
const { langs, langsAll } = pkg;
import colors from 'colors';
const { colour } = colors;

const input = process.argv[2]
const langCode = franc(input)

if (langCode === 'und') {
    console.log("SORRY, COULDN'T FIGURE IT OUT! TRY WITH MORE SAMPLE TEXT!".red)
}
else {
    const language = pkg.where("3", langCode)
    // console.log(`Our best guess is : ${language.name.green}`)
}
