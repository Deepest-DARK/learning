import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    // username:string 
    username: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        // required: true
        required: [true, 'Password is required'], // custom error message
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema); // it store as users in the database