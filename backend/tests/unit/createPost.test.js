// test server
const app = require('../../server/server')
const { mongoTest } = require('../../server/database')

// tests
const request = require('supertest')
describe('CREATE post /create', () => {
    beforeEach(async() => {
        await mongoTest.connect();
    })
    afterEach(async() => {
        await mongoTest.disconnect();
    })

    it ('res created post in json', async () => {
        // mock data
        const mockPost = {
            "postId": 900,
            "name": "create-test",
            "email": "test@email",
            "body": "test-body"
        }

        // TEST create mock post
        await request(app)
            .post('/create')
            .send(mockPost)
            .then(res => {
                console.log(res.body)
                expect(res.body.name).toBe(mockPost.name)
            })

        // clean mock post
        const params = await request(app)
            .get(`/get?postId=${mockPost.postId}&name=${mockPost.name}`)
        // console.log(params.body[0]._id)

        await request(app)
            .delete(`/delete/${params.body[0]._id}`)
            .then(res => {
                // console.log(res.body._id)
                expect(res.body._id).toBe(params.body[0]._id)
            })
    })
})