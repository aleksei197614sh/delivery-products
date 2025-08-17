const mongoose = require('mongoose');

const orderItemSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: [1, 'Количество должно быть больше 0']
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Цена не может быть отрицательной']
  },
  discount: {
    type: Number,
    default: 0,
    min: [0, 'Скидка не может быть отрицательной'],
    max: [100, 'Скидка не может быть больше 100%']
  }
});

const orderSchema = new mongoose.Schema({
  orderNumber: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  items: [orderItemSchema],
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'processing', 'shipped', 'delivered', 'cancelled', 'returned'],
    default: 'pending'
  },
  paymentStatus: {
    type: String,
    enum: ['pending', 'paid', 'failed', 'refunded'],
    default: 'pending'
  },
  paymentMethod: {
    type: String,
    enum: ['card', 'cash', 'sbp', 'wallet', 'installments', 'points'],
    required: true
  },
  deliveryAddress: {
    street: { type: String, required: true },
    city: { type: String, required: true },
    postalCode: String,
    apartment: String,
    entrance: String,
    floor: String,
    intercom: String,
    instructions: String
  },
  deliveryMethod: {
    type: String,
    enum: ['standard', 'express', 'scheduled'],
    default: 'standard'
  },
  deliveryDate: Date,
  deliveryTimeSlot: {
    start: String,
    end: String
  },
  subtotal: {
    type: Number,
    required: true,
    min: [0, 'Подытог не может быть отрицательным']
  },
  deliveryCost: {
    type: Number,
    default: 0,
    min: [0, 'Стоимость доставки не может быть отрицательной']
  },
  discount: {
    amount: { type: Number, default: 0 },
    code: String,
    description: String
  },
  pointsUsed: {
    type: Number,
    default: 0,
    min: [0, 'Использованные баллы не могут быть отрицательными']
  },
  pointsEarned: {
    type: Number,
    default: 0,
    min: [0, 'Заработанные баллы не могут быть отрицательными']
  },
  total: {
    type: Number,
    required: true,
    min: [0, 'Общая сумма не может быть отрицательной']
  },
  customerNotes: String,
  adminNotes: String,
  trackingNumber: String,
  estimatedDelivery: Date,
  actualDelivery: Date,
  cancelReason: String,
  refundAmount: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Виртуальные поля
orderSchema.virtual('itemsCount').get(function() {
  return this.items.reduce((total, item) => total + item.quantity, 0);
});

// Генерация номера заказа
orderSchema.pre('save', async function(next) {
  if (!this.orderNumber) {
    const count = await mongoose.model('Order').countDocuments();
    this.orderNumber = `FM${Date.now().toString().slice(-6)}${(count + 1).toString().padStart(3, '0')}`;
  }
  next();
});

// Расчет заработанных баллов (1 балл за каждые 100 рублей)
orderSchema.pre('save', function(next) {
  if (this.status === 'delivered' && this.paymentStatus === 'paid') {
    this.pointsEarned = Math.floor(this.total / 100);
  }
  next();
});

module.exports = mongoose.model('Order', orderSchema);