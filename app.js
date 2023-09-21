const express = require('express')
const cors = require('cors')
const port = 3000

const app = express()

app.use(cors())


app.get('/', function (req, res, next) {
 res.json({msg: 'Welcome to contact book app'})
})
  
module.exports = app