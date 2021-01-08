import express from 'express'

import { createPost, getPosts, updatePost } from './controllers/posts.js'

const router = express.Router()
router.post('/create', createPost)
router.get('/get', getPosts)
router.put('/update/:_id', updatePost)

export default router
