const express = require('express')
const app = express()
const User = require('./models/user')

app.get('/secret', (req, res) => {
    res.send('THIS IS SECRET! YOU CANNNOT SEE ME UNLESS YOU ARE LOGGED IN!!')
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!!')
})