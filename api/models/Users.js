const mongoose      = require('mongoose')
const { Schema }      = mongoose.Schema


const userSchema = new mongoose.Schema({
    name: {
        type: String
    }
})

module.exports = mongoose.model('Users', userSchema)