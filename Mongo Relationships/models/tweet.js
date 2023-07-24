const mongoose = require('mongoose')
const { Schema } = mongoose

mongoose.connect('mongodb://127.0.0.1:27017/relationshipDemo')
    .then(() => {
        console.log('MONGO CONNECTION OPEN!!')
    })
    .catch((err) => {
        console.log('OH NO MONGO CONNECTION ERROR!!')
        console.log(err)
    })

const userSchema = new Schema({
    username: String,
    age: Number
})

const tweetSchema = new Schema({
    text: String,
    likes: Number,
    user: [{ type: Schema.Types.ObjectId, ref: 'User' }]
})

const User = new mongoose.model('User', userSchema)
const Tweet = new mongoose.model('Tweet', tweetSchema)

const makeTweets = async () => {
    // const user = new User({ username: 'Chickenfan99', age: 61 })
    const user = await User.findOne({ username: 'Chickenfan99', age: 61 })
    // const tweet1 = new Tweet({ text: 'omg i love my chicken family', likes: 0 })
    const tweet2 = new Tweet({ text: 'bock bock bock my chickens make noises', likes: 1239 })
    // await user.save()
    tweet2.user.push(user)
    await tweet2.save()
    console.log(tweet2)
}

// makeTweets()

// Tweet.findOne({ likes: 0 })
//     .populate('user')
//     .then((tweet) => {
//         console.log(tweet)
//     })

const findTweet = async () => {
    const t = await Tweet.find({}).populate('user')
    console.log(t)
}

findTweet()
    .then(() => {
        mongoose.connection.close()
    })
