import express from 'express'
const router = express.Router()
import { getCityData, getProfessionData, getCategoryData } from '../controllers/searchController.js'

router.route('/city').get(getCityData)
router.route('/profession').get(getProfessionData)
router.route('/category').get(getCategoryData)

export default router