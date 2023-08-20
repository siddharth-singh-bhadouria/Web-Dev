const mongoose = require('mongoose')
const Review = require('./review')
const Schema = mongoose.Schema

const imageSchema = new Schema({
    url: String,
    filename: String
})

imageSchema.virtual('thumbnail').get(function () {
    return this.url.replace('/upload', '/upload/w_200')
})

const opts = { toJSON: { virtuals: true } }

const campgroundSchema = new Schema({
    title: String,
    images: [imageSchema],
    geometry: {
        type: {
            type: String,
            enum: ['Point'],
            required: true
        },
        coordinates: {
            type: [Number],
            required: true
        }
    },
    price: Number,
    description: String,
    location: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }
    ]
}, opts)

campgroundSchema.virtual('properties.popUpMarkup').get(function () {

    try {
        return `<strong><a>${this.title}</a></strong>`
    }
    catch (e) {
        console.log('JSON fucking died1', e)
    }
})

campgroundSchema.post('findOneAndDelete', async (data) => {
    if (data) {
        await Review.deleteMany({ _id: { $in: data.reviews } })
    }
})

const Campground = new mongoose.model('Campground', campgroundSchema)

module.exports = Campground