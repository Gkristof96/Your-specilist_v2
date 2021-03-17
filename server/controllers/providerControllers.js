import asyncHandler from 'express-async-handler'
import Provider from '../models/providerModel.js'

// @desc    get Providers
// @route   GET /api/providers/
// @access  Public
const getProviders = asyncHandler(async (req, res) => {
    const pageSize = 2
    const page = Number(req.query.pageNumber) || 1
    
    const providers = await Provider.find({}).limit(pageSize).skip(pageSize * (page - 1))

    res.json({providers, page, pages: Math.ceil(5 / pageSize)})
})


export { getProviders }