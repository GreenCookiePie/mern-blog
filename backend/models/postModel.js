const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({
    postId: {
        type: Number,
        required: true
    },
    id: {
        type: Number
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('Post', PostSchema);