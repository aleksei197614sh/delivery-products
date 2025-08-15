import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  User, 
  Eye,
  Heart,
  Share2,
  Clock,
  Tag,
  TrendingUp,
  Coffee,
  Utensils,
  Leaf,
  ChefHat
} from 'lucide-react';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все статьи', icon: <BookOpen className="w-4 h-4" />, count: 24 },
    { id: 'recipes', name: 'Рецепты', icon: <ChefHat className="w-4 h-4" />, count: 8 },
    { id: 'healthy', name: 'Здоровое питание', icon: <Leaf className="w-4 h-4" />, count: 6 },
    { id: 'tips', name: 'Полезные советы', icon: <Coffee className="w-4 h-4" />, count: 5 },
    { id: 'trends', name: 'Тренды', icon: <TrendingUp className="w-4 h-4" />, count: 3 },
    { id: 'cooking', name: 'Кулинария', icon: <Utensils className="w-4 h-4" />, count: 2 }
  ];

  const featuredPost = {
    id: 1,
    title: '10 секретов правильного хранения продуктов',
    excerpt: 'Узнайте, как правильно хранить продукты, чтобы они дольше оставались свежими и сохраняли все полезные свойства.',
    content: 'Правильное хранение продуктов — это искусство, которое поможет вам экономить деньги и наслаждаться свежими продуктами дольше...',
    author: 'Анна Кулинарова',
    date: '2024-01-15',
    readTime: '8 мин',
    views: 1250,
    likes: 89,
    category: 'tips',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true
  };

  const blogPosts = [
    {
      id: 2,
      title: 'Зимние витамины: какие продукты выбрать',
      excerpt: 'В холодное время года особенно важно поддерживать иммунитет. Рассказываем о продуктах, богатых витаминами.',
      author: 'Доктор Здоровьев',
      date: '2024-01-12',
      readTime: '6 мин',
      views: 890,
      likes: 67,
      category: 'healthy',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 3,
      title: 'Быстрый завтрак за 15 минут: 5 рецептов',
      excerpt: 'Не хватает времени на завтрак? Мы подготовили 5 простых и быстрых рецептов для занятых людей.',
      author: 'Шеф Быстров',
      date: '2024-01-10',
      readTime: '5 мин',
      views: 1456,
      likes: 123,
      category: 'recipes',
      image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 4,
      title: 'Органические продукты: мифы и реальность',
      excerpt: 'Разбираемся, действительно ли органические продукты полезнее обычных и стоят ли они своих денег.',
      author: 'Эко Эксперт',
      date: '2024-01-08',
      readTime: '10 мин',
      views: 743,
      likes: 45,
      category: 'healthy',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 5,
      title: 'Как выбрать свежую рыбу: гид покупателя',
      excerpt: 'Полезные советы по выбору свежей рыбы в магазине. На что обратить внимание при покупке.',
      author: 'Рыбак Опытный',
      date: '2024-01-05',
      readTime: '7 мин',
      views: 567,
      likes: 34,
      category: 'tips',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 6,
      title: 'Тренды здорового питания 2024',
      excerpt: 'Какие тренды в здоровом питании будут актуальны в этом году? Обзор самых интересных направлений.',
      author: 'Тренд Вотчер',
      date: '2024-01-03',
      readTime: '9 мин',
      views: 1123,
      likes: 78,
      category: 'trends',
      image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 7,
      title: 'Домашняя паста: секреты приготовления',
      excerpt: 'Учимся готовить настоящую итальянскую пасту дома. Рецепты теста и популярных соусов.',
      author: 'Итальянский Шеф',
      date: '2024-01-01',
      readTime: '12 мин',
      views: 892,
      likes: 156,
      category: 'recipes',
      image: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const popularTags = [
    'здоровое питание', 'рецепты', 'витамины', 'завтрак', 'ужин', 
    'органические продукты', 'диета', 'кулинария', 'советы', 'тренды'
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <BookOpen className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Блог ФрешМаркет</h1>
            <p className="text-xl text-green-100 mb-8">
              Полезные статьи о продуктах, рецепты, советы по здоровому питанию 
              и кулинарные секреты от экспертов
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Поиск статей..."
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
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.icon}
                <span>{category.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Рекомендуем прочитать</h2>
            <Card className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-500">
                    Рекомендуем
                  </Badge>
                </div>
                <div className="p-8">
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredPost.date).toLocaleDateString('ru-RU')}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{featuredPost.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{featuredPost.likes}</span>
                      </div>
                    </div>
                    <Button>Читать далее</Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold">Последние статьи</h2>
              <p className="text-gray-600">
                Найдено {filteredPosts.length} статей
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative h-48">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-3 left-3">
                      {categories.find(c => c.id === post.category)?.name}
                    </Badge>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-gray-600 mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="w-3 h-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(post.date).toLocaleDateString('ru-RU')}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-3 h-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-3 line-clamp-2">{post.title}</h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 text-xs text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span>{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span>{post.likes}</span>
                        </div>
                        <button className="flex items-center space-x-1 hover:text-gray-700">
                          <Share2 className="w-3 h-3" />
                          <span>Поделиться</span>
                        </button>
                      </div>
                      <Button size="sm" variant="outline">
                        Читать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Статьи не найдены</h3>
                <p className="text-gray-500">Попробуйте изменить фильтры или поисковый запрос</p>
              </div>
            )}

            {/* Load More */}
            {filteredPosts.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" variant="outline">
                  Загрузить еще статьи
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Sidebar Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Popular Tags */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Tag className="w-5 h-5 mr-2" />
                  Популярные теги
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {popularTags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter */}
            <Card>
              <CardHeader>
                <CardTitle>Подписка на блог</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Получайте новые статьи на email первыми
                </p>
                <div className="space-y-3">
                  <Input placeholder="Ваш email" type="email" />
                  <Button className="w-full">Подписаться</Button>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card>
              <CardHeader>
                <CardTitle>Мы в соцсетях</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <a href="#" className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">VK</span>
                    </div>
                    <span>ВКонтакте</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">TG</span>
                    </div>
                    <span>Telegram</span>
                  </a>
                  <a href="#" className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm font-bold">YT</span>
                    </div>
                    <span>YouTube</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Хотите поделиться рецептом?</h2>
            <p className="text-xl text-green-100 mb-8">
              Присылайте свои рецепты и полезные советы. Лучшие материалы мы опубликуем в нашем блоге!
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Предложить статью
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;