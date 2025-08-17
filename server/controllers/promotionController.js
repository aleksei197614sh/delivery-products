const Promotion = require('../models/Promotion');

// Получить все акции
exports.getAllPromotions = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.isActive !== undefined) filter.isActive = req.query.isActive === 'true';
    if (req.query.type) filter.type = req.query.type;
    if (req.query.isFeatured !== undefined) filter.isFeatured = req.query.isFeatured === 'true';

    // Фильтр по действующим акциям
    if (req.query.valid === 'true') {
      const now = new Date();
      filter.startDate = { $lte: now };
      filter.endDate = { $gte: now };
      filter.isActive = true;
    }

    const promotions = await Promotion.find(filter)
      .populate('createdBy', 'name')
      .populate('applicableCategories', 'name')
      .populate('applicableProducts', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Promotion.countDocuments(filter);

    res.json({
      success: true,
      data: {
        promotions,
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

// Получить акцию по ID или коду
exports.getPromotionById = async (req, res) => {
  try {
    const identifier = req.params.id;
    const query = mongoose.Types.ObjectId.isValid(identifier) 
      ? { _id: identifier } 
      : { code: identifier.toUpperCase() };

    const promotion = await Promotion.findOne(query)
      .populate('createdBy', 'name')
      .populate('applicableCategories', 'name slug')
      .populate('applicableProducts', 'name slug images price')
      .populate('excludedCategories', 'name slug')
      .populate('excludedProducts', 'name slug');

    if (!promotion) {
      return res.status(404).json({
        success: false,
        message: 'Акция не найдена'
      });
    }

    res.json({
      success: true,
      data: { promotion }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Создать новую акцию
exports.createPromotion = async (req, res) => {
  try {
    const promotion = new Promotion({
      ...req.body,
      createdBy: req.user.id
    });

    await promotion.save();

    await promotion.populate([
      { path: 'createdBy', select: 'name' },
      { path: 'applicableCategories', select: 'name' },
      { path: 'applicableProducts', select: 'name' }
    ]);

    res.status(201).json({
      success: true,
      message: 'Акция успешно создана',
      data: { promotion }
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: 'Промокод уже существует'
      });
    }
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Обновить акцию
exports.updatePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate([
      { path: 'createdBy', select: 'name' },
      { path: 'applicableCategories', select: 'name' },
      { path: 'applicableProducts', select: 'name' }
    ]);

    if (!promotion) {
      return res.status(404).json({
        success: false,
        message: 'Акция не найдена'
      });
    }

    res.json({
      success: true,
      message: 'Акция успешно обновлена',
      data: { promotion }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Удалить акцию
exports.deletePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findByIdAndDelete(req.params.id);

    if (!promotion) {
      return res.status(404).json({
        success: false,
        message: 'Акция не найдена'
      });
    }

    res.json({
      success: true,
      message: 'Акция успешно удалена'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Проверить промокод
exports.validatePromoCode = async (req, res) => {
  try {
    const { code, orderAmount, userId } = req.body;

    const promotion = await Promotion.findOne({
      code: code.toUpperCase(),
      isActive: true,
      startDate: { $lte: new Date() },
      endDate: { $gte: new Date() }
    });

    if (!promotion) {
      return res.status(404).json({
        success: false,
        message: 'Промокод не найден или не действителен'
      });
    }

    // Проверить минимальную сумму заказа
    if (orderAmount < promotion.minOrderAmount) {
      return res.status(400).json({
        success: false,
        message: `Минимальная сумма заказа для этого промокода: ${promotion.minOrderAmount} ₽`
      });
    }

    // Проверить лимит использования
    if (promotion.usageLimit.total && promotion.usageCount >= promotion.usageLimit.total) {
      return res.status(400).json({
        success: false,
        message: 'Промокод больше не действителен (превышен лимит использования)'
      });
    }

    // Проверить лимит на пользователя
    const Order = require('../models/Order');
    const userUsageCount = await Order.countDocuments({
      user: userId,
      'discount.code': code.toUpperCase()
    });

    if (userUsageCount >= promotion.usageLimit.perUser) {
      return res.status(400).json({
        success: false,
        message: 'Вы уже использовали этот промокод максимальное количество раз'
      });
    }

    // Рассчитать скидку
    let discountAmount = 0;
    switch (promotion.type) {
      case 'percentage':
        discountAmount = orderAmount * (promotion.value / 100);
        if (promotion.maxDiscountAmount) {
          discountAmount = Math.min(discountAmount, promotion.maxDiscountAmount);
        }
        break;
      case 'fixed':
        discountAmount = Math.min(promotion.value, orderAmount);
        break;
      case 'free_delivery':
        discountAmount = 0; // Обрабатывается отдельно
        break;
    }

    res.json({
      success: true,
      message: 'Промокод действителен',
      data: {
        promotion: {
          code: promotion.code,
          title: promotion.title,
          type: promotion.type,
          value: promotion.value,
          discountAmount: Math.round(discountAmount)
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

// Получить активные акции для главной страницы
exports.getFeaturedPromotions = async (req, res) => {
  try {
    const now = new Date();
    const promotions = await Promotion.find({
      isActive: true,
      isFeatured: true,
      startDate: { $lte: now },
      endDate: { $gte: now }
    })
    .sort({ createdAt: -1 })
    .limit(6);

    res.json({
      success: true,
      data: { promotions }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};