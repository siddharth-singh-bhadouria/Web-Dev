const express = require('express')
const app = express()
const session = require('express-session')

const sessionOptions = { secret: 'thisisnotagoodsecret', resave: false, saveUninitialized: false }

app.use(session(sessionOptions))

app.get('/viewcount', (req, res) => {
    if (req.session.count) {
        req.session.count += 1
    }
    else {
        req.session.count = 1
    }
    res.send(`You have viewed this page ${req.session.count} times`)
})

// Different browsers have different session id , thats why they each access different sessions or different session portions .  

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000!!')
})