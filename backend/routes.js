const express = require('express')

// const { createUser, getUser } = require('./controllers/users')
const { createPost, getPosts, updatePost, deletePost } = require('./controllers/posts')

const router = express.Router()
// user 
// router.post('createUser', createUser)
// router.get('getUser', getUser)
// post
router.post('/create', createPost)
router.get('/get', getPosts)
router.put('/update/:_id', updatePost)
router.delete('/delete/:_id', deletePost)

module.exports = router
