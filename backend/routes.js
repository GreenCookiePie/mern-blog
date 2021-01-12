import express from 'express'

// import { createUser, getUser } from './controllers/users.js'
import { createPost, getPosts, updatePost } from './controllers/posts.js'

const router = express.Router()
// user 
// router.post('createUser', createUser)
// router.get('getUser', getUser)
// post
router.post('/create', createPost)
router.get('/get', getPosts)
router.put('/update/:_id', updatePost)

export default router
