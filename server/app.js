require('dotenv').config()
require("./config/dbConnection")

const express = require("express")
const cors = require('cors')
const logger = require("morgan")
const notFound = require('./middleware/notFound.js')
const handleErrors = require('./middleware/handleErrors.js')


// initializate app
const app = express()

// middlewares
app.use(logger("dev"));
app.use(cors())
app.use(express.json())

// Router Middlewares
app.use("/api/attendees", require("./routes/attendees.routes"))

// custom middlewares
app.use(notFound)
app.use(handleErrors)

module.exports = app


