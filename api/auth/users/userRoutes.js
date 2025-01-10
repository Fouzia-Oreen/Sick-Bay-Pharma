import express from "express"
import { createSessions, generateOTP,  registerMail, resetPassword, userAuthenticate, userLogin, userLogout, userRegister, verifyOTP } from "./authController.js"
import { getTheUser, updateUserProfile } from "./usersController.js"

const router = express.Router()

// Define endpoints for authentication routes
router.post('/register', userRegister)
router.post('/register-mail', registerMail)
router.post('/authenticate', userAuthenticate)
router.post('/login', userLogin)
router.get('/generateOTP', generateOTP)
router.post('/verifyOTP', verifyOTP)
router.get('/create-sessions', createSessions)
router.put('/reset-password', resetPassword)
router.post('/logout', userLogout)


// Define endpoints for users routes
router.route('/profile').get(getTheUser).put(updateUserProfile)

// Define endpoints for admin routes
// router.route('/admin').get(getAllUsers).put(updateUserProfile)


export default router