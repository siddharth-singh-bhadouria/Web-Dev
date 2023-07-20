const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/shopApp')
    .then(() => {
        console.log('CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO ERROR!!')
        console.log(err)
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: true,
        maxlength: 20
    },
    price: {
        type: Number,
        default: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

})


// productSchema.methods.greet = function () {
//     console.log('HELLOOO!! HI !! HOWDYYYY!!')
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale
    return this.save()
}

productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat)
    return this.save()
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}

const Product = mongoose.model('Product', productSchema)


// const findProduct = async () => {
//     const foundProduct = await Product.findOne({ name: 'Mountain Bike' })
//     foundProduct.greet()
// }

const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Cycling Jersey' })
    console.log(foundProduct)
    await foundProduct.toggleOnSale()
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

// findProduct()

// Product.fireSale().then(data => console.log(data))






// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'S' })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })


// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })
