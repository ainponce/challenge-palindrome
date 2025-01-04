import { Router } from 'express';
import palindromeController from '../controllers/palindromeController.js';

const { checkPalindrome } = palindromeController;
const router = Router();

router.post('/palindrome', checkPalindrome);

export default router;