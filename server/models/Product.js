const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Название товара обязательно'],
    trim: true,
    maxlength: [200, 'Название не может быть длиннее 200 символов']
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  description: {
    type: String,
    required: [true, 'Описание товара обязательно'],
    maxlength: [2000, 'Описание не может быть длиннее 2000 символов']
  },
  shortDescription: {
    type: String,
    maxlength: [300, 'Краткое описание не может быть длиннее 300 символов']
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: [true, 'Категория обязательна']
  },
  price: {
    type: Number,
    required: [true, 'Цена обязательна'],
    min: [0, 'Цена не может быть отрицательной']
  },
  oldPrice: {
    type: Number,
    min: [0, 'Старая цена не может быть отрицательной']
  },
  unit: {
    type: String,
    required: [true, 'Единица измерения обязательна'],
    enum: ['кг', 'г', 'л', 'мл', 'шт', 'упак']
  },
  weight: {
    type: Number,
    min: [0, 'Вес не может быть отрицательным']
  },
  images: [{
    url: String,
    alt: String,
    isPrimary: { type: Boolean, default: false }
  }],
  inStock: {
    type: Boolean,
    default: true
  },
  stockQuantity: {
    type: Number,
    default: 0,
    min: [0, 'Количество на складе не может быть отрицательным']
  },
  minStockLevel: {
    type: Number,
    default: 10,
    min: [0, 'Минимальный уровень запаса не может быть отрицательным']
  },
  isOrganic: {
    type: Boolean,
    default: false
  },
  isFeatured: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  brand: {
    type: String,
    trim: true
  },
  manufacturer: {
    type: String,
    trim: true
  },
  countryOfOrigin: {
    type: String,
    trim: true
  },
  expirationDate: Date,
  nutritionInfo: {
    calories: Number,
    proteins: Number,
    fats: Number,
    carbohydrates: Number,
    fiber: Number
  },
  tags: [String],
  barcode: {
    type: String,
    unique: true,
    sparse: true
  },
  discount: {
    percentage: { type: Number, min: 0, max: 100, default: 0 },
    startDate: Date,
    endDate: Date
  },
  rating: {
    average: { type: Number, default: 0, min: 0, max: 5 },
    count: { type: Number, default: 0 }
  },
  viewsCount: {
    type: Number,
    default: 0
  },
  salesCount: {
    type: Number,
    default: 0
  },
  seoTitle: String,
  seoDescription: String,
  seoKeywords: [String]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Виртуальные поля
productSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'product'
});

productSchema.virtual('finalPrice').get(function() {
  if (this.discount.percentage > 0) {
    const now = new Date();
    if ((!this.discount.startDate || now >= this.discount.startDate) &&
        (!this.discount.endDate || now <= this.discount.endDate)) {
      return this.price * (1 - this.discount.percentage / 100);
    }
  }
  return this.price;
});

productSchema.virtual('isOnSale').get(function() {
  if (this.discount.percentage > 0) {
    const now = new Date();
    return (!this.discount.startDate || now >= this.discount.startDate) &&
           (!this.discount.endDate || now <= this.discount.endDate);
  }
  return false;
});

// Индексы для поиска
productSchema.index({ name: 'text', description: 'text', tags: 'text' });
productSchema.index({ category: 1, isActive: 1 });
productSchema.index({ price: 1 });
productSchema.index({ 'rating.average': -1 });
productSchema.index({ salesCount: -1 });
productSchema.index({ createdAt: -1 });

// Создание slug из названия
productSchema.pre('save', function(next) {
  if (this.isModified('name')) {
    this.slug = this.name
      .toLowerCase()
      .replace(/[а-я]/g, (char) => {
        const map = {
          'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'yo',
          'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
          'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
          'ф': 'f', 'х': 'h', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'sch',
          'ъ': '', 'ы': 'y', 'ь': '', 'э': 'e', 'ю': 'yu', 'я': 'ya'
        };
        return map[char] || char;
      })
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');
  }
  next();
});

module.exports = mongoose.model('Product', productSchema);