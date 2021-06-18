const mongoose      = require('mongoose')
const { Schema }    = mongoose.Schema

const quizesSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: String,
        default: new Date()
    },
    endDate: {
        type: String,
        default: new Date()
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isRequired: {
        type: Boolean,
        default: false
    },
    sortId: {
        type: String,
        default: '500'
    }
})

module.exports = mongoose.model('Quizes', quizesSchema)