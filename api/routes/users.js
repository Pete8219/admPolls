const express       = require('express')
const router        = express.Router()
const mongoose      = require('mongoose')


const Users         = require('../models/Users')

//Select all users from database

router.get('/', async (req, res) => {
    try {
        const users = await Users.find({})

        if(!users.length) {
            res.status(404).json('Users not found')

        }

        res.status(200).json(users)
    } catch(e) {
        res.status(500).json({
            message: "Something wrong"
        })

    }

})


router.post('/add', async (req,res) => {
    try {
        const createOps = {}

        for (let key in req.body) {
            createOps[key] = req.body[key]
        }

        const user = await new Users({...createOps })
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

module.exports = router


