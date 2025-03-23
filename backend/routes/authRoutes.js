const express = require('express');
const { register, login, getUserProfile } = require('../controllers/authController');
const {authMiddleware} = require('../middleware/authMiddleware'); // ✅ Import middleware

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.get('/profile', authMiddleware, getUserProfile); // Protect route


module.exports = router;
