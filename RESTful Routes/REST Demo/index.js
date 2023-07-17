const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get('/tacos', (req, res) => {
    res.send('GET /tacos response')
})

app.post('/tacos', (req, res) => {
    const { meat, qty } = req.body
    res.send(`OK , here are you ${qty} ${meat} tacos`)
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000')
})