// test server
const app = require('../../server/server')
const { mongoTest } = require('../../server/database')

// tests
const request = require('supertest')

describe('UPDATE post /update', () => {
    beforeEach(async() => {
        await mongoTest.connect();
    })
    afterEach(async() => {
        await mongoTest.disconnect();
    })

    it ('res updated post in json', async () => {
        // mock data
        const mockPost = {
            "postId": 900,
            "name": "update-test",
            "email": "test@email",
            "body": "test-body"
        }
        const update = {"body": "update test-body"}

        // create mock post
        await request(app)
            .post('/create')
            .send(mockPost)

        // get mock post
        const params = await request(app)
            .get(`/get?postId=${mockPost.postId}&name=${mockPost.name}`)
        // console.log(params.body[0]._id)

        // TEST update mock post
        await request(app)
            .put(`/update/${params.body[0]._id}`)
            .send(update)
            .then(res => {
                console.log(res.body)
                expect(res.body.body).toBe(update.body)
            })

        // clean mock post
        await request(app)
            .delete(`/delete/${params.body[0]._id}`)
    })

    it ('res statusCode 407 if no post found', async () => {
        // mock data
        const update = {"body": "update test-body"}

        // TEST update mock post
        await request(app)
            .put(`/update/123456`)
            .send(update)
            .then(res => {
                console.log(res.statusCode)
                expect(res.statusCode).toBe(407)
            })
    })
})