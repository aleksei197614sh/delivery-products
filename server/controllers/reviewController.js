const Review = require('../models/Review');
const Product = require('../models/Product');
const Order = require('../models/Order');

// Получить все отзывы
exports.getAllReviews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = {};
    if (req.query.product) filter.product = req.query.product;
    if (req.query.user) filter.user = req.query.user;
    if (req.query.rating) filter.rating = parseInt(req.query.rating);
    if (req.query.isApproved !== undefined) filter.isApproved = req.query.isApproved === 'true';
    if (req.query.isVerified !== undefined) filter.isVerified = req.query.isVerified === 'true';

    let sort = {};
    switch (req.query.sortBy) {
      case 'rating-desc':
        sort = { rating: -1 };
        break;
      case 'rating-asc':
        sort = { rating: 1 };
        break;
      case 'helpful':
        sort = { helpfulVotes: -1 };
        break;
      case 'oldest':
        sort = { createdAt: 1 };
        break;
      default:
        sort = { createdAt: -1 };
    }

    const reviews = await Review.find(filter)
      .populate('user', 'name')
      .populate('product', 'name images')
      .sort(sort)
      .skip(skip)
      .limit(limit);

    const total = await Review.countDocuments(filter);

    res.json({
      success: true,
      data: {
        reviews,
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

// Получить отзыв по ID
exports.getReviewById = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id)
      .populate('user', 'name')
      .populate('product', 'name images')
      .populate('order', 'orderNumber');

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Отзыв не найден'
      });
    }

    res.json({
      success: true,
      data: { review }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Создать новый отзыв
exports.createReview = async (req, res) => {
  try {
    const { product, rating, title, content, order } = req.body;

    // Проверить существование товара
    const productExists = await Product.findById(product);
    if (!productExists) {
      return res.status(400).json({
        success: false,
        message: 'Товар не найден'
      });
    }

    // Проверить, не оставлял ли пользователь уже отзыв на этот товар
    const existingReview = await Review.findOne({
      user: req.user.id,
      product
    });

    if (existingReview) {
      return res.status(400).json({
        success: false,
        message: 'Вы уже оставили отзыв на этот товар'
      });
    }

    // Проверить, покупал ли пользователь этот товар
    let isVerified = false;
    if (order) {
      const orderExists = await Order.findOne({
        _id: order,
        user: req.user.id,
        'items.product': product,
        status: 'delivered'
      });
      isVerified = !!orderExists;
    }

    const review = new Review({
      user: req.user.id,
      product,
      rating,
      title,
      content,
      order: order || undefined,
      isVerified,
      isApproved: true // Автоматическое одобрение (можно изменить на false для модерации)
    });

    await review.save();

    await review.populate([
      { path: 'user', select: 'name' },
      { path: 'product', select: 'name images' }
    ]);

    res.status(201).json({
      success: true,
      message: 'Отзыв успешно создан',
      data: { review }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Обновить отзыв
exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Отзыв не найден'
      });
    }

    // Проверить права доступа
    if (req.user.role !== 'admin' && String(review.user) !== String(req.user.id)) {
      return res.status(403).json({
        success: false,
        message: 'Нет доступа к этому отзыву'
      });
    }

    const allowedFields = req.user.role === 'admin' 
      ? ['rating', 'title', 'content', 'isApproved', 'adminResponse']
      : ['rating', 'title', 'content'];

    const updates = {};
    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    // Если админ отвечает на отзыв
    if (req.body.adminResponse && req.user.role === 'admin') {
      updates.adminResponse = {
        content: req.body.adminResponse,
        respondedBy: req.user.id,
        respondedAt: new Date()
      };
    }

    const updatedReview = await Review.findByIdAndUpdate(
      req.params.id,
      updates,
      { new: true, runValidators: true }
    ).populate([
      { path: 'user', select: 'name' },
      { path: 'product', select: 'name images' }
    ]);

    res.json({
      success: true,
      message: 'Отзыв успешно обновлен',
      data: { review: updatedReview }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Удалить отзыв
exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Отзыв не найден'
      });
    }

    // Проверить права доступа
    if (req.user.role !== 'admin' && String(review.user) !== String(req.user.id)) {
      return res.status(403).json({
        success: false,
        message: 'Нет доступа к этому отзыву'
      });
    }

    await Review.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: 'Отзыв успешно удален'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Отметить отзыв как полезный
exports.markReviewHelpful = async (req, res) => {
  try {
    const { helpful } = req.body; // true или false

    const review = await Review.findByIdAndUpdate(
      req.params.id,
      {
        $inc: {
          helpfulVotes: helpful ? 1 : -1,
          totalVotes: 1
        }
      },
      { new: true }
    );

    if (!review) {
      return res.status(404).json({
        success: false,
        message: 'Отзыв не найден'
      });
    }

    res.json({
      success: true,
      message: 'Оценка отзыва учтена',
      data: { review }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получить отзывы товара
exports.getProductReviews = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    const filter = { 
      product: req.params.productId,
      isApproved: true
    };

    if (req.query.rating) {
      filter.rating = parseInt(req.query.rating);
    }

    const reviews = await Review.find(filter)
      .populate('user', 'name')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit);

    const total = await Review.countDocuments(filter);

    // Статистика по рейтингам
    const ratingStats = await Review.aggregate([
      { $match: { product: mongoose.Types.ObjectId(req.params.productId), isApproved: true } },
      {
        $group: {
          _id: '$rating',
          count: { $sum: 1 }
        }
      },
      { $sort: { _id: -1 } }
    ]);

    res.json({
      success: true,
      data: {
        reviews,
        ratingStats,
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