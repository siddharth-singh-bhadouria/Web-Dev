const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

const productSchema = new Schema({
    name: String,
    price: Number,
    season: {
        type: String,
        enum: ['Summer', 'Spring', 'Fall', 'Winter']
    }
})

const farmSchema = new Schema({
    name: String,
    city: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
})

const Product = new mongoose.model('Product', productSchema)
const Farm = new mongoose.model('Farm', farmSchema)

// Product.insertMany([
//     { name: 'Goddess Melon', price: 4.99, season: 'Summer' },
//     { name: 'Sugar Baby Watermelon', price: 4.99, season: 'Summer' },
//     { name: 'Asparagus', price: 3.99, season: 'Spring' },
// ])

// const makeFarm = async () => {
//     const farm = new Farm({ name: 'Full Belly Farm', city: 'Guinda,CA' })
//     const melon = await Product.findOne({ name: 'Goddess Melon' })
//     farm.products.push(melon)
//     await farm.save()
//     console.log(farm)
// }

// makeFarm()

const addProduct = async () => {
    const farm = await Farm.findOne({ name: 'Full Belly Farm' })
    const watermelon = await Product.findOne({ name: 'Sugar Baby Watermelon' })
    farm.products.push(watermelon)
    await farm.save()
    console.log(farm)
}

// addProduct()

Farm.findOne({ name: 'Full Belly Farm' })
    .populate('products')
    .then((farm) => {
        console.log(farm)
    })