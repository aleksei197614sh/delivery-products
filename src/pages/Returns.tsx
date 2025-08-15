import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  RotateCcw, 
  Clock, 
  CheckCircle, 
  XCircle,
  AlertTriangle,
  Phone,
  Mail,
  FileText,
  CreditCard,
  Package,
  Truck,
  Shield,
  Info
} from 'lucide-react';

const Returns = () => {
  const returnReasons = [
    { reason: 'Товар не подошел', allowed: true, timeLimit: '24 часа' },
    { reason: 'Товар поврежден при доставке', allowed: true, timeLimit: '24 часа' },
    { reason: 'Неправильный товар', allowed: true, timeLimit: '24 часа' },
    { reason: 'Истек срок годности', allowed: true, timeLimit: '24 часа' },
    { reason: 'Плохое качество', allowed: true, timeLimit: '24 часа' },
    { reason: 'Передумал покупать', allowed: false, timeLimit: '-' }
  ];

  const returnableCategories = [
    { category: 'Упакованные продукты', returnable: true, conditions: 'В оригинальной упаковке' },
    { category: 'Замороженные продукты', returnable: true, conditions: 'При сохранении холодовой цепи' },
    { category: 'Молочные продукты', returnable: true, conditions: 'В течение 12 часов' },
    { category: 'Хлебобулочные изделия', returnable: true, conditions: 'В оригинальной упаковке' },
    { category: 'Свежие овощи и фрукты', returnable: false, conditions: 'Только при браке' },
    { category: 'Мясные продукты', returnable: true, conditions: 'При соблюдении температурного режима' }
  ];

  const returnProcess = [
    {
      step: 1,
      title: 'Свяжитесь с нами',
      description: 'Позвоните по телефону 8 (800) 123-45-67 или напишите на support@freshmarket.ru в течение 24 часов после получения заказа',
      icon: <Phone className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Опишите проблему',
      description: 'Укажите номер заказа, какой товар хотите вернуть и причину возврата. При необходимости приложите фото',
      icon: <FileText className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Получите подтверждение',
      description: 'Мы рассмотрим вашу заявку и подтвердим возможность возврата в течение 2 часов',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Передайте товар курьеру',
      description: 'Курьер заберет товар при следующей доставке или по отдельному вызову (бесплатно)',
      icon: <Truck className="w-6 h-6" />
    },
    {
      step: 5,
      title: 'Получите возврат',
      description: 'Деньги вернутся на карту в течение 3-5 рабочих дней или будут зачислены на баланс аккаунта',
      icon: <CreditCard className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <RotateCcw className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Политика возврата</h1>
            <p className="text-xl text-orange-100 mb-8">
              Мы гарантируем качество наших продуктов и готовы вернуть деньги, 
              если товар вас не устроил
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6 inline-block">
              <div className="flex items-center justify-center space-x-4">
                <Clock className="w-8 h-8" />
                <div className="text-left">
                  <div className="text-2xl font-bold">24 часа</div>
                  <div className="text-sm opacity-90">на возврат товара</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Conditions */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Основные условия возврата</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Срок возврата</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Товар можно вернуть в течение 24 часов с момента получения заказа
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Package className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Состояние товара</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Товар должен быть в оригинальной упаковке и не нарушать санитарные нормы
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <CreditCard className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Возврат денег</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Деньги возвращаются на карту в течение 3-5 рабочих дней
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Return Reasons */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Причины для возврата</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {returnReasons.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {item.allowed ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-600" />
                        )}
                        <span className="font-medium">{item.reason}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant={item.allowed ? "default" : "secondary"}>
                          {item.allowed ? 'Разрешено' : 'Не разрешено'}
                        </Badge>
                        <span className="text-sm text-gray-600">{item.timeLimit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Returnable Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Категории товаров</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {returnableCategories.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {item.returnable ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <AlertTriangle className="w-5 h-5 text-yellow-600" />
                        )}
                        <div>
                          <div className="font-medium">{item.category}</div>
                          <div className="text-sm text-gray-600">{item.conditions}</div>
                        </div>
                      </div>
                      <Badge variant={item.returnable ? "default" : "secondary"}>
                        {item.returnable ? 'Возврат возможен' : 'Ограничения'}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Return Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как вернуть товар</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {returnProcess.map((step, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {step.step}
                          </div>
                          <h3 className="text-xl font-semibold">{step.title}</h3>
                        </div>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Важная информация</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Info className="w-5 h-5 mr-2 text-blue-600" />
                    Что нужно знать
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Возврат возможен только при наличии чека</li>
                    <li>• Скоропортящиеся продукты возвращаются только при браке</li>
                    <li>• Алкогольные напитки возврату не подлежат</li>
                    <li>• При возврате части заказа пересчитывается стоимость доставки</li>
                    <li>• Возврат оформляется на того, кто оплачивал заказ</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-green-600" />
                    Гарантии качества
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Все продукты проходят контроль качества</li>
                    <li>• Соблюдаем температурный режим при доставке</li>
                    <li>• Работаем только с проверенными поставщиками</li>
                    <li>• Гарантируем свежесть продуктов</li>
                    <li>• Компенсируем ущерб при нашей вине</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-orange-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна помощь с возвратом?</h2>
            <p className="text-xl text-orange-100 mb-8">
              Наша служба поддержки поможет оформить возврат быстро и без проблем
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100">
                <Phone className="w-5 h-5 mr-2" />
                8 (800) 123-45-67
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600">
                <Mail className="w-5 h-5 mr-2" />
                support@freshmarket.ru
              </Button>
            </div>
            <p className="text-sm text-orange-200 mt-4">
              Служба поддержки работает круглосуточно
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Returns;