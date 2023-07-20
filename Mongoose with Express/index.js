const express = require('express')
const app = express()
const path = require('path')
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/movieApp')
    .then(() => {
        console.log('CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO ERROR!!')
        console.log(err)
    })

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/dogs', (req, res) => {
    res.send('WOOF!!')
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!!')
}) 