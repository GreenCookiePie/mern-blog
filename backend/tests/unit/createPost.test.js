// const request = require('supertest')

// const postModel = require('../../models/postModel.js')
// const { createPost, getPosts, updatePost, deletePost } = require('../../controllers/posts.js')

// describe('createPost', () => {
//     beforeEach(() => {
//         req.body = dataMocks
//     })

//     it('should be a function', () => {
//         expect(typeof createPost).toBe('function')
//     })

//     it('should call postModel.create', () => {
//         createPost(req, res)
//         expect(postModel.create).toBeCalledWith(dataMocks)
//     })

//     it('should res 201 status code', () => {
//         createPost(req, res)
//         expect(res.statusCode).toEqual(201)
//         console.log(res)
//         expect(res._isEndCalled()).toBeTruthy()
//     })

//     it('should res json body', () => {
//         postModel.create.mockReturnValue(dataMocks)
//         createPost(req, res)
//         expect(res._getJSONData()).toBe(dataMocks)
//     })
// })

