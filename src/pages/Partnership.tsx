import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Handshake, 
  TrendingUp, 
  Users, 
  Globe,
  DollarSign,
  Truck,
  Store,
  Leaf,
  Award,
  CheckCircle,
  Phone,
  Mail,
  Send,
  Building,
  Target,
  Zap
} from 'lucide-react';

const Partnership = () => {
  const partnershipTypes = [
    {
      id: 'suppliers',
      title: 'Поставщики продуктов',
      icon: <Store className="w-8 h-8" />,
      description: 'Производители и дистрибьюторы продуктов питания',
      benefits: [
        'Стабильные объемы закупок',
        'Быстрые расчеты',
        'Маркетинговая поддержка',
        'Аналитика продаж'
      ],
      requirements: [
        'Сертификаты качества',
        'Стабильные поставки',
        'Конкурентные цены',
        'Гибкие условия'
      ],
      color: 'bg-green-500'
    },
    {
      id: 'logistics',
      title: 'Логистические партнеры',
      icon: <Truck className="w-8 h-8" />,
      description: 'Курьерские службы и транспортные компании',
      benefits: [
        'Постоянный поток заказов',
        'Прозрачная система оплаты',
        'Техническая интеграция',
        'Обучение персонала'
      ],
      requirements: [
        'Покрытие зон доставки',
        'Соблюдение SLA',
        'Страхование грузов',
        'Отслеживание заказов'
      ],
      color: 'bg-blue-500'
    },
    {
      id: 'technology',
      title: 'Технологические партнеры',
      icon: <Zap className="w-8 h-8" />,
      description: 'IT-компании и разработчики решений',
      benefits: [
        'Долгосрочные контракты',
        'Интересные проекты',
        'Техническая экспертиза',
        'Совместное развитие'
      ],
      requirements: [
        'Опыт в e-commerce',
        'Надежность решений',
        'Техническая поддержка',
        'Масштабируемость'
      ],
      color: 'bg-purple-500'
    },
    {
      id: 'franchise',
      title: 'Франчайзи',
      icon: <Building className="w-8 h-8" />,
      description: 'Развитие сети в регионах',
      benefits: [
        'Готовая бизнес-модель',
        'Маркетинговая поддержка',
        'Обучение и консультации',
        'Техническая платформа'
      ],
      requirements: [
        'Инвестиции от 2 млн ₽',
        'Опыт в ритейле',
        'Команда специалистов',
        'Помещения и склады'
      ],
      color: 'bg-orange-500'
    }
  ];

  const partnershipSteps = [
    {
      step: 1,
      title: 'Заявка',
      description: 'Заполните форму или свяжитесь с нами',
      icon: <Send className="w-6 h-6" />
    },
    {
      step: 2,
      title: 'Анализ',
      description: 'Изучаем ваше предложение и возможности',
      icon: <Target className="w-6 h-6" />
    },
    {
      step: 3,
      title: 'Переговоры',
      description: 'Обсуждаем условия сотрудничества',
      icon: <Handshake className="w-6 h-6" />
    },
    {
      step: 4,
      title: 'Договор',
      description: 'Подписываем соглашение о партнерстве',
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      step: 5,
      title: 'Запуск',
      description: 'Начинаем совместную работу',
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const currentPartners = [
    {
      name: 'Фермерское хозяйство "Зеленые поля"',
      type: 'Поставщик органических продуктов',
      since: '2020',
      description: 'Поставляет свежие овощи и фрукты высокого качества'
    },
    {
      name: 'Молочный завод "Альпийский"',
      type: 'Производитель молочной продукции',
      since: '2019',
      description: 'Натуральные молочные продукты без консервантов'
    },
    {
      name: 'Курьерская служба "Быстрая доставка"',
      type: 'Логистический партнер',
      since: '2021',
      description: 'Обеспечивает доставку в отдаленные районы'
    },
    {
      name: 'IT-компания "ТехРешения"',
      type: 'Технологический партнер',
      since: '2022',
      description: 'Разработка и поддержка мобильного приложения'
    }
  ];

  const benefits = [
    {
      title: 'Растущий рынок',
      description: 'Рынок онлайн-продаж продуктов растет на 25% в год',
      icon: <TrendingUp className="w-6 h-6" />,
      stat: '+25%'
    },
    {
      title: 'Большая аудитория',
      description: 'Более 100,000 активных покупателей ежемесячно',
      icon: <Users className="w-6 h-6" />,
      stat: '100K+'
    },
    {
      title: 'Широкое покрытие',
      description: 'Доставка в 50+ городов России',
      icon: <Globe className="w-6 h-6" />,
      stat: '50+'
    },
    {
      title: 'Высокий оборот',
      description: 'Ежемесячный оборот более 500 млн рублей',
      icon: <DollarSign className="w-6 h-6" />,
      stat: '500M+'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Handshake className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Партнерство с ФрешМаркет</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Присоединяйтесь к экосистеме лидера рынка доставки продуктов. 
              Вместе мы создаем будущее e-commerce!
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-indigo-100">Партнеров</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5 лет</div>
                <div className="text-sm text-indigo-100">На рынке</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-indigo-100">Городов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Почему выбирают нас</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-indigo-600">
                      {benefit.icon}
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-indigo-600 mb-2">{benefit.stat}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Виды партнерства</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partnershipTypes.map((type) => (
              <Card key={type.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${type.color} rounded-lg flex items-center justify-center text-white`}>
                      {type.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{type.title}</CardTitle>
                      <p className="text-gray-600">{type.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-600">Преимущества:</h4>
                      <ul className="space-y-2">
                        {type.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-600">Требования:</h4>
                      <ul className="space-y-2">
                        {type.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <Target className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Как стать партнером</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {partnershipSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-indigo-600">
                      {step.icon}
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Current Partners */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши партнеры</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {currentPartners.map((partner, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{partner.name}</h3>
                        <Badge variant="outline">С {partner.since}</Badge>
                      </div>
                      <p className="text-sm text-indigo-600 mb-2">{partner.type}</p>
                      <p className="text-gray-600 text-sm">{partner.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Стать партнером</h2>
              <p className="text-gray-600">
                Заполните форму, и мы свяжемся с вами для обсуждения возможностей сотрудничества
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Заявка на партнерство</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Имя *</label>
                      <Input placeholder="Ваше имя" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Фамилия *</label>
                      <Input placeholder="Ваша фамилия" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-1">Email *</label>
                      <Input type="email" placeholder="your@email.com" required />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Телефон *</label>
                      <Input placeholder="+7 (___) ___-__-__" required />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Название компании *</label>
                    <Input placeholder="ООО 'Ваша компания'" required />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Тип партнерства *</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md" required>
                      <option value="">Выберите тип</option>
                      <option value="suppliers">Поставщик продуктов</option>
                      <option value="logistics">Логистический партнер</option>
                      <option value="technology">Технологический партнер</option>
                      <option value="franchise">Франчайзи</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Регион работы</label>
                    <Input placeholder="Москва, Санкт-Петербург, вся Россия..." />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Описание предложения *</label>
                    <Textarea 
                      placeholder="Расскажите о вашей компании, продуктах/услугах и предложении по сотрудничеству..." 
                      rows={5}
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Ожидаемые объемы</label>
                    <Textarea 
                      placeholder="Укажите планируемые объемы поставок, количество заказов и т.д." 
                      rows={3}
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy-partnership" className="rounded" required />
                    <label htmlFor="privacy-partnership" className="text-sm text-gray-600">
                      Согласен с обработкой персональных данных и условиями сотрудничества
                    </label>
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Истории успеха</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Эко-ферма "Чистые продукты"</h3>
                      <p className="text-sm text-gray-600">Поставщик органических продуктов</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "За 2 года сотрудничества с ФрешМаркет наши продажи выросли в 5 раз. 
                    Отличная логистика и маркетинговая поддержка помогли нам выйти на новый уровень."
                  </p>
                  <div className="text-sm text-gray-500">
                    — Анна Петрова, основатель
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Truck className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Курьерская служба "Экспресс"</h3>
                      <p className="text-sm text-gray-600">Логистический партнер</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    "Партнерство с ФрешМаркет дало нам стабильный поток заказов и возможность 
                    расширить автопарк. Прозрачные условия и своевременные выплаты."
                  </p>
                  <div className="text-sm text-gray-500">
                    — Михаил Иванов, директор
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-indigo-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Готовы к сотрудничеству?</h2>
            <p className="text-xl text-indigo-100 mb-8">
              Свяжитесь с нашим отделом партнерства для обсуждения возможностей
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Phone className="w-5 h-5" />
                <span>8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Mail className="w-5 h-5" />
                <span>partners@freshmarket.ru</span>
              </div>
            </div>
            <p className="text-sm text-indigo-200 mt-4">
              Отдел партнерства работает с 9:00 до 18:00, пн-пт
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;