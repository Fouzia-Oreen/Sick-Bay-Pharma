import mongoose from "mongoose";
const connectDb = () => {
    const uri = process.env.MONGODB_URI;
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
    })
       .then(() => console.log('MongoDB connected...'))
       .catch((err) => console.error('MongoDB connection error:', err));
}

export default connectDb;