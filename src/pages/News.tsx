import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Newspaper, 
  Search, 
  Calendar, 
  Clock,
  TrendingUp,
  Award,
  Users,
  MapPin,
  Zap,
  Gift,
  Truck,
  Star,
  Building,
  Megaphone
} from 'lucide-react';

const News = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все новости', count: 15 },
    { id: 'company', name: 'О компании', count: 6 },
    { id: 'products', name: 'Продукты', count: 4 },
    { id: 'expansion', name: 'Расширение', count: 3 },
    { id: 'awards', name: 'Награды', count: 2 }
  ];

  const featuredNews = {
    id: 1,
    title: 'ФрешМаркет запускает доставку в 10 новых городов',
    excerpt: 'Мы рады сообщить о расширении географии доставки. Теперь жители еще 10 городов России смогут заказывать свежие продукты с доставкой на дом.',
    content: 'В рамках стратегии развития компания ФрешМаркет объявляет о запуске доставки в 10 новых городах России...',
    date: '2024-01-15',
    category: 'expansion',
    image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    views: 2340
  };

  const newsItems = [
    {
      id: 2,
      title: 'ФрешМаркет получил награду "Лучший интернет-магазин года"',
      excerpt: 'На ежегодной премии E-commerce Awards 2024 наша компания была признана лучшим интернет-магазином в категории "Продукты питания".',
      date: '2024-01-12',
      category: 'awards',
      image: 'https://images.pexels.com/photos/1181534/pexels-photo-1181534.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1890
    },
    {
      id: 3,
      title: 'Новая линейка органических продуктов в каталоге',
      excerpt: 'Мы добавили более 200 наименований сертифицированных органических продуктов от лучших российских и зарубежных производителей.',
      date: '2024-01-10',
      category: 'products',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1456
    },
    {
      id: 4,
      title: 'Открытие нового распределительного центра в Санкт-Петербурге',
      excerpt: 'Новый логистический центр площадью 15,000 кв.м. позволит улучшить качество и скорость доставки для клиентов Северо-Западного региона.',
      date: '2024-01-08',
      category: 'expansion',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1123
    },
    {
      id: 5,
      title: 'ФрешМаркет достиг отметки в 1 миллион клиентов',
      excerpt: 'Мы гордимся тем, что миллион покупателей доверяют нам свои покупки продуктов. Спасибо за доверие!',
      date: '2024-01-05',
      category: 'company',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 2890
    },
    {
      id: 6,
      title: 'Запуск программы поддержки местных фермеров',
      excerpt: 'Новая инициатива поможет малым фермерским хозяйствам выйти на рынок онлайн-продаж через нашу платформу.',
      date: '2024-01-03',
      category: 'company',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 987
    },
    {
      id: 7,
      title: 'Внедрение ИИ для персонализации рекомендаций',
      excerpt: 'Новая система машинного обучения поможет предлагать клиентам наиболее подходящие товары на основе их предпочтений.',
      date: '2024-01-01',
      category: 'company',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1567
    },
    {
      id: 8,
      title: 'Экологическая упаковка для всех заказов',
      excerpt: 'С нового года мы полностью перешли на биоразлагаемую упаковку, сократив воздействие на окружающую среду на 70%.',
      date: '2023-12-28',
      category: 'company',
      image: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 1234
    },
    {
      id: 9,
      title: 'Партнерство с сетью "Здоровое питание"',
      excerpt: 'Заключено соглашение о стратегическом партнерстве с крупнейшей сетью магазинов здорового питания.',
      date: '2023-12-25',
      category: 'company',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
      views: 876
    }
  ];

  const filteredNews = newsItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'company': return <Building className="w-4 h-4" />;
      case 'products': return <Gift className="w-4 h-4" />;
      case 'expansion': return <MapPin className="w-4 h-4" />;
      case 'awards': return <Award className="w-4 h-4" />;
      default: return <Newspaper className="w-4 h-4" />;
    }
  };

  const getCategoryName = (category: string) => {
    switch (category) {
      case 'company': return 'О компании';
      case 'products': return 'Продукты';
      case 'expansion': return 'Расширение';
      case 'awards': return 'Награды';
      default: return 'Новости';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Newspaper className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Новости ФрешМаркет</h1>
            <p className="text-xl text-blue-100 mb-8">
              Следите за последними новостями компании, обновлениями продуктов 
              и важными событиями
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Поиск новостей..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-white text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {getCategoryIcon(category.id)}
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Главная новость</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredNews.image} 
                    alt={featuredNews.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-500">
                    Главная новость
                  </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      {getCategoryIcon(featuredNews.category)}
                      <span>{getCategoryName(featuredNews.category)}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredNews.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp className="w-4 h-4" />
                      <span>{featuredNews.views} просмотров</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{featuredNews.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{featuredNews.excerpt}</p>
                  
                  <Button>Читать полностью</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Все новости</h2>
              <p className="text-gray-600">
                Найдено {filteredNews.length} новостей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((news) => (
                <Card key={news.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3">
                      {getCategoryName(news.category)}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(news.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>{news.views}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">{news.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
                    
                    <Button size="sm" variant="outline" className="w-full">
                      Читать далее
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredNews.length === 0 && (
              <div className="text-center py-12">
                <Newspaper className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Новости не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить фильтры или поисковый запрос</p>
              </div>
            )}

            {/* Load More */}
            {filteredNews.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Загрузить еще новости
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Company Stats */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12">ФрешМаркет в цифрах</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-gray-600">Клиентов</div>
              </div>
              <div>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <div className="text-gray-600">Городов</div>
              </div>
              <div>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
                <div className="text-gray-600">Заказов в день</div>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
                <div className="text-gray-600">Рейтинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Megaphone className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Подписка на новости</h2>
            <p className="text-xl text-blue-100 mb-8">
              Будьте в курсе всех новостей и обновлений ФрешМаркет
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <Input
                placeholder="Ваш email"
                type="email"
                className="bg-white text-gray-800"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100">
                Подписаться
              </Button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Мы отправляем не более 2 писем в месяц и не передаем данные третьим лицам
            </p>
          </div>
        </div>
      </section>

      {/* Press Contacts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Для СМИ</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Пресс-служба</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-1">Email для прессы</h4>
                      <p className="text-gray-600">press@freshmarket.ru</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Телефон</h4>
                      <p className="text-gray-600">+7 (495) 123-45-67 доб. 101</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Время работы</h4>
                      <p className="text-gray-600">Пн-Пт: 10:00-18:00</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Медиа-материалы</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full justify-start">
                      Логотипы и брендбук
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Фотографии руководства
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Пресс-релизы
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Финансовые отчеты
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;