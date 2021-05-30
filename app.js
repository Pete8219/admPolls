const express       = require('express')
const app           = express()
const path          = require('path')
const mongoose      = require('mongoose')

require('dotenv').config()

app.use(express.static(path.join(__dirname,'public')))
app.use(express.json({extended: true}))

async function start() {
    try{
        await mongoose.connect(process.env.CONNECTIONSTRING,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }) 
        console.log("Database connected") 

     } catch(e) {
            console.log("Server Error", e.message)
        }
    

}

start()


app.use("/users", require('./api/routes/users'))

module.exports = app