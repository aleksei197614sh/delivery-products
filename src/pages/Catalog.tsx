import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, Filter, ShoppingCart, Star, Heart } from 'lucide-react';

const Catalog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'Все товары', count: 1500 },
    { id: 'fruits', name: 'Фрукты и овощи', count: 350 },
    { id: 'meat', name: 'Мясо и птица', count: 180 },
    { id: 'dairy', name: 'Молочные продукты', count: 220 },
    { id: 'bakery', name: 'Хлеб и выпечка', count: 120 },
    { id: 'beverages', name: 'Напитки', count: 280 },
    { id: 'frozen', name: 'Замороженные продукты', count: 150 },
    { id: 'snacks', name: 'Снеки и сладости', count: 200 },
  ];

  const products = [
    {
      id: 1,
      name: 'Яблоки Гала',
      price: 189,
      oldPrice: 220,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fruits',
      rating: 4.8,
      reviews: 124,
      discount: 15,
      inStock: true,
      organic: true
    },
    {
      id: 2,
      name: 'Молоко 3.2% 1л',
      price: 85,
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'dairy',
      rating: 4.9,
      reviews: 89,
      inStock: true,
      organic: false
    },
    {
      id: 3,
      name: 'Хлеб бородинский',
      price: 65,
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'bakery',
      rating: 4.7,
      reviews: 156,
      inStock: true,
      organic: false
    },
    {
      id: 4,
      name: 'Куриная грудка',
      price: 320,
      oldPrice: 380,
      image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'meat',
      rating: 4.6,
      reviews: 78,
      discount: 16,
      inStock: true,
      organic: false
    },
    {
      id: 5,
      name: 'Бананы',
      price: 120,
      image: 'https://images.pexels.com/photos/2872755/pexels-photo-2872755.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'fruits',
      rating: 4.5,
      reviews: 203,
      inStock: true,
      organic: true
    },
    {
      id: 6,
      name: 'Сок апельсиновый 1л',
      price: 145,
      image: 'https://images.pexels.com/photos/544961/pexels-photo-544961.jpeg?auto=compress&cs=tinysrgb&w=400',
      category: 'beverages',
      rating: 4.4,
      reviews: 67,
      inStock: false,
      organic: false
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Каталог продуктов</h1>
          <p className="text-gray-600">Выберите из более чем 1500 качественных продуктов</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Фильтры
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* Search */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <Input
                      placeholder="Поиск товаров..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Категории</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-green-100 text-green-700'
                            : 'hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <Badge variant="secondary" className="text-xs">
                            {category.count}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">Цена</h3>
                  <div className="flex gap-2">
                    <Input placeholder="От" type="number" />
                    <Input placeholder="До" type="number" />
                  </div>
                </div>

                {/* Additional Filters */}
                <div className="space-y-3">
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Только в наличии</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Со скидкой</span>
                  </label>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded" />
                    <span>Органические</span>
                  </label>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Sort and View Options */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-600">
                  Найдено: {filteredProducts.length} товаров
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">Сортировать:</span>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="popular">По популярности</SelectItem>
                    <SelectItem value="price-low">Цена: по возрастанию</SelectItem>
                    <SelectItem value="price-high">Цена: по убыванию</SelectItem>
                    <SelectItem value="rating">По рейтингу</SelectItem>
                    <SelectItem value="newest">Новинки</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.discount && (
                      <Badge className="absolute top-2 left-2 bg-red-500">
                        -{product.discount}%
                      </Badge>
                    )}
                    {product.organic && (
                      <Badge className="absolute top-2 right-2 bg-green-500">
                        ЭКО
                      </Badge>
                    )}
                    <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                      <Heart className="w-4 h-4 text-gray-400" />
                    </button>
                  </div>
                  
                  <CardContent className="p-4">
                    <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                    
                    <div className="flex items-center mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">
                          {product.rating} ({product.reviews})
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-green-600">
                          {product.price} ₽
                        </span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {product.oldPrice} ₽
                          </span>
                        )}
                      </div>
                    </div>

                    <Button 
                      className="w-full" 
                      disabled={!product.inStock}
                      variant={product.inStock ? "default" : "secondary"}
                    >
                      {product.inStock ? (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          В корзину
                        </>
                      ) : (
                        'Нет в наличии'
                      )}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                <Button variant="outline" disabled>Предыдущая</Button>
                <Button variant="outline" className="bg-green-600 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Следующая</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;