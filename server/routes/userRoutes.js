const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate, requireAdmin, requireManager } = require('../middleware/auth');

// Все маршруты требуют аутентификации
router.use(authenticate);

// Маршруты для менеджеров и администраторов
router.get('/', requireManager, userController.getAllUsers);
router.get('/stats', requireManager, userController.getUserStats);
router.get('/:id', requireManager, userController.getUserById);

// Маршруты только для администраторов
router.put('/:id', requireAdmin, userController.updateUser);
router.delete('/:id', requireAdmin, userController.deleteUser);

module.exports = router;