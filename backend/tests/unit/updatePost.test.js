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

    it ('res updated json', async () => {
        const _id = '60044ff3ccffad264c8439b8'
        const urlParams = `/update/${_id}`
        const update = {"body": "new test-body 12345"}
        return request(app)
            .put(urlParams)
            .send(update)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .then(res => {
                // console.log(res)
                expect(res.body.body).toBe(update.body)
            })
    })
})