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
        const newPost = {
            "postId": 1,
            "name": "test-name",
            "email": "test@email",
            "body": "test-body"
        }
        const urlParams = '/create'
        return request(app)
            .post(urlParams)
            .send(newPost)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .then(res => {
                // console.log(res)
                expect(res.body.email).toBe(newPost.email)
            })
    })
})