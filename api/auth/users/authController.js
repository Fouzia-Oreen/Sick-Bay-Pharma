import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import User from "./usersModel.js";

/* register the user 
   #desc    Authenticate the user and set the token
   #route   POST /api/users/register
   #access   Public
*/
export const userRegister = async (req, res, next) => {     
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    try {
      await newUser.save();
      res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      next(error);
    }
}
/* logout the user 
   #desc    Logout user
   #route   POST /api/users/logout
   #access   Public
*/
export const userLogout = asyncHandler(async (req, res) => { 

})

/* login the user
   #desc    Authenticate the user and set the token
   #route   POST /api/users/login
   #access   Public
*/
export const userLogin = asyncHandler(async (req, res) => { })





/* register the user-mail */
export const registerMail = asyncHandler(async (req, res) => { })
export const userAuthenticate = asyncHandler(async (req, res) => { })

export const generateOTP = asyncHandler(async (req, res) => { })
export const verifyOTP = asyncHandler(async (req, res) => { })
export const createSessions = asyncHandler(async (req, res) => { })
export const resetPassword = asyncHandler(async (req, res) => { })

