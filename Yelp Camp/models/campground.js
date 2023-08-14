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

const campgroundSchema = new Schema({
    title: String,
    images: [imageSchema]
    ,
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
})

campgroundSchema.post('findOneAndDelete', async (data) => {
    if (data) {
        await Review.deleteMany({ _id: { $in: data.reviews } })
    }
})

const Campground = new mongoose.model('Campground', campgroundSchema)

module.exports = Campground