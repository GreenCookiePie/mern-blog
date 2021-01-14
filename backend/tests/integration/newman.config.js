import newman from 'newman'
import Environment from './mern-blog env.postman_environment.json'
import Collection from './mern-blog test.postman_collection.json'

newman.run({
    environment: Environment,
    collection: Collection,
    reporters: 'cli'
}, (err) => {
    if (err) { throw err; }
    console.log('collection run complete!')
})