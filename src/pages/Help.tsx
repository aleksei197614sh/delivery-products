import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Phone, 
  Mail, 
  MessageCircle, 
  Clock, 
  Search,
  HelpCircle,
  FileText,
  Truck,
  CreditCard,
  ShoppingCart,
  User,
  Settings,
  AlertCircle,
  CheckCircle,
  Send
} from 'lucide-react';

const Help = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const helpCategories = [
    { id: 'all', name: 'Все вопросы', icon: <HelpCircle className="w-5 h-5" />, count: 45 },
    { id: 'orders', name: 'Заказы', icon: <ShoppingCart className="w-5 h-5" />, count: 12 },
    { id: 'delivery', name: 'Доставка', icon: <Truck className="w-5 h-5" />, count: 8 },
    { id: 'payment', name: 'Оплата', icon: <CreditCard className="w-5 h-5" />, count: 6 },
    { id: 'account', name: 'Аккаунт', icon: <User className="w-5 h-5" />, count: 9 },
    { id: 'technical', name: 'Технические', icon: <Settings className="w-5 h-5" />, count: 10 }
  ];

  const popularQuestions = [
    {
      question: 'Как оформить заказ?',
      answer: 'Выберите товары в каталоге, добавьте их в корзину, укажите адрес доставки и способ оплаты.',
      category: 'orders'
    },
    {
      question: 'Сколько стоит доставка?',
      answer: 'Стоимость доставки зависит от зоны. Бесплатная доставка при заказе от 1500 рублей.',
      category: 'delivery'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату картой онлайн, наличными при получении и через СБП.',
      category: 'payment'
    },
    {
      question: 'Можно ли изменить заказ после оформления?',
      answer: 'Да, вы можете изменить заказ в течение 30 минут после оформления через личный кабинет.',
      category: 'orders'
    },
    {
      question: 'Как отследить заказ?',
      answer: 'Номер для отслеживания придет в SMS. Также можете отследить заказ в личном кабинете.',
      category: 'delivery'
    },
    {
      question: 'Что делать, если товар не подошел?',
      answer: 'Вы можете вернуть товар в течение 24 часов после получения согласно нашей политике возврата.',
      category: 'orders'
    }
  ];

  const contactMethods = [
    {
      title: 'Телефон горячей линии',
      description: '8 (800) 123-45-67',
      subtitle: 'Бесплатно по России, круглосуточно',
      icon: <Phone className="w-6 h-6" />,
      action: 'Позвонить',
      color: 'bg-green-500'
    },
    {
      title: 'Онлайн-чат',
      description: 'Мгновенные ответы',
      subtitle: 'Среднее время ответа: 2 минуты',
      icon: <MessageCircle className="w-6 h-6" />,
      action: 'Открыть чат',
      color: 'bg-blue-500'
    },
    {
      title: 'Email поддержка',
      description: 'support@freshmarket.ru',
      subtitle: 'Ответим в течение 2 часов',
      icon: <Mail className="w-6 h-6" />,
      action: 'Написать',
      color: 'bg-purple-500'
    }
  ];

  const filteredQuestions = popularQuestions.filter(q => 
    (selectedCategory === 'all' || q.category === selectedCategory) &&
    (searchQuery === '' || q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
     q.answer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Центр поддержки</h1>
            <p className="text-xl text-blue-100 mb-8">
              Мы готовы помочь вам 24/7. Найдите ответы на вопросы или свяжитесь с нами
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Поиск по базе знаний..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-white text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Способы связи</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${method.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {method.icon}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-semibold mb-2">{method.description}</p>
                  <p className="text-gray-600 mb-4">{method.subtitle}</p>
                  <Button className="w-full">{method.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {helpCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
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

          {/* Questions */}
          <div className="max-w-4xl mx-auto space-y-4">
            {filteredQuestions.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <HelpCircle className="w-4 h-4 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                      <p className="text-gray-600">{item.answer}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredQuestions.length === 0 && (
            <div className="text-center py-12">
              <AlertCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Ничего не найдено</h3>
              <p className="text-gray-500">Попробуйте изменить поисковый запрос или выберите другую категорию</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Не нашли ответ?</h2>
              <p className="text-gray-600">Задайте свой вопрос, и мы ответим в течение 2 часов</p>
            </div>

            <Card>
              <CardContent className="p-6">
                <form className="space-y-4">
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
                    <label className="block text-sm font-medium mb-1">Категория вопроса</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Выберите категорию</option>
                      <option>Заказы</option>
                      <option>Доставка</option>
                      <option>Оплата</option>
                      <option>Аккаунт</option>
                      <option>Технические вопросы</option>
                      <option>Другое</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Ваш вопрос *</label>
                    <Textarea 
                      placeholder="Опишите ваш вопрос подробно..." 
                      rows={5}
                      required 
                    />
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy" className="rounded" required />
                    <label htmlFor="privacy" className="text-sm text-gray-600">
                      Согласен с обработкой персональных данных
                    </label>
                  </div>
                  
                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить вопрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Clock className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Режим работы поддержки</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Телефонная поддержка</h3>
                <p className="text-blue-100">Круглосуточно, без выходных</p>
                <p className="text-2xl font-bold">24/7</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Email и чат</h3>
                <p className="text-blue-100">Ежедневно с 8:00 до 22:00</p>
                <p className="text-2xl font-bold">8:00 - 22:00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;