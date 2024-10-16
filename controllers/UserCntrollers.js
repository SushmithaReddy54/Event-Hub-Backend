import mongoose from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { constants } from "../constansts.js";
import User from "../models/UserModel.js";

export const signUpCntroller = async(req, res) => {
    try {
        const {firstName, lastName, emailId, phoneNumber, userType, createPassword} = req.body;
        if(!firstName || !emailId || !createPassword){
            return res.status(400).send({message: "Please provide all required fields"});
        }
        const existingUser = await User.findOne({emailId: emailId});
        if(existingUser){
            return res.status(403).send({message: "User already exists, please login"});
        }
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(createPassword, salt);
        const newUser = await User.create({firstName, lastName, emailId, phoneNumber, userType, password});
        const token = jwt.sign({emailId: newUser.emailId, id: newUser._id}, constants.JWT_SECRET, {expiresIn: "1h"});
        res.status(200).send({result: newUser, token});
    } catch (error) {
        console.log(error);
    }
}

export const loginCntroller = async(req, res) => {
    try {
        const {emailId, password} = req.body;
        if(!emailId || !password){
            return res.status(400).send({message: "Please provide emailId and password"});
        }
        const user = await User.findOne({emailId: emailId});
        if(!user){
            return res.status(402).send({message: "User not found, please signup"});
        }
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if(!isPasswordCorrect){
            return res.status(401).send({message: "Invalid password"});
        }
        const token = jwt.sign({emailId: user.emailId, id: user._id}, constants.JWT_SECRET, {expiresIn: "1h"});
        const nUser = {...user.toObject(), session:{sessionId:token}}
        res.status(200).send({user: nUser});
    } catch (error) {
        console.log(error);
    }
}