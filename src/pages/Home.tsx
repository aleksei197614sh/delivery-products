import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Truck, 
  Clock, 
  Shield, 
  Star, 
  Leaf, 
  Users, 
  Gift,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Home = () => {
  const categories = [
    { name: 'Фрукты и овощи', image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400', count: '150+ товаров' },
    { name: 'Мясо и птица', image: 'https://images.pexels.com/photos/361184/asparagus-steak-veal-steak-veal-361184.jpeg?auto=compress&cs=tinysrgb&w=400', count: '80+ товаров' },
    { name: 'Молочные продукты', image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400', count: '120+ товаров' },
    { name: 'Хлеб и выпечка', image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400', count: '60+ товаров' },
    { name: 'Напитки', image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400', count: '200+ товаров' },
    { name: 'Замороженные продукты', image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400', count: '90+ товаров' },
  ];

  const features = [
    {
      icon: <Truck className="w-8 h-8 text-green-600" />,
      title: 'Быстрая доставка',
      description: 'Доставляем продукты в течение 2 часов по городу'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: 'Гарантия качества',
      description: 'Все продукты проходят строгий контроль качества'
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: 'Работаем 24/7',
      description: 'Принимаем заказы круглосуточно без выходных'
    },
    {
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      title: 'Эко-продукты',
      description: 'Большой выбор органических и фермерских продуктов'
    }
  ];

  const promotions = [
    {
      title: 'Скидка 20% на первый заказ',
      description: 'Для новых покупателей',
      code: 'WELCOME20',
      color: 'bg-red-500'
    },
    {
      title: 'Бесплатная доставка',
      description: 'При заказе от 2000 ₽',
      code: 'FREE2000',
      color: 'bg-blue-500'
    },
    {
      title: 'Фрукты со скидкой 30%',
      description: 'Только сегодня',
      code: 'FRUITS30',
      color: 'bg-orange-500'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">
                Свежие продукты с доставкой на дом
              </h1>
              <p className="text-xl mb-8 text-green-100">
                Более 1000 качественных продуктов от проверенных поставщиков. 
                Быстрая доставка по всей России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Начать покупки
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Свежие продукты" 
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold text-gray-800">4.9/5</span>
                  <span className="text-gray-600">отзывов</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">Популярные категории</h2>
            <Link to="/catalog">
              <Button variant="outline">
                Все категории
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <div className="p-4 text-white">
                      <h3 className="text-xl font-semibold mb-1">{category.name}</h3>
                      <p className="text-sm opacity-90">{category.count}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Promotions Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Актуальные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promotions.map((promo, index) => (
              <Card key={index} className="overflow-hidden">
                <div className={`${promo.color} text-white p-4`}>
                  <Gift className="w-8 h-8 mb-2" />
                  <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                  <p className="opacity-90">{promo.description}</p>
                </div>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="font-mono">
                      {promo.code}
                    </Badge>
                    <Button size="sm">Применить</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Довольных клиентов</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1,500+</div>
              <div className="text-green-100">Товаров в каталоге</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-green-100">Городов доставки</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <div className="text-green-100">Поддержка клиентов</div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Выберите продукты</h3>
              <p className="text-gray-600">Добавьте нужные товары в корзину из нашего каталога</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Оформите заказ</h3>
              <p className="text-gray-600">Укажите адрес доставки и выберите удобное время</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Получите доставку</h3>
              <p className="text-gray-600">Курьер привезет свежие продукты прямо к вашей двери</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Отзывы клиентов</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Анна Петрова',
                rating: 5,
                text: 'Отличный сервис! Продукты всегда свежие, доставка быстрая. Рекомендую всем!'
              },
              {
                name: 'Михаил Иванов',
                rating: 5,
                text: 'Пользуюсь уже полгода. Очень удобно заказывать продукты онлайн, особенно когда нет времени ходить в магазин.'
              },
              {
                name: 'Елена Сидорова',
                rating: 5,
                text: 'Большой выбор органических продуктов. Цены приемлемые, качество на высоте!'
              }
            ].map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{review.text}"</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Подпишитесь на новости</h2>
          <p className="text-xl mb-8 text-green-100">
            Получайте уведомления о новых акциях и специальных предложениях
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Ваш email"
              className="flex-1 px-4 py-2 rounded-lg text-gray-800"
            />
            <Button className="bg-white text-green-600 hover:bg-gray-100">
              Подписаться
            </Button>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши партнеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
            {['Фермерское хозяйство "Зеленые поля"', 'Молочный завод "Альпийский"', 'Пекарня "Хлебный дом"', 'Мясокомбинат "Премиум"'].map((partner, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <Users className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-sm font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;