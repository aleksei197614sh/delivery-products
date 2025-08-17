const mongoose = require('mongoose');

const promotionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Название акции обязательно'],
    trim: true,
    maxlength: [200, 'Название не может быть длиннее 200 символов']
  },
  description: {
    type: String,
    required: [true, 'Описание акции обязательно'],
    maxlength: [1000, 'Описание не может быть длиннее 1000 символов']
  },
  code: {
    type: String,
    required: [true, 'Промокод обязателен'],
    unique: true,
    uppercase: true,
    trim: true,
    match: [/^[A-Z0-9]{3,20}$/, 'Промокод должен содержать только буквы и цифры']
  },
  type: {
    type: String,
    enum: ['percentage', 'fixed', 'free_delivery', 'buy_x_get_y'],
    required: true
  },
  value: {
    type: Number,
    required: [true, 'Значение скидки обязательно'],
    min: [0, 'Значение не может быть отрицательным']
  },
  minOrderAmount: {
    type: Number,
    default: 0,
    min: [0, 'Минимальная сумма заказа не может быть отрицательной']
  },
  maxDiscountAmount: {
    type: Number,
    min: [0, 'Максимальная сумма скидки не может быть отрицательной']
  },
  startDate: {
    type: Date,
    required: [true, 'Дата начала обязательна']
  },
  endDate: {
    type: Date,
    required: [true, 'Дата окончания обязательна']
  },
  usageLimit: {
    total: { type: Number, default: null },
    perUser: { type: Number, default: 1 }
  },
  usageCount: {
    type: Number,
    default: 0
  },
  applicableCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  applicableProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  excludedCategories: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category'
  }],
  excludedProducts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  userRestrictions: {
    newUsersOnly: { type: Boolean, default: false },
    loyaltyLevels: [String],
    excludedUsers: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  isActive: {
    type: Boolean,
    default: true
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  image: String,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Виртуальные поля
promotionSchema.virtual('isValid').get(function() {
  const now = new Date();
  return this.isActive && 
         now >= this.startDate && 
         now <= this.endDate &&
         (this.usageLimit.total === null || this.usageCount < this.usageLimit.total);
});

promotionSchema.virtual('daysLeft').get(function() {
  const now = new Date();
  const diffTime = this.endDate - now;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
});

// Индексы
promotionSchema.index({ code: 1 });
promotionSchema.index({ startDate: 1, endDate: 1 });
promotionSchema.index({ isActive: 1 });
promotionSchema.index({ type: 1 });

// Валидация дат
promotionSchema.pre('save', function(next) {
  if (this.endDate <= this.startDate) {
    next(new Error('Дата окончания должна быть позже даты начала'));
  }
  next();
});

module.exports = mongoose.model('Promotion', promotionSchema);