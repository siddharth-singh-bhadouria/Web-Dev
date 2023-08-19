const express = require('express')
const router = express.Router({ mergeParams: true }) //mergeParams to access params from index.js file 
const catchAsync = require('../utils/catchAsync')
const ExpressError = require('../utils/ExpressError')
const { validateReview, isLoggedIn, isReviewAuthor } = require('../middleware')
const reviews = require('../controllers/reviews')


router.post('/reviews', isLoggedIn, validateReview, catchAsync(reviews.createReview))

router.delete('/reviews/:reviewId', isLoggedIn, isReviewAuthor, catchAsync(reviews.deleteReview))

module.exports = router