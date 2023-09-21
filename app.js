const express = require('express')
const cors = require('cors')
const contactsRouter = require("./app/routes/contact.route");
const port = 3000

const app = express()

app.use(cors())

app.use("/api/contacts", contactsRouter);

app.get('/', function (req, res, next) {
 res.json({msg: 'Welcome to contact book app'})
})
  
module.exports = app