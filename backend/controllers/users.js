const bcrypt = require('bcrypt')
// const jwt = require('')

// model
const User = require('../models/userModel.js')

exports.createUser = async (req, res) => {
    // console.log(req.body)
    try {
        const { username, password, passwordVerify } = req.body
    
        // check username not in use
        const existingUser = await User.findOne({ username })
        if (existingUser)
            return res.status(400).json({ errorMessage: `Username: ${username} already in use` })
        
        // validation
        else if (!username || !password || !passwordVerify)
            return res.status(400).json({ errorMessage: 'Please fill in ALL fields' })
        else if (password !== passwordVerify)
            return res.status(400).json({ errorMessage: 'Password does not match' })

        // create new user
        else {
            const salt = await bcrypt.genSalt()
            const passwordHash = await bcrypt.hash(password, salt) 
            // console.log(passwordHash)

            const newUser = await User.create({ username: username, password: passwordHash })
            res.status(201).json(newUser)
        }
            
    }
    catch (error) {
        res.status(409).json({message: error.message})
    }
}

exports.getUser = async (req, res) => {
    // console.log(req.params, req.query)
    try {
        await User.findOne(req.query.email)
    }
    catch (error) {
        res.status(409).json({message: error.message})
    }
}