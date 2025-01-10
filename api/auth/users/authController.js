import User from "./usersModel.js";
import asyncHandler from "express-async-handler";

/* register the user 
   #desc    Authenticate the user and set the token
   #route   POST /api/users/register
   #access   Public
*/
export const userRegister = asyncHandler(async (req, res) => {   

    try {
        const { username, email, password , profile} = req.body;
        if (!username ||!email ||!password ||!profile) {
             const error = new Error('All fields must be filled out');
             error.statusCode = 400;
             throw error;
        }
       const formateName = username.toLowercase()
       const formateEmail = email.toLowercase()
       const existingUser = await User.findOne({ email: formateEmail });
       if (existingUser) {
            const error = new Error('User already exists');
            error.statusCode = 409;
            throw error;
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new User({
            username: formateName,
            email: formateEmail,
            password: hashedPassword,
            profile: profile,
        });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully', status:true });

    } catch {
        res.status(500).json({ message: 'Failed to register user', status:false });
    }
})
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

