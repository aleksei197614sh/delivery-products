const mongoose = require('mongoose');
require('dotenv').config();

// Импорт моделей
const User = require('../models/User');
const Category = require('../models/Category');
const Product = require('../models/Product');
const Order = require('../models/Order');
const Review = require('../models/Review');
const Address = require('../models/Address');
const Promotion = require('../models/Promotion');

// Подключение к базе данных
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/freshmarket')
  .then(() => {
    console.log('✅ Подключение к MongoDB установлено');
    seedDatabase();
  })
  .catch((error) => {
    console.error('❌ Ошибка подключения к MongoDB:', error);
    process.exit(1);
  });

async function seedDatabase() {
  try {
    console.log('🌱 Начинаем заполнение базы данных...');

    // Очистка существующих данных
    await Promise.all([
      User.deleteMany({}),
      Category.deleteMany({}),
      Product.deleteMany({}),
      Order.deleteMany({}),
      Review.deleteMany({}),
      Address.deleteMany({}),
      Promotion.deleteMany({})
    ]);
    console.log('🗑️ Существующие данные удалены');

    // Создание пользователей
    const users = await User.create([
      {
        name: 'Администратор',
        email: 'admin@freshmarket.ru',
        password: 'admin123',
        phone: '+7 (999) 123-45-67',
        role: 'admin',
        loyaltyPoints: 0,
        totalSpent: 0
      },
      {
        name: 'Анна Петрова',
        email: 'anna.petrova@email.com',
        password: 'password123',
        phone: '+7 (999) 234-56-78',
        birthDate: new Date('1990-05-15'),
        loyaltyPoints: 1250,
        loyaltyLevel: 'Золотой',
        totalSpent: 45600
      },
      {
        name: 'Михаил Иванов',
        email: 'mikhail.ivanov@email.com',
        password: 'password123',
        phone: '+7 (999) 345-67-89',
        birthDate: new Date('1985-08-22'),
        loyaltyPoints: 890,
        loyaltyLevel: 'Серебряный',
        totalSpent: 23400
      },
      {
        name: 'Елена Сидорова',
        email: 'elena.sidorova@email.com',
        password: 'password123',
        phone: '+7 (999) 456-78-90',
        birthDate: new Date('1992-12-03'),
        loyaltyPoints: 2340,
        loyaltyLevel: 'Платиновый',
        totalSpent: 78900
      },
      {
        name: 'Дмитрий Козлов',
        email: 'dmitry.kozlov@email.com',
        password: 'password123',
        phone: '+7 (999) 567-89-01',
        loyaltyPoints: 450,
        totalSpent: 12300
      }
    ]);
    console.log('👥 Пользователи созданы');

    // Создание категорий
    const categories = await Category.create([
      {
        name: 'Фрукты и овощи',
        description: 'Свежие фрукты и овощи от лучших поставщиков',
        image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg',
        sortOrder: 1
      },
      {
        name: 'Мясо и птица',
        description: 'Качественное мясо и птица',
        image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg',
        sortOrder: 2
      },
      {
        name: 'Молочные продукты',
        description: 'Свежие молочные продукты',
        image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg',
        sortOrder: 3
      },
      {
        name: 'Хлеб и выпечка',
        description: 'Свежий хлеб и выпечка',
        image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg',
        sortOrder: 4
      },
      {
        name: 'Напитки',
        description: 'Соки, воды, газированные напитки',
        image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg',
        sortOrder: 5
      },
      {
        name: 'Замороженные продукты',
        description: 'Замороженные овощи, мясо, полуфабрикаты',
        image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg',
        sortOrder: 6
      }
    ]);
    console.log('📂 Категории созданы');

    // Создание товаров
    const products = await Product.create([
      // Фрукты и овощи
      {
        name: 'Яблоки Гала',
        description: 'Сочные и сладкие яблоки сорта Гала. Идеально подходят для детского питания и перекусов.',
        shortDescription: 'Сочные сладкие яблоки',
        category: categories[0]._id,
        price: 189,
        oldPrice: 220,
        unit: 'кг',
        weight: 1,
        images: [{ url: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 150,
        isOrganic: true,
        isFeatured: true,
        brand: 'Садовод',
        countryOfOrigin: 'Россия',
        discount: { percentage: 15, startDate: new Date(), endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) },
        nutritionInfo: { calories: 52, carbohydrates: 14, fiber: 2.4 },
        tags: ['фрукты', 'сладкие', 'детское питание', 'витамины']
      },
      {
        name: 'Бананы',
        description: 'Спелые бананы из Эквадора. Богаты калием и витаминами.',
        shortDescription: 'Спелые бананы из Эквадора',
        category: categories[0]._id,
        price: 120,
        unit: 'кг',
        images: [{ url: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 200,
        isOrganic: true,
        countryOfOrigin: 'Эквадор',
        nutritionInfo: { calories: 89, carbohydrates: 23, fiber: 2.6 },
        tags: ['фрукты', 'калий', 'энергия']
      },
      {
        name: 'Морковь',
        description: 'Свежая морковь отечественного производства. Богата бета-каротином.',
        shortDescription: 'Свежая морковь',
        category: categories[0]._id,
        price: 65,
        unit: 'кг',
        images: [{ url: 'https://images.pexels.com/photos/143133/pexels-photo-143133.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 180,
        isOrganic: false,
        countryOfOrigin: 'Россия',
        nutritionInfo: { calories: 41, carbohydrates: 10, fiber: 2.8 },
        tags: ['овощи', 'витамин А', 'бета-каротин']
      },

      // Мясо и птица
      {
        name: 'Куриная грудка',
        description: 'Свежая куриная грудка без кожи. Диетический продукт с высоким содержанием белка.',
        shortDescription: 'Диетическая куриная грудка',
        category: categories[1]._id,
        price: 320,
        oldPrice: 380,
        unit: 'кг',
        images: [{ url: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 50,
        brand: 'Петелинка',
        countryOfOrigin: 'Россия',
        discount: { percentage: 16, startDate: new Date(), endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000) },
        nutritionInfo: { calories: 165, proteins: 31, fats: 3.6 },
        tags: ['мясо', 'диетическое', 'белок', 'фитнес']
      },
      {
        name: 'Говядина для тушения',
        description: 'Мраморная говядина высшего сорта. Идеально подходит для тушения и запекания.',
        shortDescription: 'Мраморная говядина высшего сорта',
        category: categories[1]._id,
        price: 650,
        unit: 'кг',
        images: [{ url: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 30,
        brand: 'Мираторг',
        countryOfOrigin: 'Россия',
        nutritionInfo: { calories: 250, proteins: 26, fats: 15 },
        tags: ['мясо', 'говядина', 'премиум']
      },

      // Молочные продукты
      {
        name: 'Молоко 3.2% 1л',
        description: 'Натуральное коровье молоко жирностью 3.2%. Пастеризованное, без консервантов.',
        shortDescription: 'Натуральное молоко 3.2%',
        category: categories[2]._id,
        price: 85,
        unit: 'шт',
        images: [{ url: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 120,
        brand: 'Простоквашино',
        countryOfOrigin: 'Россия',
        expirationDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        nutritionInfo: { calories: 64, proteins: 3.2, fats: 3.6, carbohydrates: 4.7 },
        tags: ['молоко', 'натуральное', 'кальций']
      },
      {
        name: 'Творог 9%',
        description: 'Нежный творог 9% жирности. Богат белком и кальцием.',
        shortDescription: 'Нежный творог 9%',
        category: categories[2]._id,
        price: 145,
        unit: 'упак',
        weight: 0.4,
        images: [{ url: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 80,
        brand: 'Домик в деревне',
        nutritionInfo: { calories: 159, proteins: 16, fats: 9 },
        tags: ['творог', 'белок', 'кальций']
      },

      // Хлеб и выпечка
      {
        name: 'Хлеб бородинский',
        description: 'Традиционный русский хлеб с кориандром. Выпекается по классическому рецепту.',
        shortDescription: 'Традиционный бородинский хлеб',
        category: categories[3]._id,
        price: 65,
        unit: 'шт',
        weight: 0.7,
        images: [{ url: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 60,
        brand: 'Хлебный дом',
        nutritionInfo: { calories: 208, proteins: 6.8, carbohydrates: 40.1, fiber: 7.9 },
        tags: ['хлеб', 'традиционный', 'кориандр']
      },
      {
        name: 'Багет французский',
        description: 'Классический французский багет с хрустящей корочкой.',
        shortDescription: 'Французский багет',
        category: categories[3]._id,
        price: 89,
        unit: 'шт',
        weight: 0.3,
        images: [{ url: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 40,
        brand: 'Французская пекарня',
        tags: ['хлеб', 'французский', 'багет']
      },

      // Напитки
      {
        name: 'Сок апельсиновый 1л',
        description: 'Натуральный апельсиновый сок прямого отжима. Без добавления сахара.',
        shortDescription: 'Натуральный апельсиновый сок',
        category: categories[4]._id,
        price: 145,
        unit: 'шт',
        images: [{ url: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg', isPrimary: true }],
        inStock: false,
        stockQuantity: 0,
        brand: 'Добрый',
        nutritionInfo: { calories: 45, carbohydrates: 10.4 },
        tags: ['сок', 'апельсин', 'витамин С']
      },
      {
        name: 'Вода минеральная 1.5л',
        description: 'Природная минеральная вода из артезианских источников.',
        shortDescription: 'Минеральная вода',
        category: categories[4]._id,
        price: 55,
        unit: 'шт',
        images: [{ url: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 200,
        brand: 'Боржоми',
        tags: ['вода', 'минеральная', 'природная']
      },

      // Замороженные продукты
      {
        name: 'Пельмени домашние',
        description: 'Пельмени ручной лепки с говяжьим фаршем. Заморожены при -18°C.',
        shortDescription: 'Домашние пельмени',
        category: categories[5]._id,
        price: 280,
        unit: 'упак',
        weight: 0.8,
        images: [{ url: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg', isPrimary: true }],
        inStock: true,
        stockQuantity: 90,
        brand: 'Сибирская коллекция',
        nutritionInfo: { calories: 275, proteins: 11, fats: 12, carbohydrates: 29 },
        tags: ['пельмени', 'замороженные', 'говядина']
      }
    ]);
    console.log('🛍️ Товары созданы');

    // Создание адресов
    const addresses = await Address.create([
      {
        user: users[1]._id,
        title: 'Дом',
        recipientName: 'Анна Петрова',
        recipientPhone: '+7 (999) 234-56-78',
        city: 'Москва',
        street: 'ул. Примерная',
        house: '123',
        apartment: '45',
        entrance: '2',
        floor: '5',
        postalCode: '123456',
        isDefault: true,
        deliveryZone: 'center'
      },
      {
        user: users[1]._id,
        title: 'Работа',
        recipientName: 'Анна Петрова',
        recipientPhone: '+7 (999) 234-56-78',
        city: 'Москва',
        street: 'ул. Деловая',
        house: '67',
        apartment: '890',
        postalCode: '123457',
        isDefault: false,
        deliveryZone: 'center'
      },
      {
        user: users[2]._id,
        title: 'Дом',
        recipientName: 'Михаил Иванов',
        recipientPhone: '+7 (999) 345-67-89',
        city: 'Москва',
        street: 'пр. Мира',
        house: '45',
        apartment: '12',
        postalCode: '123458',
        isDefault: true,
        deliveryZone: 'near'
      }
    ]);
    console.log('📍 Адреса созданы');

    // Создание заказов
    const orders = await Order.create([
      {
        user: users[1]._id,
        items: [
          { product: products[0]._id, quantity: 2, price: 189, discount: 15 },
          { product: products[5]._id, quantity: 3, price: 85, discount: 0 },
          { product: products[6]._id, quantity: 1, price: 65, discount: 0 }
        ],
        status: 'delivered',
        paymentStatus: 'paid',
        paymentMethod: 'card',
        deliveryAddress: {
          street: 'ул. Примерная',
          city: 'Москва',
          apartment: '45'
        },
        deliveryMethod: 'standard',
        subtotal: 673,
        deliveryCost: 0,
        total: 673,
        pointsEarned: 6,
        actualDelivery: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000)
      },
      {
        user: users[2]._id,
        items: [
          { product: products[3]._id, quantity: 1, price: 320, discount: 16 },
          { product: products[7]._id, quantity: 2, price: 145, discount: 0 }
        ],
        status: 'processing',
        paymentStatus: 'paid',
        paymentMethod: 'sbp',
        deliveryAddress: {
          street: 'пр. Мира',
          city: 'Москва',
          apartment: '12'
        },
        deliveryMethod: 'express',
        subtotal: 610,
        deliveryCost: 299,
        total: 909,
        estimatedDelivery: new Date(Date.now() + 2 * 60 * 60 * 1000)
      }
    ]);
    console.log('📦 Заказы созданы');

    // Создание отзывов
    const reviews = await Review.create([
      {
        user: users[1]._id,
        product: products[0]._id,
        order: orders[0]._id,
        rating: 5,
        title: 'Отличные яблоки!',
        content: 'Очень сочные и сладкие яблоки. Детям очень понравились. Доставили быстро, упаковка хорошая.',
        isVerified: true,
        isApproved: true,
        helpfulVotes: 23,
        totalVotes: 25
      },
      {
        user: users[2]._id,
        product: products[3]._id,
        rating: 4,
        title: 'Хорошее мясо',
        content: 'Качественная куриная грудка, мясо нежное. Единственное - цена немного высоковата.',
        isVerified: false,
        isApproved: true,
        helpfulVotes: 15,
        totalVotes: 18
      },
      {
        user: users[3]._id,
        product: products[5]._id,
        rating: 5,
        title: 'Вкусное молоко',
        content: 'Натуральное молоко, как в детстве. Срок годности хороший, упаковка удобная.',
        isVerified: true,
        isApproved: true,
        helpfulVotes: 31,
        totalVotes: 33
      }
    ]);
    console.log('⭐ Отзывы созданы');

    // Создание акций
    const promotions = await Promotion.create([
      {
        title: 'Скидка 25% на первый заказ',
        description: 'Специальное предложение для новых клиентов',
        code: 'WELCOME25',
        type: 'percentage',
        value: 25,
        minOrderAmount: 1000,
        maxDiscountAmount: 1000,
        startDate: new Date(),
        endDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
        usageLimit: { total: 1000, perUser: 1 },
        userRestrictions: { newUsersOnly: true },
        isActive: true,
        isFeatured: true,
        createdBy: users[0]._id
      },
      {
        title: 'Бесплатная доставка',
        description: 'При заказе от 2000 рублей',
        code: 'FREEDEL2000',
        type: 'free_delivery',
        value: 0,
        minOrderAmount: 2000,
        startDate: new Date(),
        endDate: new Date(Date.now() + 60 * 24 * 60 * 60 * 1000),
        usageLimit: { perUser: 5 },
        isActive: true,
        isFeatured: true,
        createdBy: users[0]._id
      },
      {
        title: 'Фрукты и овощи -30%',
        description: 'Скидка на все свежие фрукты и овощи',
        code: 'FRESH30',
        type: 'percentage',
        value: 30,
        minOrderAmount: 500,
        maxDiscountAmount: 500,
        startDate: new Date(),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
        applicableCategories: [categories[0]._id],
        isActive: true,
        isFeatured: true,
        createdBy: users[0]._id
      }
    ]);
    console.log('🎁 Акции созданы');

    console.log('✅ База данных успешно заполнена тестовыми данными!');
    console.log('\n📊 Статистика:');
    console.log(`👥 Пользователей: ${users.length}`);
    console.log(`📂 Категорий: ${categories.length}`);
    console.log(`🛍️ Товаров: ${products.length}`);
    console.log(`📦 Заказов: ${orders.length}`);
    console.log(`⭐ Отзывов: ${reviews.length}`);
    console.log(`📍 Адресов: ${addresses.length}`);
    console.log(`🎁 Акций: ${promotions.length}`);
    
    console.log('\n🔐 Тестовые аккаунты:');
    console.log('Администратор: admin@freshmarket.ru / admin123');
    console.log('Клиент: anna.petrova@email.com / password123');
    console.log('Клиент: mikhail.ivanov@email.com / password123');

    process.exit(0);
  } catch (error) {
    console.error('❌ Ошибка при заполнении базы данных:', error);
    process.exit(1);
  }
}