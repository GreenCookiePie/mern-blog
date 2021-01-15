// test server
const app = require('../../server/server')

const mongoose = require('mongoose')

//const { mongoTest } = require('../../server/database')
//const PORT = process.env.PORT || 6000
//mongoTest()
    // .then(() => app.listen(PORT, () => console.log(`Server runnning on PORT: ${PORT}`)))
    //.catch((error) => console.logmongoose.set('useFindAndModify', false)(error.message))

// tests
const request = require('supertest')

describe('GET /get', () => {
    beforeEach(async() => {
        await await mongoose.connect('mongodb://localhost/mern-blog-test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    })

    afterEach(async() => {
        await mongoose.disconnect();
    })

    it('res with json', async () => {
        return request(app)
            .get('/get')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body.length).toBe(500)
            })
    })
})


