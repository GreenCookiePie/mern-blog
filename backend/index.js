const app = require('./server/server')

// main server
const { mongoIndex, mongoDocker } = require('./server/database')
const PORT = process.env.PORT || 5000

// mongoIndex()
//     .then(() => app.listen(PORT, () => console.log(`Server runnning on PORT: ${PORT}`)))
//     .catch((error) => console.logmongoose.set('useFindAndModify', false)(error.message))

mongoDocker()
    .then(() => app.listen(PORT, () => console.log(`Server runnning on PORT: ${PORT}`)))
    .catch((error) => console.logmongoose.set('useFindAndModify', false)(error.message))