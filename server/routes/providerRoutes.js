import express from 'express'
const router = express.Router()
import { getProviders, getProviderById, createProviderReview } from '../controllers/providerControllers.js'

router.route('/').get(getProviders)
router.route('/:id').get(getProviderById)
router.route('/:id/reviews').post(createProviderReview)


export default router