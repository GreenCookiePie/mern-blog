const newman = require('newman')
const Environment = require('./mern-blog env.postman_environment.json')
const Collection = require('./mern-blog test.postman_collection.json')

newman
.run({
    environment: Environment,
    collection: Collection,
    reporters: 'cli'
}, 
(err) => {
    if (err) { throw err; }
    console.log('collection run complete!')
})

// to run: node tests/integration/newman.config.js