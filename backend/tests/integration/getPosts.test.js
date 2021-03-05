// test server
const app = require('../../server/app')
const { mongoTest } = require('../../server/database')

// tests
const request = require('supertest')

describe('GET posts /getPosts', () => {
    beforeEach(async() => {
        await mongoTest.connect();
    })
    afterEach(async() => {
        await mongoTest.disconnect();
    })

    it ('res array of fetched json', async () => {
        // TEST get posts
        await request(app)
            .get('/getPosts')
            .then(res => {
                console.log(res.body.length)
                expect(res.body.length).toBeGreaterThan(0)
            })
    })
})



