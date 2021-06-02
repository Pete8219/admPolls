const mongoose      = require('mongoose')
const { Schema }    = mongoose.Schema
const Quizes        = require('./Quizes')

const answersSchema = new mongoose.Schema( {
    quizId: {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Quizes'
    },
    answers: {
        type: Array
    },
    userId: {
        type: String
    }
})

module.exports = mongoose.model('Answers', answersSchema)