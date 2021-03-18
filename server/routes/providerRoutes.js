import express from 'express'
const router = express.Router()
import { getProviders, getProviderById } from '../controllers/providerControllers.js'

router.route('/').get(getProviders)
router.route('/:id').get(getProviderById)


export default router