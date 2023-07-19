// // getting-started.js
// const mongoose = require('mongoose');

// main().catch(err => console.log(err));

// async function main() {
//   await mongoose.connect('mongodb://127.0.0.1:27017/test');

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }




//INSTEAD OF THE ABOVE , SIMPLY USE .then() and .catch() blocks as mongoose.connect supports promises. 
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test');
then(() => {
    console.log('CONNECTION OPEN!!')
})
    .catch((err) => {
        console.log('OH NO ERROR!!')
        console.log(err)
    })



