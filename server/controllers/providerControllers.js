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

// @desc    Create new review
// @route   GET /api/providers/:id/reviews
// @access  Public
const createProviderReview = asyncHandler(async (req, res) => {
    const { name, email, rating, message } = req.body

    const provider = await Provider.findById(req.params.id)
    if(provider) {
        const alreadyReviewed = provider.reviews.find(
            (r) => r.email === email
        )

        if(alreadyReviewed) {
            res.status(400)
            throw new Error('Provider already reviewed')
        }

        const review = {
            name,
            email,
            rating: Number(rating),
            message
        }

        provider.reviews.push(review)

        provider.numReviews = provider.reviews.length

        provider.rating = provider.reviews.reduce((acc,item) => item.rating + acc, 0) / provider.reviews.length

        await provider.save()
        res.status(201).json({ message: 'Review added' })
    } else {
        res.status(404)
        throw new Error('Provider not found')
    }
})

export { getProviders, getProviderById, createProviderReview }