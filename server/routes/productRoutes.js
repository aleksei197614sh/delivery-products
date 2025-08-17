const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const { authenticate, requireManager, optionalAuth } = require('../middleware/auth');
const { validateProduct } = require('../middleware/validation');

// Публичные маршруты
router.get('/', optionalAuth, productController.getAllProducts);
router.get('/search', optionalAuth, productController.searchProducts);
router.get('/recommended', productController.getRecommendedProducts);
router.get('/stats', requireManager, productController.getProductStats);
router.get('/:id', optionalAuth, productController.getProductById);

// Защищенные маршруты (требуют права менеджера или администратора)
router.use(authenticate);
router.use(requireManager);

router.post('/', validateProduct, productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);

module.exports = router;