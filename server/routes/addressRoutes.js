const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');
const { authenticate } = require('../middleware/auth');

// Все маршруты требуют аутентификации
router.use(authenticate);

router.get('/', addressController.getUserAddresses);
router.get('/:id', addressController.getAddressById);
router.post('/', addressController.createAddress);
router.put('/:id', addressController.updateAddress);
router.delete('/:id', addressController.deleteAddress);
router.put('/:id/default', addressController.setDefaultAddress);

module.exports = router;