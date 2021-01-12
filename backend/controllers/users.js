import User from '../models/userModel.js'

export const createUser = async (req, res) => {
    // console.log(req.body)
    const newUser = new User(req.body)
    try {
        await newUser.save()
        res.status(201).json(newUser)
    }
    catch (error) {
        res.status(409).json({message: error.message})
    }
}

export const getUser = async (req, res) => {
    // console.log(req.params, req.query)
    try {
        await User.findOne(req.query.email)
    }
    catch (error) {
        res.status(409).json({message: error.message})
    }
}