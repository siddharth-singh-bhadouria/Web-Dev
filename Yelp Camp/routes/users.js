const express = require('express')
const router = express.Router()
const catchAsync = require('../utils/catchAsync')
const passport = require('passport')
const { storeReturnTo } = require('../middleware')
const users = require('../controllers/users')


router.route('/register')
    .get(users.renderRegister)
    .post(catchAsync(users.register))

router.route('/login')
    .get(users.renderLogin)
    .post(storeReturnTo, passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), (req, res) => {
        req.flash('success', 'Welcome Back!')
        const redirectUrl = res.locals.returnTo || '/campgrounds'
        delete res.locals.returnTo
        res.redirect(redirectUrl)
    })

router.get('/logout', users.logout)

module.exports = router