import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Facebook,
  Instagram,
  Twitter,
  Youtube
} from 'lucide-react';

const Contacts = () => {
  const contactMethods = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Телефон',
      primary: '8 (800) 123-45-67',
      secondary: 'Бесплатно по России',
      description: 'Круглосуточная поддержка клиентов'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email',
      primary: 'info@freshmarket.ru',
      secondary: 'support@freshmarket.ru',
      description: 'Ответим в течение 2 часов'
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: 'Онлайн-чат',
      primary: 'Чат на сайте',
      secondary: 'Telegram: @freshmarket_bot',
      description: 'Мгновенные ответы на вопросы'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Адрес офиса',
      primary: 'г. Москва, ул. Примерная, 123',
      secondary: 'БЦ "Центральный", 15 этаж',
      description: 'Пн-Пт: 9:00-18:00'
    }
  ];

  const offices = [
    {
      city: 'Москва',
      address: 'ул. Примерная, 123',
      phone: '+7 (495) 123-45-67',
      hours: 'Пн-Пт: 9:00-18:00',
      isMain: true
    },
    {
      city: 'Санкт-Петербург',
      address: 'пр. Невский, 45',
      phone: '+7 (812) 987-65-43',
      hours: 'Пн-Пт: 9:00-18:00',
      isMain: false
    },
    {
      city: 'Екатеринбург',
      address: 'ул. Ленина, 78',
      phone: '+7 (343) 555-12-34',
      hours: 'Пн-Пт: 10:00-17:00',
      isMain: false
    },
    {
      city: 'Новосибирск',
      address: 'ул. Красный проспект, 156',
      phone: '+7 (383) 444-56-78',
      hours: 'Пн-Пт: 10:00-17:00',
      isMain: false
    }
  ];

  const socialLinks = [
    { icon: <Facebook className="w-5 h-5" />, name: 'Facebook', url: '#', color: 'hover:text-blue-600' },
    { icon: <Instagram className="w-5 h-5" />, name: 'Instagram', url: '#', color: 'hover:text-pink-600' },
    { icon: <Twitter className="w-5 h-5" />, name: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { icon: <Youtube className="w-5 h-5" />, name: 'YouTube', url: '#', color: 'hover:text-red-600' }
  ];

  const faqItems = [
    {
      question: 'Как оформить заказ?',
      answer: 'Выберите товары в каталоге, добавьте их в корзину и следуйте инструкциям для оформления заказа.'
    },
    {
      question: 'Какие способы оплаты доступны?',
      answer: 'Мы принимаем оплату картой онлайн, наличными при получении, а также через электронные кошельки.'
    },
    {
      question: 'Сколько стоит доставка?',
      answer: 'Стоимость доставки зависит от зоны. Бесплатная доставка при заказе от 1500 рублей в центре города.'
    },
    {
      question: 'Можно ли вернуть товар?',
      answer: 'Да, вы можете вернуть товар в течение 24 часов после получения, если он не подошел по качеству.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Свяжитесь с нами</h1>
            <p className="text-xl text-blue-100 mb-8">
              Мы всегда готовы помочь вам с любыми вопросами о наших продуктах и услугах
            </p>
            <div className="flex justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                <div className="flex items-center justify-center space-x-4">
                  <Clock className="w-8 h-8" />
                  <div className="text-left">
                    <div className="text-lg font-semibold">24/7</div>
                    <div className="text-sm opacity-90">Поддержка клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Способы связи</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      {method.icon}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p className="font-semibold text-gray-800">{method.primary}</p>
                    <p className="text-sm text-gray-600">{method.secondary}</p>
                    <p className="text-xs text-gray-500">{method.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Напишите нам</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Форма обратной связи</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-1">Имя *</label>
                        <Input placeholder="Ваше имя" required />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-1">Телефон</label>
                        <Input placeholder="+7 (___) ___-__-__" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Тема обращения</label>
                      <select className="w-full p-2 border border-gray-300 rounded-md">
                        <option>Выберите тему</option>
                        <option>Вопрос о заказе</option>
                        <option>Проблема с доставкой</option>
                        <option>Качество товара</option>
                        <option>Предложение о сотрудничестве</option>
                        <option>Другое</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Сообщение *</label>
                      <Textarea 
                        placeholder="Опишите ваш вопрос или предложение..." 
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
                    <Button className="w-full">
                      <Send className="w-4 h-4 mr-2" />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Быстрые ответы</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {faqItems.map((item, index) => (
                        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
                          <h4 className="font-semibold text-gray-800 mb-2">{item.question}</h4>
                          <p className="text-sm text-gray-600">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      Посмотреть все вопросы
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Мы в социальных сетях</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      {socialLinks.map((social, index) => (
                        <a
                          key={index}
                          href={social.url}
                          className={`flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50 transition-colors ${social.color}`}
                        >
                          {social.icon}
                          <span className="font-medium">{social.name}</span>
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши офисы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className={`hover:shadow-lg transition-shadow ${office.isMain ? 'ring-2 ring-blue-500' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{office.city}</CardTitle>
                    {office.isMain && (
                      <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                        Главный офис
                      </span>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 mt-0.5 text-gray-400" />
                      <span>{office.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <span>{office.hours}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как нас найти</h2>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="h-96 bg-gray-300 rounded-lg flex items-center justify-center">
                  <div className="text-center text-gray-600">
                    <MapPin className="w-12 h-12 mx-auto mb-4" />
                    <p className="text-lg font-semibold">Интерактивная карта</p>
                    <p className="text-sm">Здесь будет отображена карта с нашими офисами</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Working Hours */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Режим работы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Служба поддержки</h3>
                <div className="space-y-2">
                  <p>Понедельник - Воскресенье</p>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-blue-100">Круглосуточно</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Прием заказов</h3>
                <div className="space-y-2">
                  <p>Понедельник - Воскресенье</p>
                  <p className="text-2xl font-bold">24/7</p>
                  <p className="text-blue-100">Без выходных</p>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Офисы</h3>
                <div className="space-y-2">
                  <p>Понедельник - Пятница</p>
                  <p className="text-2xl font-bold">9:00 - 18:00</p>
                  <p className="text-blue-100">Выходные: Сб, Вс</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;