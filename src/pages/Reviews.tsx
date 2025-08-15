import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Star, 
  ThumbsUp, 
  MessageCircle, 
  Filter,
  Search,
  TrendingUp,
  Award,
  Users,
  Calendar,
  Image,
  Send
} from 'lucide-react';

const Reviews = () => {
  const [selectedRating, setSelectedRating] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  const overallStats = {
    averageRating: 4.7,
    totalReviews: 2847,
    ratingDistribution: [
      { stars: 5, count: 1823, percentage: 64 },
      { stars: 4, count: 682, percentage: 24 },
      { stars: 3, count: 227, percentage: 8 },
      { stars: 2, count: 85, percentage: 3 },
      { stars: 1, count: 30, percentage: 1 }
    ]
  };

  const reviews = [
    {
      id: 1,
      author: 'Анна Петрова',
      rating: 5,
      date: '2024-01-15',
      title: 'Отличный сервис!',
      content: 'Заказываю уже полгода, всегда свежие продукты и быстрая доставка. Особенно нравится большой выбор органических товаров. Курьеры всегда вежливые и пунктуальные.',
      likes: 23,
      verified: true,
      orderNumber: '12345',
      helpful: 18,
      images: []
    },
    {
      id: 2,
      author: 'Михаил Иванов',
      rating: 4,
      date: '2024-01-12',
      title: 'Хорошо, но есть нюансы',
      content: 'В целом доволен сервисом. Продукты качественные, доставка в срок. Единственное - иногда не хватает товаров в наличии, особенно в выходные дни.',
      likes: 15,
      verified: true,
      orderNumber: '12344',
      helpful: 12,
      images: []
    },
    {
      id: 3,
      author: 'Елена Сидорова',
      rating: 5,
      date: '2024-01-10',
      title: 'Лучший интернет-магазин продуктов!',
      content: 'Пользуюсь уже год. Цены приемлемые, качество на высоте. Очень удобное приложение, легко найти нужные товары. Программа лояльности тоже радует - накопила уже много баллов.',
      likes: 31,
      verified: true,
      orderNumber: '12343',
      helpful: 25,
      images: []
    },
    {
      id: 4,
      author: 'Дмитрий Козлов',
      rating: 3,
      date: '2024-01-08',
      title: 'Средне',
      content: 'Заказывал несколько раз. Качество продуктов нормальное, но доставка иногда задерживается. Один раз привезли помятые фрукты, но быстро заменили.',
      likes: 8,
      verified: true,
      orderNumber: '12342',
      helpful: 5,
      images: []
    },
    {
      id: 5,
      author: 'Ольга Морозова',
      rating: 5,
      date: '2024-01-05',
      title: 'Спасибо за качество!',
      content: 'Очень довольна! Заказываю для всей семьи. Детское питание всегда свежее, молочные продукты отличного качества. Поддержка клиентов работает быстро и решает все вопросы.',
      likes: 19,
      verified: true,
      orderNumber: '12341',
      helpful: 16,
      images: []
    },
    {
      id: 6,
      author: 'Александр Волков',
      rating: 4,
      date: '2024-01-03',
      title: 'Рекомендую',
      content: 'Удобный сайт, широкий ассортимент. Особенно нравится возможность выбрать время доставки. Цены конкурентные. Иногда бывают технические сбои на сайте, но редко.',
      likes: 12,
      verified: true,
      orderNumber: '12340',
      helpful: 9,
      images: []
    }
  ];

  const renderStars = (rating: number, size: string = 'w-4 h-4') => {
    return (
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${size} ${
              star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

  const filteredReviews = reviews.filter(review => {
    const matchesRating = selectedRating === 'all' || review.rating.toString() === selectedRating;
    const matchesSearch = searchQuery === '' || 
      review.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.author.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRating && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Award className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Отзывы покупателей</h1>
            <p className="text-xl text-yellow-100 mb-8">
              Узнайте, что думают наши клиенты о качестве продуктов и сервисе
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">{overallStats.averageRating}</div>
                <div className="flex justify-center mb-2">
                  {renderStars(Math.round(overallStats.averageRating), 'w-5 h-5')}
                </div>
                <div className="text-sm text-yellow-100">Средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{overallStats.totalReviews.toLocaleString()}</div>
                <div className="text-sm text-yellow-100">Всего отзывов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rating Distribution */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Распределение оценок</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {overallStats.ratingDistribution.map((item) => (
                    <div key={item.stars} className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2 w-20">
                        <span className="text-sm font-medium">{item.stars}</span>
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      </div>
                      <div className="flex-1 bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-yellow-400 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                      <div className="text-sm text-gray-600 w-16 text-right">
                        {item.count} ({item.percentage}%)
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Поиск по отзывам..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Rating Filter */}
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <select
                  value={selectedRating}
                  onChange={(e) => setSelectedRating(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="all">Все оценки</option>
                  <option value="5">5 звезд</option>
                  <option value="4">4 звезды</option>
                  <option value="3">3 звезды</option>
                  <option value="2">2 звезды</option>
                  <option value="1">1 звезда</option>
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-gray-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-md px-3 py-2"
                >
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                  <option value="highest">Высокие оценки</option>
                  <option value="lowest">Низкие оценки</option>
                  <option value="helpful">Самые полезные</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600">
                Показано {filteredReviews.length} из {reviews.length} отзывов
              </p>
            </div>

            <div className="space-y-6">
              {filteredReviews.map((review) => (
                <Card key={review.id}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                          <Users className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <div className="flex items-center space-x-2">
                            <h3 className="font-semibold">{review.author}</h3>
                            {review.verified && (
                              <Badge className="bg-green-100 text-green-800 text-xs">
                                Проверенная покупка
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            <span>{new Date(review.date).toLocaleDateString('ru-RU')}</span>
                            <span>•</span>
                            <span>Заказ #{review.orderNumber}</span>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        {renderStars(review.rating)}
                        <div className="text-sm text-gray-600 mt-1">
                          {review.rating}/5
                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-lg font-semibold mb-2">{review.title}</h4>
                      <p className="text-gray-700 leading-relaxed">{review.content}</p>
                    </div>

                    {review.images && review.images.length > 0 && (
                      <div className="mb-4">
                        <div className="flex space-x-2">
                          {review.images.map((image, index) => (
                            <div key={index} className="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center">
                              <Image className="w-8 h-8 text-gray-400" />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-green-600 transition-colors">
                          <ThumbsUp className="w-4 h-4" />
                          <span className="text-sm">Полезно ({review.helpful})</span>
                        </button>
                        <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors">
                          <MessageCircle className="w-4 h-4" />
                          <span className="text-sm">Ответить</span>
                        </button>
                      </div>
                      <div className="text-sm text-gray-500">
                        {review.likes} человек считают отзыв полезным
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredReviews.length === 0 && (
              <div className="text-center py-12">
                <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Отзывы не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить фильтры или поисковый запрос</p>
              </div>
            )}

            {/* Load More */}
            {filteredReviews.length > 0 && (
              <div className="text-center mt-8">
                <Button variant="outline" size="lg">
                  Показать еще отзывы
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Write Review */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Оставить отзыв</CardTitle>
                <p className="text-center text-gray-600">
                  Поделитесь своим опытом с другими покупателями
                </p>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваша оценка *</label>
                    <div className="flex space-x-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="p-1"
                        >
                          <Star className="w-8 h-8 text-gray-300 hover:text-yellow-400 transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Заголовок отзыва *</label>
                    <Input placeholder="Краткое описание вашего опыта" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Ваш отзыв *</label>
                    <Textarea 
                      placeholder="Расскажите подробно о вашем опыте покупки..." 
                      rows={5}
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Номер заказа (необязательно)</label>
                    <Input placeholder="Для подтверждения покупки" />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy-review" className="rounded" required />
                    <label htmlFor="privacy-review" className="text-sm text-gray-600">
                      Согласен с публикацией отзыва и обработкой персональных данных
                    </label>
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Почему нам доверяют</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Проверенные отзывы</h3>
                <p className="text-gray-600">Все отзывы проходят модерацию и проверку на подлинность</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Реальные покупатели</h3>
                <p className="text-gray-600">Отзывы оставляют только клиенты, совершившие покупку</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Высокий рейтинг</h3>
                <p className="text-gray-600">Средняя оценка 4.7 из 5 на основе тысяч отзывов</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;