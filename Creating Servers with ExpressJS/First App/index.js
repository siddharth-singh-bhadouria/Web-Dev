
const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("WE GOT A NEW REQUEST!!")
//     res.send('<h1>This is my webpage!</h1>')
// })

app.get('/', (req, res) => {
    res.send('Welcome to the home page!')
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params
    res.send(`Viewing Post ID : ${postID} on the ${subreddit} subreddit`)
})

app.post('/cats', (req, res) => {
    res.send('POST REQUEST T O /cats!!!! THIS IS DIFFERENT THAN A GET REQUEST!')
})

app.get('/cats', (req, res) => {
    res.send('MEOW!!')
})

app.get('/dogs', (req, res) => {
    res.send('WOOF!')
})

app.get('/search', (req, res) => {
    const { q } = req.query
    if (!q) {
        res.send('Nothing found if nothing searched !!')
    }
    else {
        res.send(`<h1>Search results for: ${q}</h1>`)
    }

})

app.get('*', (req, res) => {
    res.send("I don't know that path!")
})





// /cats => 'meow'
// /dogs => 'woof'
// '/' 



app.listen(8080, () => {
    console.log("LISTENING ON PORT 8080")
})
