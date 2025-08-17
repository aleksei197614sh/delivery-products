const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Генерация JWT токена
const generateToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN
  });
};

// Регистрация пользователя
exports.register = async (req, res) => {
  try {
    const { name, email, password, phone, birthDate } = req.body;

    // Проверка существования пользователя
    const existingUser = await User.findOne({ 
      $or: [{ email }, { phone }] 
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'Пользователь с таким email или телефоном уже существует'
      });
    }

    // Создание нового пользователя
    const user = new User({
      name,
      email,
      password,
      phone,
      birthDate: birthDate ? new Date(birthDate) : undefined
    });

    await user.save();

    // Генерация токена
    const token = generateToken(user._id);

    res.status(201).json({
      success: true,
      message: 'Пользователь успешно зарегистрирован',
      data: {
        user: user.toPublicJSON(),
        token
      }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Вход пользователя
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Проверка наличия email и пароля
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email и пароль обязательны'
      });
    }

    // Поиск пользователя с паролем
    const user = await User.findOne({ email }).select('+password');

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({
        success: false,
        message: 'Неверный email или пароль'
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Аккаунт заблокирован'
      });
    }

    // Обновление времени последнего входа
    user.lastLogin = new Date();
    await user.save();

    // Генерация токена
    const token = generateToken(user._id);

    res.json({
      success: true,
      message: 'Вход выполнен успешно',
      data: {
        user: user.toPublicJSON(),
        token
      }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Получение текущего пользователя
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id)
      .populate('addresses')
      .populate({
        path: 'orders',
        options: { sort: { createdAt: -1 }, limit: 5 }
      });

    res.json({
      success: true,
      data: { user: user.toPublicJSON() }
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Обновление профиля
exports.updateProfile = async (req, res) => {
  try {
    const allowedFields = ['name', 'phone', 'birthDate', 'preferences'];
    const updates = {};

    allowedFields.forEach(field => {
      if (req.body[field] !== undefined) {
        updates[field] = req.body[field];
      }
    });

    const user = await User.findByIdAndUpdate(
      req.user.id,
      updates,
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Профиль успешно обновлен',
      data: { user: user.toPublicJSON() }
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Смена пароля
exports.changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Текущий и новый пароль обязательны'
      });
    }

    const user = await User.findById(req.user.id).select('+password');

    if (!(await user.comparePassword(currentPassword))) {
      return res.status(400).json({
        success: false,
        message: 'Неверный текущий пароль'
      });
    }

    user.password = newPassword;
    await user.save();

    res.json({
      success: true,
      message: 'Пароль успешно изменен'
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// Выход (в данной реализации просто возвращаем успех)
exports.logout = async (req, res) => {
  res.json({
    success: true,
    message: 'Выход выполнен успешно'
  });
};