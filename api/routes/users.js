const express       = require('express')
const router        = express.Router()
const mongoose      = require('mongoose')


const Users         = require('../models/Users')

//Select all users from database

router.get('/', async (req, res) => {
    try {
        const users = await Users.find({})

        res.status(200).json(users)

    } catch(e) {
        res.status(500).json({
            message: "Something wrong"
        })

    }

})

router.get("/:id", async (req, res) => {
    try {
        const user = await Users.find({ _id: req.params.id})
        if(!user.length) {
            return res.status(404).json({
                message: `User with ID: ${req.params.id} not found`
            })
        }

        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
})

//Add new user
router.post('/add', async (req,res) => {

    try {
        const createOps = {}

        for (let key in req.body) {
            createOps[key] = req.body[key]
        }


        const user =  new Users({...createOps })
        await user.save()

        res.status(201).json({
            message: 'User was created'
        })
    } catch(e) {
        res.status(500).json({
            message: "операция не выполнена, попробуйте еще раз",
          })

    }
})

//Update user with selected ID

router.patch("/:id", async (req, res) => {
    try {
        const user = await Users.updateOne({ _id : req.params.id}, { name : req.body.name })
        user.n
        user.nModified
        res.status(200).json({
            message: `User data was updated`
        })

    }catch(e) {
        res.status(500).json({
            messages: "Something wrong"
        })
    }
})


//Delete user by Id

router.delete("/:id", async (req, res) => {
    try {
        await Users.deleteOne({ _id: req.params.id})
        res.status(201).json({
            message:`User with ID:  ${req.params.id} was deleted`
        })
    } catch(e) {
        res.status(500).json({
            message:"Something wrong"
        })
    }
})

module.exports = router


