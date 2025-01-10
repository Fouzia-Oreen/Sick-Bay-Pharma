import User from "./usersModel.js";
import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs"



/* get the user  profile
   #desc    get the user & should have a valid token
   #route   GET /api/users/profile
   #access   Public
*/
export const getTheUser = asyncHandler(async (req, res) => { })

/* update the user profile
   #desc    update the user profile
   #route   PUT /api/users/profile
   #access   Private
*/
export const updateUserProfile = asyncHandler(async (req, res)  => { })


