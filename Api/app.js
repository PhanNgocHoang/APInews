const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const mongoose = require('mongoose')

//connect db
// mongoose.set('userCreateIndex', true)
// mongoose.connect(
//     '',
//     {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//         useFindAndModify: true,
//     }
// )

const app = express()
app.use(logger('dev'))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use('/',(req, res) =>{
    res.send('OK')
})
module.exports = app