const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();

// Импорт маршрутов
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const promotionRoutes = require('./routes/promotionRoutes');
const addressRoutes = require('./routes/addressRoutes');

// Middleware безопасности
app.use(helmet());
app.use(compression());

// Логирование
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 минут
  max: 100, // максимум 100 запросов с одного IP
  message: 'Слишком много запросов с этого IP, попробуйте позже.'
});
app.use('/api/', limiter);

// CORS
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

// Парсинг JSON
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Статические файлы
app.use('/uploads', express.static('uploads'));

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/freshmarket')
  .then(() => {
    console.log('✅ Подключение к MongoDB успешно установлено');
  })
  .catch((error) => {
    console.error('❌ Ошибка подключения к MongoDB:', error);
    process.exit(1);
  });

// Маршруты API
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/promotions', promotionRoutes);
app.use('/api/addresses', addressRoutes);

// Базовый маршрут
app.get('/api', (req, res) => {
  res.json({
    message: 'ФрешМаркет API работает!',
    version: '1.0.0',
    timestamp: new Date().toISOString()
  });
});

// Обработка 404 ошибок
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Маршрут не найден'
  });
});

// Глобальная обработка ошибок
app.use((error, req, res, next) => {
  console.error('❌ Ошибка сервера:', error);
  
  res.status(error.status || 500).json({
    success: false,
    message: error.message || 'Внутренняя ошибка сервера',
    ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`🚀 Сервер запущен на порту ${PORT}`);
  console.log(`📱 API доступен по адресу: http://localhost:${PORT}/api`);
  console.log(`🌍 Окружение: ${process.env.NODE_ENV}`);
});

module.exports = app;