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
        return request(app)
            .get('/get')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(res => {
                expect(res.body.length).toBeGreaterThan(0)
            })
    })
})



