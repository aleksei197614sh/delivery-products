import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Truck, 
  Clock, 
  MapPin, 
  CreditCard, 
  Shield, 
  Package,
  CheckCircle,
  AlertCircle,
  Calendar,
  Phone
} from 'lucide-react';

const Delivery = () => {
  const deliveryZones = [
    { zone: 'Центр города', time: '1-2 часа', price: 'Бесплатно от 1500 ₽', color: 'bg-green-500' },
    { zone: 'Ближние районы', time: '2-3 часа', price: 'Бесплатно от 2000 ₽', color: 'bg-blue-500' },
    { zone: 'Дальние районы', time: '3-4 часа', price: 'Бесплатно от 2500 ₽', color: 'bg-orange-500' },
    { zone: 'Пригород', time: '4-6 часов', price: 'Бесплатно от 3000 ₽', color: 'bg-purple-500' },
  ];

  const timeSlots = [
    '09:00 - 12:00',
    '12:00 - 15:00',
    '15:00 - 18:00',
    '18:00 - 21:00',
    '21:00 - 23:00'
  ];

  const deliverySteps = [
    {
      step: 1,
      title: 'Оформление заказа',
      description: 'Выберите товары и оформите заказ на сайте',
      icon: <Package className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Подтверждение',
      description: 'Мы свяжемся с вами для подтверждения заказа',
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Сборка заказа',
      description: 'Наши сотрудники соберут ваш заказ',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Доставка',
      description: 'Курьер доставит заказ в указанное время',
      icon: <Truck className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Доставка продуктов</h1>
            <p className="text-xl text-blue-100 mb-8">
              Быстрая и надежная доставка свежих продуктов прямо к вашей двери
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Оформить заказ
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Отследить заказ
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Zones */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Зоны доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {deliveryZones.map((zone, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-4 h-4 rounded-full ${zone.color} mb-2`}></div>
                  <CardTitle className="text-lg">{zone.zone}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{zone.time}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <CreditCard className="w-4 h-4 mr-2" />
                      <span>{zone.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как происходит доставка</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {deliverySteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-blue-600">
                    {step.icon}
                  </div>
                </div>
                <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Time Slots */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Временные интервалы</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Выберите удобное время доставки
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {timeSlots.map((slot, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-12 hover:bg-blue-50 hover:border-blue-300"
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start">
                    <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                    <div>
                      <p className="text-sm text-blue-800">
                        <strong>Важно:</strong> Время доставки может варьироваться в зависимости от загруженности курьеров и погодных условий.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Options */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Варианты доставки</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Truck className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle>Стандартная доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Доставка в течение дня</li>
                  <li>• Бесплатно от 1500 ₽</li>
                  <li>• Выбор временного интервала</li>
                  <li>• SMS-уведомления</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-green-100 text-green-800">Популярный выбор</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle>Экспресс-доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Доставка в течение 1-2 часов</li>
                  <li>• Стоимость 299 ₽</li>
                  <li>• Приоритетная обработка</li>
                  <li>• Отслеживание в реальном времени</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-orange-100 text-orange-800">Быстро</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle>Доставка на завтра</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Заказ до 22:00</li>
                  <li>• Доставка на следующий день</li>
                  <li>• Бесплатно от 1000 ₽</li>
                  <li>• Гарантированное время</li>
                </ul>
                <div className="mt-4">
                  <Badge className="bg-purple-100 text-purple-800">Планируемая</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Rules */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Условия доставки</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Что мы доставляем
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Свежие продукты питания</li>
                    <li>• Замороженные товары</li>
                    <li>• Напитки и соки</li>
                    <li>• Бытовая химия</li>
                    <li>• Товары для дома</li>
                    <li>• Детское питание</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-red-600">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    Ограничения
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Алкогольные напитки (только с 10:00 до 22:00)</li>
                    <li>• Максимальный вес заказа - 30 кг</li>
                    <li>• Доставка только по адресу</li>
                    <li>• Необходим документ при получении</li>
                    <li>• Оплата при получении до 5000 ₽</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Safety Measures */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Меры безопасности</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Санитарная обработка</h3>
              <p className="text-gray-600">
                Все курьеры используют средства индивидуальной защиты и регулярно проходят санитарную обработку
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Упаковка товаров</h3>
              <p className="text-gray-600">
                Все продукты упаковываются в специальные пакеты с соблюдением температурного режима
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Контроль качества</h3>
              <p className="text-gray-600">
                Каждый заказ проверяется на качество и комплектность перед отправкой
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Вопросы по доставке?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Наша служба поддержки работает круглосуточно и готова помочь вам
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                8 (800) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Написать в чат
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Delivery;