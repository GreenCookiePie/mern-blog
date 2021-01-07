import mongoose from 'mongoose'

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

export default mongoose.model('Post', PostSchema);