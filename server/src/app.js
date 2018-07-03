var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/sharelearningtools')
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function (callback) {
  console.log('Connection succeeded')
})

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

var catalog = require('./routes/catalog')

app.use('/', catalog)


app.listen(process.env.PORT || 8081)