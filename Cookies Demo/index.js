const express = require('express')
const app = express()

app.get('/greet', (req, res) => {
    res.send('HEY THERE!!')
})

app.get('/setname', (req, res) => {
    res.cookie('name', 'hendrietta')
    res.cookie('animal', 'harlequin shrimp')
    res.send('HEY THERE!!')
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!!')
})