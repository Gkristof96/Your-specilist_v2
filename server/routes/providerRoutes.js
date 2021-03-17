import express from 'express'
const router = express.Router()
import { getProviders } from '../controllers/providerControllers.js'

router.route('/').get(getProviders)


export default router