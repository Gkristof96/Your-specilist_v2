import express from 'express'
const router = express.Router()
import { getProviders, getProviderById, createProviderReview, updateProviderProfile, AddProfessionToProvider } from '../controllers/providerControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').get(getProviders)
router.route('/profile').put(protect, updateProviderProfile)
router.route('/profile/professions').post(protect, AddProfessionToProvider)
router.route('/:id').get(getProviderById)
router.route('/:id/reviews').post(createProviderReview)


export default router