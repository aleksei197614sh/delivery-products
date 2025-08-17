const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: [true, 'Название адреса обязательно'],
    trim: true,
    maxlength: [50, 'Название не может быть длиннее 50 символов']
  },
  recipientName: {
    type: String,
    required: [true, 'Имя получателя обязательно'],
    trim: true
  },
  recipientPhone: {
    type: String,
    required: [true, 'Телефон получателя обязателен'],
    match: [/^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/, 'Введите корректный номер телефона']
  },
  city: {
    type: String,
    required: [true, 'Город обязателен'],
    trim: true
  },
  street: {
    type: String,
    required: [true, 'Улица обязательна'],
    trim: true
  },
  house: {
    type: String,
    required: [true, 'Номер дома обязателен'],
    trim: true
  },
  apartment: {
    type: String,
    trim: true
  },
  entrance: {
    type: String,
    trim: true
  },
  floor: {
    type: String,
    trim: true
  },
  intercom: {
    type: String,
    trim: true
  },
  postalCode: {
    type: String,
    match: [/^\d{6}$/, 'Почтовый индекс должен содержать 6 цифр']
  },
  coordinates: {
    latitude: Number,
    longitude: Number
  },
  deliveryInstructions: {
    type: String,
    maxlength: [500, 'Инструкции не могут быть длиннее 500 символов']
  },
  isDefault: {
    type: Boolean,
    default: false
  },
  isActive: {
    type: Boolean,
    default: true
  },
  deliveryZone: {
    type: String,
    enum: ['center', 'near', 'far', 'suburb'],
    default: 'center'
  }
}, {
  timestamps: true
});

// Индексы
addressSchema.index({ user: 1, isActive: 1 });
addressSchema.index({ user: 1, isDefault: 1 });

// Убедиться, что у пользователя только один адрес по умолчанию
addressSchema.pre('save', async function(next) {
  if (this.isDefault) {
    await this.constructor.updateMany(
      { user: this.user, _id: { $ne: this._id } },
      { isDefault: false }
    );
  }
  next();
});

// Виртуальное поле для полного адреса
addressSchema.virtual('fullAddress').get(function() {
  let address = `${this.city}, ${this.street}, д. ${this.house}`;
  if (this.apartment) address += `, кв. ${this.apartment}`;
  return address;
});

module.exports = mongoose.model('Address', addressSchema);