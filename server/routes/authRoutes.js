const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenticate } = require('../middleware/auth');
const { validateRegistration, validateLogin } = require('../middleware/validation');

// Публичные маршруты
router.post('/register', validateRegistration, authController.register);
router.post('/login', validateLogin, authController.login);

// Защищенные маршруты
router.use(authenticate);
router.get('/me', authController.getMe);
router.put('/profile', authController.updateProfile);
router.put('/change-password', authController.changePassword);
router.post('/logout', authController.logout);

module.exports = router;