const Post = require('../models/postModel.js')

exports.createPost = async (req, res) => {
    // console.log(req.body)
    const newPost = new Post(req.body)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    }
    catch (error) {
        res.status(409).json({message: error.message})
    }
}

exports.getPosts = async (req, res) => {
    // console.log(req.query)
    try {
        if (Number.isNaN(parseInt(req.query.postId))) {
            var posts = await Post.aggregate([
                {$match: 
                    {name: new RegExp(req.query.name, 'i')}
                }
            ]) 
        }
        else {
            var posts = await Post.aggregate([
                {$match: {
                    $and: [
                        {postId: parseInt(req.query.postId), name: new RegExp(req.query.name, 'i')}
                    ],
                }}
            ]) 
        }
        res.status(200).json(posts)
    }
    catch (error) {
        res.status(404).json({message: error.message})
    }
}

exports.updatePost = async (req, res) => {
    // console.log(req.params, req.body)
    try {
        const update = await Post.findByIdAndUpdate(req.params._id, req.body)
        res.status(202).json(update)
    }
    catch (error) {
        res.status(407).json({message: error.message})
    }
}

exports.deletePost = async (req, res) => {
    // console.log(req.params)
    try {
        await Post.deleteOne(req.params)
        res.status(200).json(req.params)
    }
    catch (error) {
        res.status(407).json({message: error.message})
    }
}
