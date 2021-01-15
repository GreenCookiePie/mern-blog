const mongoose = require('mongoose')

exports.mongoIndex = async () => await mongoose.connect('mongodb://localhost/mern-blog', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})

const connect = async () => await mongoose.connect('mongodb://localhost/mern-blog-test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
const disconnect = async () => await mongoose.disconnect()
exports.mongoTest = {connect, disconnect}