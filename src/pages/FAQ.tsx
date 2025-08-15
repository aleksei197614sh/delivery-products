import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  Search,
  ChevronDown,
  ChevronUp,
  ShoppingCart,
  Truck,
  CreditCard,
  User,
  Settings,
  HelpCircle,
  Phone,
  Mail
} from 'lucide-react';

const FAQ = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [expandedItems, setExpandedItems] = useState<number[]>([]);

  const categories = [
    { id: 'all', name: 'Все вопросы', icon: <HelpCircle className="w-4 h-4" />, count: 28 },
    { id: 'orders', name: 'Заказы', icon: <ShoppingCart className="w-4 h-4" />, count: 8 },
    { id: 'delivery', name: 'Доставка', icon: <Truck className="w-4 h-4" />, count: 6 },
    { id: 'payment', name: 'Оплата', icon: <CreditCard className="w-4 h-4" />, count: 5 },
    { id: 'account', name: 'Аккаунт', icon: <User className="w-4 h-4" />, count: 4 },
    { id: 'technical', name: 'Технические', icon: <Settings className="w-4 h-4" />, count: 5 }
  ];

  const faqItems = [
    {
      id: 1,
      category: 'orders',
      question: 'Как оформить заказ на сайте?',
      answer: 'Для оформления заказа: 1) Выберите товары в каталоге и добавьте их в корзину. 2) Перейдите в корзину и нажмите "Оформить заказ". 3) Укажите адрес доставки и контактные данные. 4) Выберите способ оплаты и подтвердите заказ. После оформления вы получите SMS с номером заказа.'
    },
    {
      id: 2,
      category: 'orders',
      question: 'Можно ли изменить или отменить заказ?',
      answer: 'Да, вы можете изменить или отменить заказ в течение 30 минут после оформления через личный кабинет или по телефону 8 (800) 123-45-67. После начала сборки заказа изменения невозможны.'
    },
    {
      id: 3,
      category: 'orders',
      question: 'Какой минимальный размер заказа?',
      answer: 'Минимальный размер заказа составляет 500 рублей. При заказе от 1500 рублей доставка бесплатная в пределах МКАД.'
    },
    {
      id: 4,
      category: 'delivery',
      question: 'В какие районы осуществляется доставка?',
      answer: 'Мы доставляем по Москве и Московской области. Зоны доставки: центр города (бесплатно от 1500₽), ближние районы (бесплатно от 2000₽), дальние районы (бесплатно от 2500₽), пригород (бесплатно от 3000₽).'
    },
    {
      id: 5,
      category: 'delivery',
      question: 'Сколько времени занимает доставка?',
      answer: 'Стандартная доставка: 2-4 часа. Экспресс-доставка: 1-2 часа (стоимость 299₽). Доставка на следующий день: заказ до 22:00, доставка с 10:00 до 18:00.'
    },
    {
      id: 6,
      category: 'delivery',
      question: 'Можно ли выбрать время доставки?',
      answer: 'Да, при оформлении заказа вы можете выбрать удобный временной интервал: 09:00-12:00, 12:00-15:00, 15:00-18:00, 18:00-21:00, 21:00-23:00.'
    },
    {
      id: 7,
      category: 'payment',
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем: банковские карты (Visa, MasterCard, МИР), наличные при получении (до 5000₽), оплату через СБП, электронные кошельки (ЮMoney, QIWI).'
    },
    {
      id: 8,
      category: 'payment',
      question: 'Безопасна ли оплата картой на сайте?',
      answer: 'Да, все платежи защищены SSL-сертификатом и обрабатываются через защищенные платежные системы. Мы не храним данные ваших карт на наших серверах.'
    },
    {
      id: 9,
      category: 'payment',
      question: 'Можно ли оплатить заказ частично баллами?',
      answer: 'Да, участники программы лояльности могут оплатить до 50% стоимости заказа накопленными баллами. 1 балл = 1 рубль скидки.'
    },
    {
      id: 10,
      category: 'account',
      question: 'Как зарегистрироваться на сайте?',
      answer: 'Нажмите "Регистрация" в правом верхнем углу сайта, укажите email и пароль. Подтвердите регистрацию по ссылке в письме. Также можно зарегистрироваться при оформлении первого заказа.'
    },
    {
      id: 11,
      category: 'account',
      question: 'Как восстановить пароль?',
      answer: 'На странице входа нажмите "Забыли пароль?", введите ваш email. Мы отправим ссылку для восстановления пароля на указанную почту.'
    },
    {
      id: 12,
      category: 'account',
      question: 'Как работает программа лояльности?',
      answer: 'За каждые 100₽ покупки вы получаете 1 балл. Баллы можно тратить на скидки: 1 балл = 1₽. Также есть уровни: Серебряный (от 5000₽), Золотой (от 15000₽), Платиновый (от 50000₽) с дополнительными привилегиями.'
    },
    {
      id: 13,
      category: 'technical',
      question: 'Сайт работает медленно, что делать?',
      answer: 'Попробуйте: очистить кэш браузера, отключить блокировщики рекламы, проверить скорость интернета, попробовать другой браузер. Если проблема сохраняется, обратитесь в техподдержку.'
    },
    {
      id: 14,
      category: 'technical',
      question: 'Не приходят SMS-уведомления',
      answer: 'Проверьте правильность указанного номера телефона в личном кабинете. SMS могут задерживаться до 15 минут. Если SMS не приходят, обратитесь в поддержку.'
    },
    {
      id: 15,
      category: 'orders',
      question: 'Что делать, если товар закончился после оформления заказа?',
      answer: 'Мы свяжемся с вами и предложим замену на аналогичный товар или исключим позицию из заказа с пересчетом стоимости. Вы также можете отменить весь заказ.'
    },
    {
      id: 16,
      category: 'orders',
      question: 'Можно ли заказать товары в подарок?',
      answer: 'Да, при оформлении заказа укажите в комментариях, что это подарок. Мы можем добавить поздравительную открытку и красивую упаковку (услуга платная).'
    },
    {
      id: 17,
      category: 'delivery',
      question: 'Что делать, если меня не будет дома во время доставки?',
      answer: 'Вы можете: изменить время доставки в личном кабинете, указать другой адрес, попросить оставить заказ соседям или консьержу, перенести доставку на другой день.'
    },
    {
      id: 18,
      category: 'delivery',
      question: 'Доставляете ли вы в офисы?',
      answer: 'Да, мы доставляем в офисы в рабочее время с 9:00 до 18:00. При заказе укажите название компании, этаж и контактное лицо для получения.'
    },
    {
      id: 19,
      category: 'payment',
      question: 'Выдаете ли вы чеки?',
      answer: 'Да, мы выдаем фискальные чеки. При оплате картой чек отправляется на email. При оплате наличными курьер выдает бумажный чек.'
    },
    {
      id: 20,
      category: 'technical',
      question: 'Есть ли мобильное приложение?',
      answer: 'Да, наше мобильное приложение доступно в App Store и Google Play. В приложении доступны все функции сайта плюс push-уведомления о статусе заказа.'
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const filteredItems = faqItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Часто задаваемые вопросы</h1>
            <p className="text-xl text-green-100 mb-8">
              Найдите ответы на самые популярные вопросы о нашем сервисе
            </p>
            
            {/* Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Поиск по вопросам..."
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

      {/* FAQ Items */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-gray-600">
                Найдено {filteredItems.length} вопросов
                {selectedCategory !== 'all' && ` в категории "${categories.find(c => c.id === selectedCategory)?.name}"`}
              </p>
            </div>

            <div className="space-y-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardHeader 
                    className="cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleExpanded(item.id)}
                  >
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg font-semibold text-left">
                        {item.question}
                      </CardTitle>
                      {expandedItems.includes(item.id) ? (
                        <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </CardHeader>
                  
                  {expandedItems.includes(item.id) && (
                    <CardContent className="pt-0">
                      <div className="border-t pt-4">
                        <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-12">
                <HelpCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-600 mb-2">Ничего не найдено</h3>
                <p className="text-gray-500 mb-6">
                  Попробуйте изменить поисковый запрос или выберите другую категорию
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                    }}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                  >
                    Показать все вопросы
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Не нашли ответ на свой вопрос?</h2>
            <p className="text-xl text-green-100 mb-8">
              Наша служба поддержки готова помочь вам 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Phone className="w-5 h-5" />
                <span>8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Mail className="w-5 h-5" />
                <span>support@freshmarket.ru</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;