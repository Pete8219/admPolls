const mongoose      = require('mongoose')
const { Schema }    = mongoose.Schema
const Quizes        = require('./Quizes')

const questionsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    answers: {
        type: Array
    },
    answerType: {
        type: String,
        required: true,
        default: 'Radio'
    },
    quizeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quizes'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isRequired: {
        type: Boolean,
        default: false
    }


})

module.exports = mongoose.model('Questions', questionsSchema)