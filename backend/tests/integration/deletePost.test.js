// test server
const app = require('../../server/app')
const { mongoTest } = require('../../server/database')

// tests
const request = require('supertest')

describe('DELETE post /deletePost', () => {
    beforeEach(async() => {
        await mongoTest.connect();
    })
    afterEach(async() => {
        await mongoTest.disconnect();
    })

    it ('res _id of deleted post', async () => {
        // mock data
        const mockPost = {
            "postId": 900,
            "name": "delete-test",
            "email": "test@email",
            "body": "test-body"
        }

        // create mock post
        await request(app)
            .post('/createPost')
            .send(mockPost)

        // get mock post
        const params = await request(app)
            .get(`/getPosts?postId=${mockPost.postId}&name=${mockPost.name}`)
        // console.log(params.body[0]._id)

        // TEST delete mock post
        await request(app)
            .delete(`/deletePost/${params.body[0]._id}`)
            .then(res => {
                console.log(res.body._id)
                expect(res.body._id).toBe(params.body[0]._id)
            })
    })
})