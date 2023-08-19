const mongoose = require('mongoose')
const Campground = require('../models/campground')
const cities = require('./cities')
const { descriptors, places } = require('./seedHelpers')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB = async () => {
    await Campground.deleteMany({})
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000)
        const price = Math.floor(Math.random() * 20) + 10
        const camp = new Campground({
            author: '64d0f50dc4d890fec17a8f05',
            location: `${cities[random1000].city} , ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            geometry: {
                type: 'Point',
                coordinates: [cities[random1000].longitude, cities[random1000].latitude]
            },
            images: [
                {
                    url: 'https://res.cloudinary.com/dzwad9kqs/image/upload/v1691752092/YelpCamp/n61qx2fmchf8imc2ut7v.jpg',
                    filename: 'YelpCamp/n61qx2fmchf8imc2ut7v'
                },
                {
                    url: 'https://res.cloudinary.com/dzwad9kqs/image/upload/v1691752097/YelpCamp/rpfrrtzg0he763mhmjkv.jpg',
                    filename: 'YelpCamp/rpfrrtzg0he763mhmjkv'
                }
            ],
            description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, eum nostrum ipsam odio ratione repudiandae odit mollitia impedit quod quam sunt aspernatur? Quidem aliquid facilis accusamus ducimus nam iure sequi!',
            price
        })
        await camp.save()
    }
}

seedDB()
    .then(() => {
        mongoose.connection.close()
    })