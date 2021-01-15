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

describe('UPDATE post /update', () => {
    beforeEach(async() => {
        await mongoTest.connect();
    })
    afterEach(async() => {
        await mongoTest.disconnect();
    })

    it ('res updated json', async () => {
        const update = {"body": "new test-body 12345"}
        return request(app)
            .put('/update/5fffadd7080b2316cc4a4228')
            .send(update)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .then(res => {
                console.log(res)
                expect(res.body).toBe(update.body)
            })
    })
})

