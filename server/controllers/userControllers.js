import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js'
import User from '../models/userModel.js'
import Provider from '../models/providerModel.js'

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email: email })
  const provider = await Provider.findOne({ user: user._id})
  console.log(provider)

  if(user && (await user.matchPassword(password))) {
    res.json({
        _id: user._id,
        name: provider.name,
        image: provider.image,
        email: user.email,
        token: generateToken(user._id)
    })
  } else {
      res.status(401)
      throw new Error('Invalid email or password')
  }
})

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body

  const userExists = await User.findOne({ email })

  if(userExists) {
    res.status(400)
    throw new Error('User already exists')
  }

  const user = await User.create({
    email,
    password
  })
  const provider = await Provider.create({
    user: user._id,
    name: name
  })

  if(user && provider) {
    res.status(201).json({
        _id: user._id,
        name: provider.name,
        email: user.email,
        haveProvider: user.haveProvider,
        token: generateToken(user._id)
    })
  } else {
    res.status(400)
    throw new Error('Invalid user data')
  }
})

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Public
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id)

  if(user) {
    res.json({
      _id: user._id,
      email: user.email,
      haveProvider: user.haveProvider
    })
  } else {
    res.status(404)
    throw new Error('User not found')
  }
})

export {
    authUser,
    getUserProfile,
    registerUser
}