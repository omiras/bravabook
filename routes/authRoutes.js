import express from 'express';
const router = express.Router();

import { getLoginForm } from '../controllers/authControllers.js';

router.get('/login', getLoginForm);

export default router;