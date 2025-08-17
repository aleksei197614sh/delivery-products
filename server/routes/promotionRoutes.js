const express = require('express');
const router = express.Router();
const promotionController = require('../controllers/promotionController');
const { authenticate, requireManager, optionalAuth } = require('../middleware/auth');

// Публичные маршруты
router.get('/featured', promotionController.getFeaturedPromotions);
router.get('/', optionalAuth, promotionController.getAllPromotions);
router.get('/:id', promotionController.getPromotionById);

// Защищенные маршруты
router.use(authenticate);

router.post('/validate', promotionController.validatePromoCode);

// Маршруты для менеджеров и администраторов
router.use(requireManager);

router.post('/', promotionController.createPromotion);
router.put('/:id', promotionController.updatePromotion);
router.delete('/:id', promotionController.deletePromotion);

module.exports = router;