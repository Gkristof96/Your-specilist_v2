import express from 'express'
const router = express.Router()
import {
  authUser,
  getUserProfileById,
  registerUser,
  changeUserPassword
} from '../controllers/userControllers.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route('/profile/:id').get(protect, getUserProfileById)
router.route('/profile').put(protect, changeUserPassword)

export default router