import mongoose from "mongoose";

// User Schema and Model
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please provide a valid username"],
        trim: true
    },
    email: {
        type: String,
        required: [true, "Please provide a valid email"],
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: [true, "Please provide a valid password"],
    },
    role: 
    {    type: String, 
        default: "user"
    },
    firstName: {    
        type: String
    },   
    lastName: {    
        type: String
    },    
    address: {    
        type: String, 
    },
    mobile: {    
        type: Number, 
    },
    profile: {    
        type: String, 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {timeStamps: true});

const User =  mongoose.model.Users || mongoose.model('User', userSchema);
export default User;