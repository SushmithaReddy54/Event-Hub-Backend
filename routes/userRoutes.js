import express from 'express'
import { loginCntroller, signUpCntroller } from '../controllers/UserCntrollers.js';

const router = express.Router();

router.post('/signup', signUpCntroller)

router.post('/login', loginCntroller)

export default router;