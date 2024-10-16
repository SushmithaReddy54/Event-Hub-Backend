import dotenv from 'dotenv';
dotenv.config();

export const constants = {
    MONGO_URL: process.env.MONGO_URL,
    JWT_SECRET: process.env.JWT_SECRET
};