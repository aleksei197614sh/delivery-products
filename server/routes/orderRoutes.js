const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const { authenticate, requireManager } = require('../middleware/auth');
const { validateOrder } = require('../middleware/validation');

// Все маршруты требуют аутентификации
router.use(authenticate);

// Маршруты для пользователей
router.get('/my', orderController.getUserOrders);
router.post('/', validateOrder, orderController.createOrder);
router.get('/:id', orderController.getOrderById);
router.put('/:id/cancel', orderController.cancelOrder);

// Маршруты для менеджеров и администраторов
router.get('/', requireManager, orderController.getAllOrders);
router.get('/stats/overview', requireManager, orderController.getOrderStats);
router.put('/:id/status', requireManager, orderController.updateOrderStatus);

module.exports = router;