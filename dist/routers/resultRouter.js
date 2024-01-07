import express from 'express';
import { getUserResult, setResult } from '../controllers/resultController.js';
import { isAuthenticated } from '../middleware/auth.js';
const router = express.Router();
router.post('/save', isAuthenticated, setResult);
router.get('/', isAuthenticated, getUserResult);
export default router;
