const mongoose = require('mongoose')
const Product = require('./models/product')

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(() => {
        console.log('CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO ERROR!!')
        console.log(err)
    })

// const p = new Product({
//     name: 'Ruby Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// p.save()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(e => {
//         console.log(e)
//     })


const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Organic Goddess Melon',
        price: 4.99,
        category: 'fruit'
    },
    {
        name: 'Organic Mini Seedless Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 1.50,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 2.69,
        category: 'dairy'
    },
]


Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })