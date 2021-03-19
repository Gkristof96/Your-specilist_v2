import asyncHandler from 'express-async-handler'
import Provider from '../models/providerModel.js'
import User from '../models/userModel.js'

// @desc    get Providers
// @route   GET /api/providers/
// @access  Public
const getProviders = asyncHandler(async (req, res) => {
    const pageSize = 2
    const page = Number(req.query.pageNumber) || 1
    
    const providers = await Provider.find({}).limit(pageSize).skip(pageSize * (page - 1))

    res.json({providers, page, pages: Math.ceil(5 / pageSize)})
})

// @desc    get Provider by id
// @route   GET /api/providers/
// @access  Public
const getProviderById = asyncHandler(async (req, res) => {
    const provider = await Provider.findById(req.params.id)
    const user = await User.findById(provider.user)

    if(provider) {
        res.json({
            id: user._id,
            email: user.email,
            name: provider.name,
            image: provider.image,
            rating: provider.rating,
            bio: provider.bio,
            tel: provider.tel,
            city: provider.city,
            numReviews: provider.numReviews,
            gallery: provider.gallery,
            professions: provider.professions
        })
    } else {
        res.status(404)
        throw new Error('A szakember nem található!')
    }
})

export { getProviders, getProviderById }