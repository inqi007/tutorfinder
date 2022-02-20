const {promisify} = require('util')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const {StatusCodes} = require('http-status-codes')
const BadRequestError = require('../errors/bad-request')
const UnauthenticatedError = require('../errors/unauthenticated')
const bcrypt = require('bcryptjs')

const signToken = id => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: "90d"
})}

const register = async (req, res) => {
    /*if (!name || !email || !password) {
        throw new BadRequestError('Please provide name, email and password')
    }*/
    console.log(req)
    // Creates the user
    const user = await User.create({...req.body})
    // Generating a token for the user
    const token = signToken(user._id)
    // Sending back the response
    res.status(StatusCodes.CREATED).json({
        status: 'success',
        token,
        user
    })
}

const login = async (req, res) => {
    const {email, password} = req.body
    // Checks if email and password exists
    if (!email || !password) {
        throw new BadRequestError('Please provide email and password')
    }

    //Checks if user exists and if password is correct
    const user = await User.findOne({email}).select('+password')
    if (!user || !(await user.correctPassword(password, user.password))) {
        throw new UnauthenticatedError('Incorrect email or password')
    }

    const token= signToken(user._id)
    res.status(StatusCodes.OK).json({
        status: 'success',
        token
    })

}

const protect = async(req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        token = req.headers.authorization.split(' ')[1]
    }

    if(!token) {
        throw new UnauthenticatedError('You are not logged in!')
    }

    //Verification token
    const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)

    next()
}

module.exports = {
    register, login, protect
}