const mongoose      = require('mongoose')
const { Schema }    = mongoose.Schema

const quizesSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    start: {
        type: Date
    },
    end: {
        type: Date
    }
})

module.exports = mongoose.model('Quizes', quizesSchema)