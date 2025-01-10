// Import required modules
import 'dotenv/config';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {errorHandler, notFound} from './src/middleware/errorHandler.js';
import connectDb from './src/utils/connectDb.js';
import userRoutes from './src/auth/users/userRoutes.js';
import asyncHandler from "express-async-handler";
const PORT = process.env.PORT || 6008;
// Initialize the Express application
const app = express();


// Middleware
app.use(express.json());
app.use((express.urlencoded({extended: true, limit:"50mb"})));
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}))
app.use(cookieParser());

/* ROUTES */
app.get('/api', asyncHandler(async(req, res) => {
    res.status(201).json({message:"Auth User"})
}));
app.use("/api/users", userRoutes)

/* ERROR HANDLER */
 app.use(errorHandler);
 app.use(notFound);


/* DATABASE CONNECTION */
connectDb()
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
