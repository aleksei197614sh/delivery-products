// Middleware для валидации данных

// Валидация регистрации
exports.validateRegistration = (req, res, next) => {
  const { name, email, password, phone } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Имя должно содержать минимум 2 символа');
  }

  if (!email || !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    errors.push('Введите корректный email');
  }

  if (!password || password.length < 6) {
    errors.push('Пароль должен содержать минимум 6 символов');
  }

  if (!phone || !/^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/.test(phone)) {
    errors.push('Введите корректный номер телефона');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Ошибки валидации',
      errors
    });
  }

  next();
};

// Валидация входа
exports.validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  const errors = [];

  if (!email) {
    errors.push('Email обязателен');
  }

  if (!password) {
    errors.push('Пароль обязателен');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Ошибки валидации',
      errors
    });
  }

  next();
};

// Валидация создания товара
exports.validateProduct = (req, res, next) => {
  const { name, description, category, price, unit } = req.body;
  const errors = [];

  if (!name || name.trim().length < 2) {
    errors.push('Название товара должно содержать минимум 2 символа');
  }

  if (!description || description.trim().length < 10) {
    errors.push('Описание должно содержать минимум 10 символов');
  }

  if (!category) {
    errors.push('Категория обязательна');
  }

  if (!price || price <= 0) {
    errors.push('Цена должна быть больше 0');
  }

  if (!unit || !['кг', 'г', 'л', 'мл', 'шт', 'упак'].includes(unit)) {
    errors.push('Единица измерения должна быть одной из: кг, г, л, мл, шт, упак');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Ошибки валидации',
      errors
    });
  }

  next();
};

// Валидация создания заказа
exports.validateOrder = (req, res, next) => {
  const { items, deliveryAddress, paymentMethod } = req.body;
  const errors = [];

  if (!items || !Array.isArray(items) || items.length === 0) {
    errors.push('Заказ должен содержать минимум один товар');
  }

  if (items) {
    items.forEach((item, index) => {
      if (!item.product) {
        errors.push(`Товар ${index + 1}: ID товара обязателен`);
      }
      if (!item.quantity || item.quantity <= 0) {
        errors.push(`Товар ${index + 1}: Количество должно быть больше 0`);
      }
    });
  }

  if (!deliveryAddress) {
    errors.push('Адрес доставки обязателен');
  } else {
    if (!deliveryAddress.street) errors.push('Улица обязательна');
    if (!deliveryAddress.city) errors.push('Город обязателен');
  }

  if (!paymentMethod || !['card', 'cash', 'sbp', 'wallet', 'installments', 'points'].includes(paymentMethod)) {
    errors.push('Способ оплаты должен быть одним из: card, cash, sbp, wallet, installments, points');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Ошибки валидации',
      errors
    });
  }

  next();
};

// Валидация отзыва
exports.validateReview = (req, res, next) => {
  const { product, rating, title, content } = req.body;
  const errors = [];

  if (!product) {
    errors.push('ID товара обязателен');
  }

  if (!rating || rating < 1 || rating > 5) {
    errors.push('Оценка должна быть от 1 до 5');
  }

  if (!title || title.trim().length < 5) {
    errors.push('Заголовок должен содержать минимум 5 символов');
  }

  if (!content || content.trim().length < 10) {
    errors.push('Текст отзыва должен содержать минимум 10 символов');
  }

  if (errors.length > 0) {
    return res.status(400).json({
      success: false,
      message: 'Ошибки валидации',
      errors
    });
  }

  next();
};