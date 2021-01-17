// test server
const app = require('../../server/server')
const { mongoTest } = require('../../server/database')

// tests
const request = require('supertest')
describe('DELETE post /delete', () => {
    beforeEach(async() => {
        await mongoTest.connect();
    })
    afterEach(async() => {
        await mongoTest.disconnect();
    })

    it ('res success message', async () => {
        const _id = '60044ff3ccffad264c8439b7'
        const urlParams = `/delete/${_id}`
        return request(app)
            .delete(urlParams)
            .expect(200)
            .then(res => {
                // console.log(res)
                expect(res.body._id).toBe(_id)
            })
    })
})