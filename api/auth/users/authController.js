import bcrypt from "bcryptjs";
import asyncHandler from "express-async-handler";
import { errorHandler } from "../../middleware/errorHandler.js";
import User from "./usersModel.js";
import jwt from 'jsonwebtoken'

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
export const userLogout = async (req, res) => { 

}

/* login the user
   #desc    Authenticate the user and set the token
   #route   POST /api/users/login
   #access   Public
*/
export const userLogin = async (req, res, next) => { 
   const { email, password } = req.body;
   try {
     const validUser = await User.findOne({ email });
     if (!validUser) return next(errorHandler(404, 'User not found'));
     const validPassword = bcrypt.compareSync(password, validUser.password);
     if (!validPassword) return next(errorHandler(401, 'wrong credentials'));
     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
     const { password: hashedPassword, ...rest } = validUser._doc;
     const expiryDate = new Date(Date.now() + 3600000); // 1 hour
     res
       .cookie('access_token', token, { httpOnly: true, expires: expiryDate })
       .status(200)
       .json(rest);
   } catch (error) {
     next(error);
   }
}





/* register the user-mail */
export const registerMail = asyncHandler(async (req, res) => { })
export const userAuthenticate = asyncHandler(async (req, res) => { })

export const generateOTP = asyncHandler(async (req, res) => { })
export const verifyOTP = asyncHandler(async (req, res) => { })
export const createSessions = asyncHandler(async (req, res) => { })
export const resetPassword = asyncHandler(async (req, res) => { })

