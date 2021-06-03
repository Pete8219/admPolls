const express          = require('express')
const router           = express.Router()
const Answers          = require('../models/Answers')


//Select all answers by Quiz

router.get("/:id", async (req, res) => {
    try {
        const answers = await Answers.find({ quizId: req.params.id })
        if(!answers) {
            return res.status(404).json({
                message: "Ответов по данному опросу не найдено"
            })
        }

        res.status(200).json(answers)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
})

//Add answers

router.post("/add", async(req, res) => {
    
    const { pollData } = req.body
    
    try {
        const answers = new Answers({quizId: pollData.quizId, answers: pollData.data,  userId: pollData.userId})
        await answers.save()
        res.status(201).json({
            message: 'Ответы успешно добавлены'
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
})


module.exports = router