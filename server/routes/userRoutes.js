import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfileById,
  registerUser
} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile/:id').get(protect, getUserProfileById)

export default router