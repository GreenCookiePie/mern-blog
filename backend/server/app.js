const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = new express()
app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

// user routes
const { createUser, getUser } = require('../controllers/users')
app.post('/createUser', createUser)
app.get('/getUser', getUser)

// post routes
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/posts')
app.post('/createPost', createPost)
app.get('/getPosts', getPosts)
app.put('/updatePost/:_id', updatePost)
app.delete('/deletePost/:_id', deletePost)

module.exports = app