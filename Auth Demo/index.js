const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose')
const User = require('./models/user')

mongoose.connect('mongodb://127.0.0.1:27017/authDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/register', (req, res) => {
    res.render('register')
})

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET! YOU CANNNOT SEE ME UNLESS YOU ARE LOGGED IN!!')
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!!')
})