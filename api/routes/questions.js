const express       = require('express')
const router        = express.Router()
const Questions     = require('../models/Questions')

//Select all questions

router.get("/", async(req, res) => {
    try{
        const questions = await Questions.find({})

        if(!questions.length) {
            return res.status(404).json({
                message:"Not found"
            })
        }
        res.status(200).json(questions)
    }catch(e){
        res.status(500).json({
            message: "something wrong"
        })
    }
})

//Find question by ID

router.get("/:id", async (req, res) => {
    try {
        const question = await Questions.find({ _id : req.params.id})
        res.status(200).json(question)  
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
        
    }
})

//Find all questions by QuizId

router.get("/byQuize/:id", async (req, res) => {
    
    try {
       const questions = await Questions.find({ quizeId: req.params.id})
       res.status(200).json(questions)     
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
        
    }
})

//Add new question
router.post("/add", async (req, res) => {
    const createdOps = {}

    for (let key in req.body) {
        createdOps[key] = req.body[key]
    }

    try {
        const question = new Questions({...createdOps})
        await question.save()

        res.status(201).json({
            message: "Question was successfully added"
        })

    } catch(e) {
        res.status(500).json({
            message: "Something wrong"
        })
    }
})

//Update selected question

router.patch("/:id", async (req, res) => {
    
    const updateOps = {}

    for (let key in req.body) {
        updateOps[key] = req.body[key]
    }

    try {
        await Questions.replaceOne({ _id: req.params.id}, {...updateOps}) 
        res.status(200).json({
            message: "Question was successfully updated"
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
        
    }
})

//Delete selected question

router.delete("/:id", async (req, res) => {
    try {
        await Questions.deleteOne({ _id: req.params.id})
        res.status(200).json({
            message: `Question with ID: ${req.params.id} was deleted`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
    

})

module.exports = router