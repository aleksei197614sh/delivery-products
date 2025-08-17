const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Имя обязательно для заполнения'],
    trim: true,
    maxlength: [50, 'Имя не может быть длиннее 50 символов']
  },
  email: {
    type: String,
    required: [true, 'Email обязателен для заполнения'],
    unique: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Введите корректный email']
  },
  password: {
    type: String,
    required: [true, 'Пароль обязателен для заполнения'],
    minlength: [6, 'Пароль должен содержать минимум 6 символов'],
    select: false
  },
  phone: {
    type: String,
    required: [true, 'Телефон обязателен для заполнения'],
    match: [/^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/, 'Введите корректный номер телефона']
  },
  birthDate: {
    type: Date
  },
  role: {
    type: String,
    enum: ['customer', 'admin', 'manager'],
    default: 'customer'
  },
  isActive: {
    type: Boolean,
    default: true
  },
  loyaltyPoints: {
    type: Number,
    default: 0,
    min: 0
  },
  loyaltyLevel: {
    type: String,
    enum: ['Бронзовый', 'Серебряный', 'Золотой', 'Платиновый'],
    default: 'Бронзовый'
  },
  totalSpent: {
    type: Number,
    default: 0,
    min: 0
  },
  preferences: {
    notifications: {
      email: { type: Boolean, default: true },
      sms: { type: Boolean, default: true },
      promotions: { type: Boolean, default: false }
    },
    deliveryInstructions: String
  },
  lastLogin: Date,
  registrationDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});

// Виртуальные поля
userSchema.virtual('orders', {
  ref: 'Order',
  localField: '_id',
  foreignField: 'user'
});

userSchema.virtual('addresses', {
  ref: 'Address',
  localField: '_id',
  foreignField: 'user'
});

userSchema.virtual('reviews', {
  ref: 'Review',
  localField: '_id',
  foreignField: 'user'
});

// Хеширование пароля перед сохранением
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// Обновление уровня лояльности на основе потраченной суммы
userSchema.pre('save', function(next) {
  if (this.totalSpent >= 50000) {
    this.loyaltyLevel = 'Платиновый';
  } else if (this.totalSpent >= 15000) {
    this.loyaltyLevel = 'Золотой';
  } else if (this.totalSpent >= 5000) {
    this.loyaltyLevel = 'Серебряный';
  } else {
    this.loyaltyLevel = 'Бронзовый';
  }
  next();
});

// Метод для проверки пароля
userSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Метод для получения публичных данных пользователя
userSchema.methods.toPublicJSON = function() {
  const user = this.toObject();
  delete user.password;
  return user;
};

module.exports = mongoose.model('User', userSchema);