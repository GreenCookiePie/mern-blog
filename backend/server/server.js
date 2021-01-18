const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = new express()
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// routes
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/posts')
app.post('/create', createPost)
app.get('/get', getPosts)
app.put('/update/:_id', updatePost)
app.delete('/delete/:_id', deletePost)

module.exports = app