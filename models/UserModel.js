import e from "express";
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName: String,
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    phoneNumber: Number,
    userType: String,
    password: {
        type: String,
        required: true
    }
})

const UserModel = mongoose.model('User', UserSchema);

export default UserModel