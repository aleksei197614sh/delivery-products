# ФрешМаркет API Сервер

Node.js сервер с MVC архитектурой для интернет-магазина продуктов питания.

## Технологии

- **Node.js** - серверная платформа
- **Express.js** - веб-фреймворк
- **MongoDB** - база данных
- **Mongoose** - ODM для MongoDB
- **JWT** - аутентификация
- **bcryptjs** - хеширование паролей

## Установка и запуск

1. Установите зависимости:
```bash
cd server
npm install
```

2. Настройте переменные окружения в файле `.env`

3. Убедитесь, что MongoDB запущен

4. Заполните базу тестовыми данными:
```bash
npm run seed
```

5. Запустите сервер:
```bash
# Режим разработки
npm run dev

# Продакшн режим
npm start
```

## API Endpoints

### Аутентификация
- `POST /api/auth/register` - Регистрация
- `POST /api/auth/login` - Вход
- `GET /api/auth/me` - Получить текущего пользователя
- `PUT /api/auth/profile` - Обновить профиль
- `PUT /api/auth/change-password` - Сменить пароль
- `POST /api/auth/logout` - Выход

### Пользователи (только для админов/менеджеров)
- `GET /api/users` - Получить всех пользователей
- `GET /api/users/stats` - Статистика пользователей
- `GET /api/users/:id` - Получить пользователя по ID
- `PUT /api/users/:id` - Обновить пользователя
- `DELETE /api/users/:id` - Удалить пользователя

### Категории
- `GET /api/categories` - Получить все категории
- `GET /api/categories/tree` - Получить дерево категорий
- `GET /api/categories/:id` - Получить категорию по ID/slug
- `POST /api/categories` - Создать категорию (админ)
- `PUT /api/categories/:id` - Обновить категорию (админ)
- `DELETE /api/categories/:id` - Удалить категорию (админ)

### Товары
- `GET /api/products` - Получить все товары
- `GET /api/products/search` - Поиск товаров
- `GET /api/products/recommended` - Рекомендуемые товары
- `GET /api/products/stats` - Статистика товаров (админ)
- `GET /api/products/:id` - Получить товар по ID/slug
- `POST /api/products` - Создать товар (админ)
- `PUT /api/products/:id` - Обновить товар (админ)
- `DELETE /api/products/:id` - Удалить товар (админ)

### Заказы
- `GET /api/orders/my` - Мои заказы
- `POST /api/orders` - Создать заказ
- `GET /api/orders/:id` - Получить заказ по ID
- `PUT /api/orders/:id/cancel` - Отменить заказ
- `GET /api/orders` - Все заказы (админ)
- `GET /api/orders/stats/overview` - Статистика заказов (админ)
- `PUT /api/orders/:id/status` - Обновить статус заказа (админ)

### Отзывы
- `GET /api/reviews` - Получить все отзывы
- `GET /api/reviews/product/:productId` - Отзывы товара
- `GET /api/reviews/:id` - Получить отзыв по ID
- `POST /api/reviews` - Создать отзыв
- `PUT /api/reviews/:id` - Обновить отзыв
- `DELETE /api/reviews/:id` - Удалить отзыв
- `POST /api/reviews/:id/helpful` - Отметить отзыв полезным

### Акции
- `GET /api/promotions/featured` - Рекомендуемые акции
- `GET /api/promotions` - Получить все акции
- `GET /api/promotions/:id` - Получить акцию по ID/коду
- `POST /api/promotions/validate` - Проверить промокод
- `POST /api/promotions` - Создать акцию (админ)
- `PUT /api/promotions/:id` - Обновить акцию (админ)
- `DELETE /api/promotions/:id` - Удалить акцию (админ)

### Адреса
- `GET /api/addresses` - Мои адреса
- `GET /api/addresses/:id` - Получить адрес по ID
- `POST /api/addresses` - Создать адрес
- `PUT /api/addresses/:id` - Обновить адрес
- `DELETE /api/addresses/:id` - Удалить адрес
- `PUT /api/addresses/:id/default` - Установить адрес по умолчанию

## Модели данных

### User (Пользователь)
- Личная информация (имя, email, телефон)
- Система лояльности (баллы, уровень)
- Настройки уведомлений
- Роли (customer, admin, manager)

### Category (Категория)
- Иерархическая структура
- SEO поля
- Изображения и иконки

### Product (Товар)
- Подробная информация о товаре
- Система скидок
- Рейтинги и отзывы
- Управление запасами

### Order (Заказ)
- Состав заказа
- Статусы заказа и оплаты
- Адрес и способ доставки
- Применение промокодов и баллов

### Review (Отзыв)
- Оценки и комментарии
- Система модерации
- Полезность отзывов

### Address (Адрес)
- Адреса доставки пользователей
- Зоны доставки
- Адрес по умолчанию

### Promotion (Акция)
- Различные типы скидок
- Ограничения использования
- Применимость к категориям/товарам

## Безопасность

- JWT токены для аутентификации
- Хеширование паролей с bcrypt
- Rate limiting для API
- Валидация входных данных
- CORS настройки
- Helmet для безопасности заголовков

## Тестовые данные

После выполнения `npm run seed` в базе будут созданы:
- 5 пользователей (включая админа)
- 6 категорий товаров
- 12 товаров с подробной информацией
- Адреса доставки
- Заказы с различными статусами
- Отзывы на товары
- Активные акции и промокоды

## Структура проекта

```
server/
├── controllers/     # Контроллеры (бизнес-логика)
├── models/         # Модели данных (Mongoose схемы)
├── routes/         # Маршруты API
├── middleware/     # Промежуточное ПО
├── scripts/        # Скрипты (заполнение БД)
├── utils/          # Утилиты
├── uploads/        # Загруженные файлы
├── .env           # Переменные окружения
├── server.js      # Главный файл сервера
└── package.json   # Зависимости
```