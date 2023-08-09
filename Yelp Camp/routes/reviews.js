const express = require('express')
const router = express.Router({ mergeParams: true }) //mergeParams to access params from index.js file 
const catchAsync = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError')
const { reviewSchema } = require('../schemas')
const Campground = require('../models/campground')
const Review = require('../models/review')
const { validateReview, isLoggedIn } = require('../middleware')


router.post('/reviews', isLoggedIn, validateReview, catchAsync(async (req, res) => {
    const { id } = req.params
    const campground = await Campground.findById(id)
    const review = new Review(req.body.review)
    review.author = req.user._id
    campground.reviews.push(review)
    await campground.save()
    await review.save()
    req.flash('success', 'Created new review!')
    res.redirect(`/campgrounds/${campground._id}`)
}))

router.delete('/reviews/:reviewId', isLoggedIn, catchAsync(async (req, res) => {
    const { id, reviewId } = req.params
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } })
    await Review.findByIdAndDelete(reviewId)
    req.flash('success', 'Successfully deleted review!')
    res.redirect(`/campgrounds/${id}`)
}))



module.exports = router