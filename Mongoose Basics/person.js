const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        // console.log('CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO ERROR!!')
        console.log(err)
    })


const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName')
    .get(function () {
        return `${this.last} ${this.first}` // I want it to be written in Japanese style
    })
    .set(function (v) {
        this.first = v.substr(0, v.indexOf(' '));
        this.last = v.substr(v.indexOf(' ') + 1);
    });

personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log('ABOUT TO SAVE!!')
})

personSchema.post('save', async function () {
    console.log('JUST SAVED!!')
})

const Person = new mongoose.model('Person', personSchema)

let madara = new Person({ first: 'Madara', last: 'Uchiha' })
// madara.fullName = 'Itachi Uchiha'



madara.save()
    .then(data => {
        console.log(data)
    })
    .then(() => {
        console.log(madara.first)
    })


