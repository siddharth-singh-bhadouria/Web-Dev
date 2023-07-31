const express = require('express')
const app = express()
const cookieParser = require('cookie-parser')

app.use(cookieParser('thisismysecret'))

app.get('/greet', (req, res) => {
    const { name = 'No-name' } = req.cookies
    res.send(`HEY THERE ${name}!!`)
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'hendrietta')
    res.cookie('animal', 'harlequin shrimp')
    res.send('HEY THERE!!')
})

app.get('/getsignedcookie', (req, res) => {
    res.cookie('fruit', 'grape', { signed: true })
    res.send('OK , SIGNED YOUR FRUIT COOKIE!!')
})

app.get('/verifyfruit', (req, res) => {
    res.send(req.signedCookies)
    // res.cookie('fruit', 'grape', { signed: true })

})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!!')
})