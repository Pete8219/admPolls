require('dotenv').config()
const app       = require('./app')
const server    = require('http').Server(app)
const PORT      = 5000 || process.env.PORT



app.get('/', (req, res) => {
    res.send('index.html')
})

server.listen(PORT, ()=>{
    console.log(`server started on port ${PORT}`)
})
