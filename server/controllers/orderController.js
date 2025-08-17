const Order = require('../models/Order');
const Product = require('../models/Product');
const User = require('../models/User');
const Promotion = require('../models/Promotion');

// Получить все заказы
exports.getAllOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.status) filter.status = req.query.status;
    if (req.query.paymentStatus) filter.paymentStatus = req.query.paymentStatus;
    if (req.query.user) filter.user = req.query.user;
    if (req.query.dateFrom || req.query.dateTo) {
      filter.createdAt = {};
      if (req.query.dateFrom) filter.createdAt.$gte = new Date(req.query.dateFrom);
      if (req.query.dateTo) filter.createdAt.$lte = new Date(req.query.dateTo);
    }

    const orders = await Order.find(filter)
      .populate('user', 'name email phone')
      .populate('items.product', 'name images price unit')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Order.countDocuments(filter);

    res.json({
      success: true,
      data: {
        orders,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить заказ по ID
exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate('user', 'name email phone')
      .populate('items.product', 'name images price unit category')
      .populate('items.product.category', 'name');

    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Заказ не найден'
      });
    }

    // Проверить права доступа (пользователь может видеть только свои заказы)
    if (req.user.role !== 'admin' && req.user.role !== 'manager' && 
        String(order.user._id) !== String(req.user.id)) {
      return res.status(403).json({
        success: false,
        message: 'Нет доступа к этому заказу'
      });
    }

    res.json({
      success: true,
      data: { order }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Создать новый заказ
exports.createOrder = async (req, res) => {
  try {
    const { items, deliveryAddress, deliveryMethod, paymentMethod, promoCode, pointsToUse } = req.body;

    // Проверить товары и рассчитать стоимость
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const product = await Product.findById(item.product);
      if (!product) {
        return res.status(400).json({
          success: false,
          message: `Товар с ID ${item.product} не найден`
        });
      }

      if (!product.isActive || !product.inStock) {
        return res.status(400).json({
          success: false,
          message: `Товар "${product.name}" недоступен для заказа`
        });
      }

      if (product.stockQuantity < item.quantity) {
        return res.status(400).json({
          success: false,
          message: `Недостаточно товара "${product.name}" на складе`
        });
      }

      const itemPrice = product.finalPrice;
      const itemTotal = itemPrice * item.quantity;
      subtotal += itemTotal;

      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: itemPrice,
        discount: product.isOnSale ? product.discount.percentage : 0
      });
    }

    // Рассчитать стоимость доставки
    let deliveryCost = 0;
    switch (deliveryMethod) {
      case 'express':
        deliveryCost = 299;
        break;
      case 'standard':
        deliveryCost = subtotal >= 1500 ? 0 : 199;
        break;
      case 'scheduled':
        deliveryCost = subtotal >= 1000 ? 0 : 149;
        break;
    }

    // Применить промокод
    let discountAmount = 0;
    let promoInfo = {};
    if (promoCode) {
      const promotion = await Promotion.findOne({ 
        code: promoCode, 
        isActive: true,
        startDate: { $lte: new Date() },
        endDate: { $gte: new Date() }
      });

      if (promotion && subtotal >= promotion.minOrderAmount) {
        switch (promotion.type) {
          case 'percentage':
            discountAmount = subtotal * (promotion.value / 100);
            if (promotion.maxDiscountAmount) {
              discountAmount = Math.min(discountAmount, promotion.maxDiscountAmount);
            }
            break;
          case 'fixed':
            discountAmount = promotion.value;
            break;
          case 'free_delivery':
            deliveryCost = 0;
            break;
        }
        promoInfo = {
          code: promotion.code,
          description: promotion.title
        };
      }
    }

    // Применить баллы лояльности
    const user = await User.findById(req.user.id);
    const maxPointsToUse = Math.min(pointsToUse || 0, user.loyaltyPoints, Math.floor(subtotal * 0.5));
    
    const total = subtotal + deliveryCost - discountAmount - maxPointsToUse;

    // Создать заказ
    const order = new Order({
      user: req.user.id,
      items: orderItems,
      deliveryAddress,
      deliveryMethod,
      paymentMethod,
      subtotal,
      deliveryCost,
      discount: {
        amount: discountAmount,
        ...promoInfo
      },
      pointsUsed: maxPointsToUse,
      total: Math.max(0, total)
    });

    await order.save();

    // Обновить количество товаров на складе
    for (const item of orderItems) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stockQuantity: -item.quantity }
      });
    }

    // Обновить баллы пользователя
    if (maxPointsToUse > 0) {
      await User.findByIdAndUpdate(req.user.id, {
        $inc: { loyaltyPoints: -maxPointsToUse }
      });
    }

    // Обновить использование промокода
    if (promoCode && discountAmount > 0) {
      await Promotion.findOneAndUpdate(
        { code: promoCode },
        { $inc: { usageCount: 1 } }
      );
    }

    await order.populate([
      { path: 'user', select: 'name email phone' },
      { path: 'items.product', select: 'name images price unit' }
    ]);

    res.status(201).json({
      success: true,
      message: 'Заказ успешно создан',
      data: { order }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Обновить статус заказа
exports.updateOrderStatus = async (req, res) => {
  try {
    const { status, adminNotes, trackingNumber } = req.body;

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Заказ не найден'
      });
    }

    const updates = { status };
    if (adminNotes) updates.adminNotes = adminNotes;
    if (trackingNumber) updates.trackingNumber = trackingNumber;

    // Установить дату доставки при статусе "delivered"
    if (status === 'delivered') {
      updates.actualDelivery = new Date();
      updates.paymentStatus = 'paid';

      // Начислить баллы пользователю
      if (order.pointsEarned > 0) {
        await User.findByIdAndUpdate(order.user, {
          $inc: { 
            loyaltyPoints: order.pointsEarned,
            totalSpent: order.total
          }
        });
      }

      // Увеличить счетчик продаж товаров
      for (const item of order.items) {
        await Product.findByIdAndUpdate(item.product, {
          $inc: { salesCount: item.quantity }
        });
      }
    }

    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).populate([
      { path: 'user', select: 'name email phone' },
      { path: 'items.product', select: 'name images price unit' }
    ]);

    res.json({
      success: true,
      message: 'Статус заказа успешно обновлен',
      data: { order: updatedOrder }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Отменить заказ
exports.cancelOrder = async (req, res) => {
  try {
    const { cancelReason } = req.body;

    const order = await Order.findById(req.params.id);
    if (!order) {
      return res.status(404).json({
        success: false,
        message: 'Заказ не найден'
      });
    }

    // Проверить права доступа
    if (req.user.role !== 'admin' && req.user.role !== 'manager' && 
        String(order.user) !== String(req.user.id)) {
      return res.status(403).json({
        success: false,
        message: 'Нет доступа к этому заказу'
      });
    }

    // Проверить возможность отмены
    if (['shipped', 'delivered'].includes(order.status)) {
      return res.status(400).json({
        success: false,
        message: 'Нельзя отменить заказ в статусе "отправлен" или "доставлен"'
      });
    }

    // Вернуть товары на склад
    for (const item of order.items) {
      await Product.findByIdAndUpdate(item.product, {
        $inc: { stockQuantity: item.quantity }
      });
    }

    // Вернуть использованные баллы
    if (order.pointsUsed > 0) {
      await User.findByIdAndUpdate(order.user, {
        $inc: { loyaltyPoints: order.pointsUsed }
      });
    }

    order.status = 'cancelled';
    order.cancelReason = cancelReason;
    await order.save();

    res.json({
      success: true,
      message: 'Заказ успешно отменен',
      data: { order }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить заказы пользователя
exports.getUserOrders = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = { user: req.user.id };
    if (req.query.status) filter.status = req.query.status;

    const orders = await Order.find(filter)
      .populate('items.product', 'name images price unit')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Order.countDocuments(filter);

    res.json({
      success: true,
      data: {
        orders,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit)
        }
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить статистику заказов
exports.getOrderStats = async (req, res) => {
  try {
    const stats = await Order.aggregate([
      {
        $group: {
          _id: null,
          totalOrders: { $sum: 1 },
          totalRevenue: { $sum: '$total' },
          averageOrderValue: { $avg: '$total' },
          totalItemsSold: { $sum: '$itemsCount' }
        }
      }
    ]);

    const statusStats = await Order.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 },
          revenue: { $sum: '$total' }
        }
      }
    ]);

    const monthlyStats = await Order.aggregate([
      {
        $group: {
          _id: {
            year: { $year: '$createdAt' },
            month: { $month: '$createdAt' }
          },
          orders: { $sum: 1 },
          revenue: { $sum: '$total' }
        }
      },
      { $sort: { '_id.year': -1, '_id.month': -1 } },
      { $limit: 12 }
    ]);

    res.json({
      success: true,
      data: {
        general: stats[0] || {},
        byStatus: statusStats,
        monthly: monthlyStats
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};