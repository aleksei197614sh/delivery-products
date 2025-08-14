import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Gift, 
  Percent, 
  Clock, 
  Star, 
  Copy, 
  Check,
  Calendar,
  ShoppingCart,
  Tag,
  Zap
} from 'lucide-react';

const Promotions = () => {
  const [copiedCode, setCopiedCode] = useState('');

  const copyPromoCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(''), 2000);
  };

  const activePromotions = [
    {
      id: 1,
      title: 'Скидка 25% на первый заказ',
      description: 'Специальное предложение для новых клиентов',
      code: 'WELCOME25',
      discount: 25,
      validUntil: '2024-12-31',
      minOrder: 1000,
      category: 'new-customer',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-green-500 to-green-600'
    },
    {
      id: 2,
      title: 'Бесплатная доставка',
      description: 'При заказе от 2000 рублей',
      code: 'FREEDEL2000',
      discount: 0,
      validUntil: '2024-12-25',
      minOrder: 2000,
      category: 'delivery',
      image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-blue-500 to-blue-600'
    },
    {
      id: 3,
      title: 'Фрукты и овощи -30%',
      description: 'Скидка на все свежие фрукты и овощи',
      code: 'FRESH30',
      discount: 30,
      validUntil: '2024-12-20',
      minOrder: 500,
      category: 'category',
      image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-orange-500 to-orange-600'
    },
    {
      id: 4,
      title: 'Молочные продукты -20%',
      description: 'Скидка на всю молочную продукцию',
      code: 'MILK20',
      discount: 20,
      validUntil: '2024-12-22',
      minOrder: 800,
      category: 'category',
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-purple-500 to-purple-600'
    },
    {
      id: 5,
      title: 'Выходные скидки',
      description: '15% скидка на все товары в выходные',
      code: 'WEEKEND15',
      discount: 15,
      validUntil: '2024-12-29',
      minOrder: 1500,
      category: 'weekend',
      image: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-red-500 to-red-600'
    },
    {
      id: 6,
      title: 'Ночная доставка -50%',
      description: 'Скидка на доставку с 22:00 до 08:00',
      code: 'NIGHT50',
      discount: 50,
      validUntil: '2024-12-31',
      minOrder: 1000,
      category: 'delivery',
      image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=400',
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  const expiredPromotions = [
    {
      id: 7,
      title: 'Черная пятница -40%',
      description: 'Максимальные скидки на все товары',
      code: 'BLACKFRIDAY40',
      discount: 40,
      validUntil: '2024-11-29',
      expired: true
    },
    {
      id: 8,
      title: 'Осенние скидки -25%',
      description: 'Сезонные скидки на осенний ассортимент',
      code: 'AUTUMN25',
      discount: 25,
      validUntil: '2024-11-30',
      expired: true
    }
  ];

  const categoryIcons = {
    'new-customer': <Star className="w-5 h-5" />,
    'delivery': <ShoppingCart className="w-5 h-5" />,
    'category': <Tag className="w-5 h-5" />,
    'weekend': <Calendar className="w-5 h-5" />,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Акции и скидки</h1>
            <p className="text-xl text-red-100 mb-8">
              Экономьте на покупках с нашими специальными предложениями и промокодами
            </p>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center space-x-4">
                  <Gift className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-2xl font-bold">6</div>
                    <div className="text-sm opacity-90">Активных акций</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promo Code Input */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center flex items-center justify-center">
                  <Percent className="w-5 h-5 mr-2" />
                  Есть промокод?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-2">
                  <Input placeholder="Введите промокод" />
                  <Button>Применить</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Active Promotions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Активные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activePromotions.map((promo) => (
              <Card key={promo.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className={`h-32 bg-gradient-to-r ${promo.color} relative`}>
                  <img 
                    src={promo.image} 
                    alt={promo.title}
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="flex items-center justify-center mb-2">
                        {categoryIcons[promo.category as keyof typeof categoryIcons]}
                      </div>
                      {promo.discount > 0 && (
                        <div className="text-3xl font-bold">-{promo.discount}%</div>
                      )}
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{promo.title}</h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Промокод:</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="font-mono">
                          {promo.code}
                        </Badge>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyPromoCode(promo.code)}
                          className="p-1 h-auto"
                        >
                          {copiedCode === promo.code ? (
                            <Check className="w-4 h-4 text-green-600" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Минимальный заказ:</span>
                      <span className="font-medium">{promo.minOrder} ₽</span>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Действует до:</span>
                      <span className="font-medium flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {new Date(promo.validUntil).toLocaleDateString('ru-RU')}
                      </span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-4">
                    Использовать промокод
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Специальные предложения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Программа лояльности</h3>
                    <p className="opacity-90">Накапливайте баллы и получайте скидки</p>
                  </div>
                  <Zap className="w-12 h-12" />
                </div>
              </div>
              <CardContent className="p-6">
                <ul className="space-y-2 text-gray-600">
                  <li>• 1 балл за каждые 100 ₽ покупки</li>
                  <li>• 1 балл = 1 ₽ скидки</li>
                  <li>• Дополнительные баллы за отзывы</li>
                  <li>• Специальные предложения для участников</li>
                </ul>
                <Button className="w-full mt-4">Присоединиться</Button>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 text-white">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Подписка на скидки</h3>
                    <p className="opacity-90">Получайте уведомления о новых акциях</p>
                  </div>
                  <Gift className="w-12 h-12" />
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <Input placeholder="Ваш email" type="email" />
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="sms" className="rounded" />
                    <label htmlFor="sms" className="text-sm text-gray-600">
                      Также получать SMS-уведомления
                    </label>
                  </div>
                  <Button className="w-full">Подписаться</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expired Promotions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Завершенные акции</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expiredPromotions.map((promo) => (
              <Card key={promo.id} className="opacity-60">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold mb-1">{promo.title}</h3>
                      <p className="text-gray-600 text-sm">{promo.description}</p>
                    </div>
                    <Badge variant="secondary">Завершена</Badge>
                  </div>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>Промокод: {promo.code}</span>
                    <span>До: {new Date(promo.validUntil).toLocaleDateString('ru-RU')}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Use */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как использовать промокоды</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Добавьте товары</h3>
                <p className="text-gray-600">Выберите нужные товары и добавьте их в корзину</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Введите промокод</h3>
                <p className="text-gray-600">В корзине введите промокод в специальное поле</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Получите скидку</h3>
                <p className="text-gray-600">Скидка автоматически применится к вашему заказу</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Terms and Conditions */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Условия использования промокодов</h2>
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4 text-gray-600">
                  <p>• Промокоды действительны только в указанный период времени</p>
                  <p>• Один промокод может быть использован только один раз на один заказ</p>
                  <p>• Промокоды не суммируются с другими скидками и акциями</p>
                  <p>• Минимальная сумма заказа указана для каждого промокода отдельно</p>
                  <p>• Скидка применяется только к стоимости товаров, не включая доставку</p>
                  <p>• Компания оставляет за собой право изменять условия акций</p>
                  <p>• При возврате товара, купленного со скидкой, возвращается фактически уплаченная сумма</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Promotions;