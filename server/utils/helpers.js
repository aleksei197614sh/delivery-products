// Утилиты и вспомогательные функции

// Генерация случайного номера заказа
exports.generateOrderNumber = () => {
  const timestamp = Date.now().toString().slice(-6);
  const random = Math.floor(Math.random() * 1000).toString().padStart(3, '0');
  return `FM${timestamp}${random}`;
};

// Форматирование цены
exports.formatPrice = (price) => {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0
  }).format(price);
};

// Валидация email
exports.isValidEmail = (email) => {
  const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegex.test(email);
};

// Валидация телефона
exports.isValidPhone = (phone) => {
  const phoneRegex = /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
  return phoneRegex.test(phone);
};

// Создание slug из строки
exports.createSlug = (text) => {
  return text
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
};

// Пагинация
exports.getPaginationData = (page, limit, total) => {
  const currentPage = parseInt(page) || 1;
  const itemsPerPage = parseInt(limit) || 10;
  const totalPages = Math.ceil(total / itemsPerPage);
  const skip = (currentPage - 1) * itemsPerPage;

  return {
    page: currentPage,
    limit: itemsPerPage,
    total,
    pages: totalPages,
    skip,
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1
  };
};

// Расчет скидки
exports.calculateDiscount = (price, discountPercentage) => {
  if (!discountPercentage || discountPercentage <= 0) return price;
  return Math.round(price * (1 - discountPercentage / 100));
};

// Расчет стоимости доставки
exports.calculateDeliveryFee = (subtotal, deliveryMethod, zone = 'center') => {
  const freeDeliveryThresholds = {
    center: 1500,
    near: 2000,
    far: 2500,
    suburb: 3000
  };

  const deliveryFees = {
    standard: {
      center: 199,
      near: 249,
      far: 299,
      suburb: 399
    },
    express: {
      center: 299,
      near: 399,
      far: 499,
      suburb: 599
    },
    scheduled: {
      center: 149,
      near: 199,
      far: 249,
      suburb: 349
    }
  };

  const threshold = freeDeliveryThresholds[zone] || freeDeliveryThresholds.center;
  
  if (subtotal >= threshold) {
    return 0;
  }

  return deliveryFees[deliveryMethod]?.[zone] || deliveryFees.standard.center;
};

// Форматирование даты
exports.formatDate = (date, locale = 'ru-RU') => {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  }).format(new Date(date));
};

// Генерация случайного кода
exports.generateRandomCode = (length = 8) => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
};

// Проверка рабочего времени
exports.isWorkingHours = () => {
  const now = new Date();
  const hour = now.getHours();
  return hour >= 8 && hour < 22; // Рабочие часы с 8:00 до 22:00
};

// Расчет времени доставки
exports.calculateDeliveryTime = (deliveryMethod, zone = 'center') => {
  const baseTime = {
    standard: { min: 120, max: 240 }, // 2-4 часа
    express: { min: 60, max: 120 },   // 1-2 часа
    scheduled: { min: 600, max: 1200 } // 10-20 часов (на следующий день)
  };

  const zoneMultiplier = {
    center: 1,
    near: 1.2,
    far: 1.5,
    suburb: 2
  };

  const time = baseTime[deliveryMethod] || baseTime.standard;
  const multiplier = zoneMultiplier[zone] || 1;

  return {
    min: Math.round(time.min * multiplier),
    max: Math.round(time.max * multiplier)
  };
};