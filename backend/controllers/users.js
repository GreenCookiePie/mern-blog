const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

// userModel
const User = require('../models/userModel.js')

exports.createUser = async (req, res) => {
    // console.log(req.body)
    try {
        const { username, password, passwordVerify } = req.body
    
        // check username not in use
        const existingUser = await User.findOne({ username })
        if (existingUser)
            res.status(400).json({ errorMessage: `Username: ${username} already in use` })
        
        // validation
        else if (!username || !password || !passwordVerify)
            res.status(400).json({ errorMessage: 'Please fill in ALL fields' })
        else if (password !== passwordVerify)
            res.status(400).json({ errorMessage: 'Password does not match' })

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
        res.status(409).json({ message: error.message })
    }
}

exports.getUser = async (req, res) => {
    console.log(req.query)
    try {
        // find user
        const user = await User.findOne({ username: req.query.username })
        
        if ( user ) {
            // validate password
            if ( await bcrypt.compare(req.query.password, user.password) )
                res.status(200).json(req.query)
            else
                res.status(409).json({ errorMessage: 'incorrect Password' })
        }
        else
            res.status(409).json({ errorMessage: 'User not found' })
    }
    catch (error) {
        res.status(409).json({ message: error.message })
    }
}