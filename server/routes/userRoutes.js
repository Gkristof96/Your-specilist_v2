import express from 'express'
import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'

const router = express.Router()

router.get('/', asyncHandler(async(req,res) => {
    const providers = await User.find({})
    res.json(providers)
}))

export default router