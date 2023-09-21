const express = require('express')
const cors = require('cors')
const contactsRouter = require("./app/routes/contact.route")
const port = 3000

const app = express()

app.use(cors())

app.use((req, res, next) => {
    return next(new ApiError(404, "Resource not found"))
})

app.use((err, req, res, next) => {
    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    })
})

app.use("/api/contacts", contactsRouter);

module.exports = app
