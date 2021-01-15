const mongoose = require('mongoose')

exports.mongoIndex = async () => {
    return await mongoose.connect('mongodb://localhost/mern-blog', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
}

exports.mongoTest = async () => {
    return await mongoose.connect('mongodb://localhost/mern-blog-test', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
}