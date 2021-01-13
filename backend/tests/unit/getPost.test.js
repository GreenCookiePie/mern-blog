const { getPosts } = require('../../controllers/posts.js')

describe('getPost', () => {
    it('should be a function', () => {
        expect(typeof getPosts).toBe('function')
    })
})

