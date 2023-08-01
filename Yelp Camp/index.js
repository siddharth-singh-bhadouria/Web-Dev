const express = require('express')
const app = express()
const path = require('path')
const ejsMate = require('ejs-mate')
const catchAsync = require('./utils/catchAsync')
const ExpressError = require('./utils/ExpressError')
const { campgroundSchema, reviewSchema } = require('./schemas')
const methodOverride = require('method-override')
const mongoose = require('mongoose')
const Campground = require('./models/campground')
const Review = require('./models/review')

const campgrounds = require('./routes/campgrounds')
const reviews = require('./routes/reviews')

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

app.engine('ejs', ejsMate)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.use('/campgrounds', campgrounds)
app.use('/campgrounds/:id', reviews)

app.get('/', (req, res) => {
    res.render('home')
})

app.all('*', (req, res, next) => {
    next(new ExpressError('Page Not Found!', '404'))
})

app.use((err, req, res, next) => {
    const { status = 500 } = err
    if (!err.message)
        err.message = 'Something went wrong'
    res.status(status).render('error', { err })
})


app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!!')
}) 