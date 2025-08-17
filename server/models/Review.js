const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  },
  rating: {
    type: Number,
    required: [true, 'Оценка обязательна'],
    min: [1, 'Минимальная оценка 1'],
    max: [5, 'Максимальная оценка 5']
  },
  title: {
    type: String,
    required: [true, 'Заголовок отзыва обязателен'],
    trim: true,
    maxlength: [200, 'Заголовок не может быть длиннее 200 символов']
  },
  content: {
    type: String,
    required: [true, 'Текст отзыва обязателен'],
    maxlength: [2000, 'Отзыв не может быть длиннее 2000 символов']
  },
  images: [{
    url: String,
    alt: String
  }],
  isVerified: {
    type: Boolean,
    default: false
  },
  isApproved: {
    type: Boolean,
    default: false
  },
  helpfulVotes: {
    type: Number,
    default: 0
  },
  totalVotes: {
    type: Number,
    default: 0
  },
  adminResponse: {
    content: String,
    respondedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    respondedAt: Date
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Виртуальные поля
reviewSchema.virtual('helpfulPercentage').get(function() {
  return this.totalVotes > 0 ? Math.round((this.helpfulVotes / this.totalVotes) * 100) : 0;
});

// Индексы
reviewSchema.index({ product: 1, user: 1 }, { unique: true });
reviewSchema.index({ product: 1, isApproved: 1 });
reviewSchema.index({ rating: -1 });
reviewSchema.index({ createdAt: -1 });

// Обновление рейтинга товара при сохранении отзыва
reviewSchema.post('save', async function() {
  if (this.isApproved) {
    await this.constructor.updateProductRating(this.product);
  }
});

// Обновление рейтинга товара при удалении отзыва
reviewSchema.post('remove', async function() {
  await this.constructor.updateProductRating(this.product);
});

// Статический метод для обновления рейтинга товара
reviewSchema.statics.updateProductRating = async function(productId) {
  const stats = await this.aggregate([
    { $match: { product: productId, isApproved: true } },
    {
      $group: {
        _id: '$product',
        averageRating: { $avg: '$rating' },
        reviewCount: { $sum: 1 }
      }
    }
  ]);

  if (stats.length > 0) {
    await mongoose.model('Product').findByIdAndUpdate(productId, {
      'rating.average': Math.round(stats[0].averageRating * 10) / 10,
      'rating.count': stats[0].reviewCount
    });
  } else {
    await mongoose.model('Product').findByIdAndUpdate(productId, {
      'rating.average': 0,
      'rating.count': 0
    });
  }
};

module.exports = mongoose.model('Review', reviewSchema);