const mongoose = require('mongoose')
const Review = require('./review')
const Schema = mongoose.Schema

const campgroundSchema = new Schema({
    title: String,
    images: [
        {
            url: String,
            filename: String
        }
    ]
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