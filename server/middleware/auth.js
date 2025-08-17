const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Middleware для проверки аутентификации
exports.authenticate = async (req, res, next) => {
  try {
    let token;

    // Получить токен из заголовка Authorization
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'Токен доступа не предоставлен'
      });
    }

    // Проверить токен
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Найти пользователя
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Пользователь не найден'
      });
    }

    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        message: 'Аккаунт заблокирован'
      });
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({
        success: false,
        message: 'Недействительный токен'
      });
    }
    if (error.name === 'TokenExpiredError') {
      return res.status(401).json({
        success: false,
        message: 'Токен истек'
      });
    }
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

// Middleware для проверки роли администратора
exports.requireAdmin = (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).json({
      success: false,
      message: 'Доступ запрещен. Требуются права администратора'
    });
  }
  next();
};

// Middleware для проверки роли менеджера или администратора
exports.requireManager = (req, res, next) => {
  if (!['admin', 'manager'].includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      message: 'Доступ запрещен. Требуются права менеджера или администратора'
    });
  }
  next();
};

// Middleware для опциональной аутентификации
exports.optionalAuth = async (req, res, next) => {
  try {
    let token;

    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
    }

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      const user = await User.findById(decoded.userId);
      if (user && user.isActive) {
        req.user = user;
      }
    }

    next();
  } catch (error) {
    // Игнорируем ошибки токена для опциональной аутентификации
    next();
  }
};