const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const router = require('./routes.js')

const app = new express()
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// routes
app.use('/', router)

module.exports = app