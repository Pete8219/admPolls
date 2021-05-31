const express       = require('express')
const Quizes = require('../models/Quizes')
const router        = express.Router()


//Select all quizes

router.get("/", async (req, res) => {
    try {
        const quizes = await Quizes.find({})
        res.status(200).json(quizes)

    }catch(e) {
        res.status(500).json({
            message: "Something wrong"
        })
    }
})

//Select quiz by ID
router.get("/:id", async (req, res) => {
    try {
        const quiz = await Quizes.find( {_id: req.params.id})
        if(!quiz.length) {
            return res.status(404).json({
                message: `Quize with ID: ${req.params.id} not found`
            })
        }
        res.status(200).json(quiz)

    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})


//Add new quiz
router.post("/add", async (req,res) => {
    try {
        const quiz = new Quizes({ title: req.body.title })
        await quiz.save()
        res.status(201).json({
            message: "Quiz successfully added"
        })
    } catch (e) {
        res.status(500).json({
            message: e.message
        })
    }
})

//Update selected quiz

router.patch("/:id", async (req, res) => {
    try {
        const updateOps = {}

        for (let key in req.body) {
            updateOps[key] = req.body[key]
        }

        await Quizes.replaceOne({ _id: req.params.id}, {...updateOps})

        res.status(200).json({
            message: `Quize with ID: ${req.params.id} was successfully updated`
        })
            
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//Delete selected quiz

router.delete("/:id", async (req, res) => {
    
    try {
        await Quizes.deleteOne({ _id: req.params.id})
        res.status(200).json({
            message: `Quiz with ID: ${req.params.id} was deleted`
        })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

module.exports = router
