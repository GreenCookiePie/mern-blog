import Post from '../models/postModel.js'

export const createPost = async (req, res) => {
    var post = req.body
    const newPost = new Post(post)
    try {
        await newPost.save()
        res.status(201).json(newPost)
    }
    catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getPosts = async (req, res) => {
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

export const updatePost = async (req, res) => {
    console.log(req.params._id, req.body)
    try {
        const update = await Post.findByIdAndUpdate(req.params._id, req.body)
        res.status(202).json(update)
    }
    catch (error) {
        res.status(407).json({message: error.message})
    }
}
