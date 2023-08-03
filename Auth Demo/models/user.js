const mongoose = require('mongoose')

const userSchema = {
    username: {
        type: String,
        required: [true, 'Username cannot be blank']
    },
    hashedPassword: {
        type: String,
        required: [true, 'Password cannot be blank']
    }
}

module.exports = mongoose.model('User', userSchema)