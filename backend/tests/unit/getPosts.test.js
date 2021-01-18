// test server
const app = require('../../server/server')
const { mongoTest } = require('../../server/database')

// tests
const request = require('supertest')
describe('GET posts /get', () => {
    beforeEach(async() => {
        await mongoTest.connect();
    })
    afterEach(async() => {
        await mongoTest.disconnect();
    })

    it ('res  json', async () => {
        // TEST get posts
        await request(app)
            .get('/get')
            .then(res => {
                console.log(res.body.length)
                expect(res.body.length).toBeGreaterThan(0)
            })
    })
})



