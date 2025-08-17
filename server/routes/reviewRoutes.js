const express = require('express');
const router = express.Router();
const reviewController = require('../controllers/reviewController');
const { authenticate, requireManager, optionalAuth } = require('../middleware/auth');
const { validateReview } = require('../middleware/validation');

// Публичные маршруты
router.get('/', optionalAuth, reviewController.getAllReviews);
router.get('/product/:productId', reviewController.getProductReviews);
router.get('/:id', reviewController.getReviewById);

// Защищенные маршруты
router.use(authenticate);

router.post('/', validateReview, reviewController.createReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);
router.post('/:id/helpful', reviewController.markReviewHelpful);

module.exports = router;