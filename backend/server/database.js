const mongoose = require('mongoose')

// mongo localhost
exports.mongoIndex = async () => await mongoose.connect('mongodb://localhost:27017/mern-blog', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

// mongo docker - note: for docker BE to connect to docker DB, change 'localhost' to service name
exports.mongoDocker = async () => await mongoose.connect('mongodb://database:27017/mongo-test')

// mongo localhost test
const connect = async () => await mongoose.connect('mongodb://localhost:27017/mern-blog-test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
const disconnect = async () => await mongoose.disconnect()
exports.mongoTest = {connect, disconnect}
