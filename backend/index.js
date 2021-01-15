// app
const app = require('./server/server')

// main server
const { mongoIndex } = require('./server/database')
const PORT = process.env.PORT || 5000
mongoIndex()
    .then(() => app.listen(PORT, () => console.log(`Server runnning on PORT: ${PORT}`)))
    .catch((error) => console.logmongoose.set('useFindAndModify', false)(error.message))
















    

// OLD METHOD

// const express = require('express')
// const bodyParser = require('body-parser')
// const mongoose = require('mongoose')
// const cors = require('cors')

// const router = require('./routes.js')

// const app = new express()
// app.use(bodyParser.json({limit: "30mb", extended: true}))
// app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
// app.use(cors())

// // routes
// app.use('/', router)

// const PORT = process.env.PORT || 5000
// mongoose.connect('mongodb://localhost/mern-blog', {useNewUrlParser: true, useUnifiedTopology: true})
//     .then(() => app.listen(PORT, () => console.log(`Server runnning on PORT: ${PORT}`)))
//     .catch((error) => console.logmongoose.set('useFindAndModify', false)(error.message))
 