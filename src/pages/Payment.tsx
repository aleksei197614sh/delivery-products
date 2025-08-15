import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  CreditCard, 
  Smartphone, 
  Banknote, 
  Shield, 
  CheckCircle,
  AlertTriangle,
  Clock,
  Lock,
  Zap,
  Gift,
  Percent,
  Phone,
  Mail
} from 'lucide-react';

const Payment = () => {
  const paymentMethods = [
    {
      id: 'cards',
      title: 'Банковские карты',
      icon: <CreditCard className="w-8 h-8" />,
      description: 'Visa, MasterCard, МИР',
      features: ['Мгновенная оплата', 'Возврат на карту', '3D Secure защита'],
      commission: 'Без комиссии',
      processingTime: 'Мгновенно',
      color: 'bg-blue-500',
      popular: true
    },
    {
      id: 'sbp',
      title: 'Система быстрых платежей',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'Оплата через СБП',
      features: ['Оплата по QR-коду', 'Через мобильный банк', 'Без комиссии'],
      commission: 'Без комиссии',
      processingTime: 'Мгновенно',
      color: 'bg-green-500',
      popular: false
    },
    {
      id: 'cash',
      title: 'Наличными при получении',
      icon: <Banknote className="w-8 h-8" />,
      description: 'Оплата курьеру',
      features: ['Без предоплаты', 'Проверка товара', 'Сдача с любой суммы'],
      commission: 'Без комиссии',
      processingTime: 'При получении',
      color: 'bg-orange-500',
      popular: false,
      limit: 'До 5000 ₽'
    },
    {
      id: 'wallets',
      title: 'Электронные кошельки',
      icon: <Smartphone className="w-8 h-8" />,
      description: 'ЮMoney, QIWI, WebMoney',
      features: ['Быстрая оплата', 'Кэшбэк от кошелька', 'История платежей'],
      commission: 'Без комиссии',
      processingTime: 'Мгновенно',
      color: 'bg-purple-500',
      popular: false
    },
    {
      id: 'installments',
      title: 'Рассрочка',
      icon: <Percent className="w-8 h-8" />,
      description: 'Оплата частями',
      features: ['Без переплат', 'На 3-12 месяцев', 'Одобрение за минуту'],
      commission: 'Без комиссии',
      processingTime: '1-2 минуты',
      color: 'bg-indigo-500',
      popular: false,
      limit: 'От 3000 ₽'
    },
    {
      id: 'points',
      title: 'Бонусные баллы',
      icon: <Gift className="w-8 h-8" />,
      description: 'Оплата баллами лояльности',
      features: ['До 50% от суммы', '1 балл = 1 рубль', 'Накопление баллов'],
      commission: 'Без комиссии',
      processingTime: 'Мгновенно',
      color: 'bg-pink-500',
      popular: false
    }
  ];

  const securityFeatures = [
    {
      title: 'SSL-шифрование',
      description: 'Все данные передаются по защищенному соединению',
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: '3D Secure',
      description: 'Дополнительная защита карточных платежей',
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: 'PCI DSS',
      description: 'Соответствие международным стандартам безопасности',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: 'Токенизация',
      description: 'Данные карт не хранятся на наших серверах',
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const paymentSteps = [
    {
      step: 1,
      title: 'Выберите товары',
      description: 'Добавьте нужные товары в корзину'
    },
    {
      step: 2,
      title: 'Оформите заказ',
      description: 'Укажите адрес доставки и контактные данные'
    },
    {
      step: 3,
      title: 'Выберите способ оплаты',
      description: 'Выберите удобный для вас способ оплаты'
    },
    {
      step: 4,
      title: 'Подтвердите платеж',
      description: 'Следуйте инструкциям для завершения оплаты'
    }
  ];

  const faqItems = [
    {
      question: 'Безопасно ли платить картой на сайте?',
      answer: 'Да, мы используем современные технологии шифрования и соответствуем международным стандартам безопасности PCI DSS.'
    },
    {
      question: 'Можно ли вернуть деньги?',
      answer: 'Да, при возврате товара деньги возвращаются тем же способом, которым была произведена оплата, в течение 3-5 рабочих дней.'
    },
    {
      question: 'Есть ли комиссия за оплату?',
      answer: 'Мы не взимаем комиссию за оплату любым из предложенных способов. Комиссия может взиматься вашим банком или платежной системой.'
    },
    {
      question: 'Что делать, если платеж не прошел?',
      answer: 'Проверьте данные карты и наличие средств. Если проблема сохраняется, обратитесь в службу поддержки или попробуйте другой способ оплаты.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <CreditCard className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Способы оплаты</h1>
            <p className="text-xl text-green-100 mb-8">
              Выберите удобный способ оплаты из множества доступных вариантов
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <Shield className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">100% безопасно</div>
              </div>
              <div className="text-center">
                <Zap className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">Мгновенная оплата</div>
              </div>
              <div className="text-center">
                <CheckCircle className="w-8 h-8 mx-auto mb-2" />
                <div className="text-sm">Без комиссии</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Доступные способы оплаты</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paymentMethods.map((method) => (
              <Card key={method.id} className="relative hover:shadow-lg transition-shadow">
                {method.popular && (
                  <Badge className="absolute -top-2 -right-2 bg-red-500">
                    Популярный
                  </Badge>
                )}
                <CardHeader>
                  <div className={`w-16 h-16 ${method.color} rounded-lg flex items-center justify-center mx-auto mb-4 text-white`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-center text-xl">{method.title}</CardTitle>
                  <p className="text-center text-gray-600">{method.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Особенности:</h4>
                      <ul className="space-y-1">
                        {method.features.map((feature, index) => (
                          <li key={index} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-semibold">Комиссия:</div>
                        <div className="text-gray-600">{method.commission}</div>
                      </div>
                      <div>
                        <div className="font-semibold">Обработка:</div>
                        <div className="text-gray-600">{method.processingTime}</div>
                      </div>
                    </div>
                    
                    {method.limit && (
                      <div className="p-3 bg-yellow-50 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <AlertTriangle className="w-4 h-4 text-yellow-600" />
                          <span className="text-sm text-yellow-800">Лимит: {method.limit}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How to Pay */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как оплатить заказ</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {paymentSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">{step.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Безопасность платежей</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {securityFeatures.map((feature, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-green-600">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Card className="bg-green-50 border-green-200">
                <CardContent className="p-6">
                  <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Гарантия безопасности</h3>
                  <p className="text-gray-700">
                    Мы гарантируем полную безопасность ваших платежных данных. 
                    Все транзакции защищены современными технологиями шифрования 
                    и соответствуют международным стандартам безопасности.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                  <p className="text-gray-700">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Refund Policy */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Политика возврата средств</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Сроки возврата</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Банковские карты</div>
                          <div className="text-sm text-gray-600">3-5 рабочих дней</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Электронные кошельки</div>
                          <div className="text-sm text-gray-600">1-3 рабочих дня</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="w-5 h-5 text-blue-600" />
                        <div>
                          <div className="font-medium">Наличные</div>
                          <div className="text-sm text-gray-600">При следующем заказе</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Условия возврата</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Возврат на тот же способ оплаты</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Полная сумма заказа</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Без дополнительных комиссий</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">Уведомление о возврате</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Нужна помощь с оплатой?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Наша служба поддержки поможет решить любые вопросы с оплатой
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Phone className="w-5 h-5" />
                <span>8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Mail className="w-5 h-5" />
                <span>payment@freshmarket.ru</span>
              </div>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              Поддержка по вопросам оплаты работает круглосуточно
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payment;