// Import required modules
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import errorHandler from './src/middleware/errorHandler.js';
import connectDb from './src/utils/connectDb.js';

// Initialize the Express application
const app = express();
connectDb()

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cookieParser());

/* ROUTES */
app.get('/', (req, res) => {
    res.send('Welcome to the Express.js server!');
});
app.get('/api', (req, res) => {
    res.json({ message: 'This is an example API endpoint!' });
});
app.use((req, res, next) => {
    res.status(404).json({ error: 'Not Found' });
});


/* ERROR HANDLER */
// Error handling middleware
app.use(errorHandler);

/* DATABASE CONNECTION */
const PORT = process.env.PORT || 6008;
connectDb()
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
