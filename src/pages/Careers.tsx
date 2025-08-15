import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp,
  Heart,
  Coffee,
  Zap,
  Award,
  DollarSign,
  Calendar,
  Send,
  Upload,
  CheckCircle,
  Star
} from 'lucide-react';

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const companyValues = [
    {
      title: 'Качество превыше всего',
      description: 'Мы стремимся к совершенству во всем, что делаем',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Команда - наша сила',
      description: 'Мы поддерживаем друг друга и растем вместе',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Инновации и развитие',
      description: 'Мы всегда ищем новые способы улучшить сервис',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Забота о клиентах',
      description: 'Счастье наших клиентов - наш главный приоритет',
      icon: <Heart className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: 'Конкурентная зарплата',
      description: 'Достойная оплата труда и регулярные пересмотры',
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: 'Медицинская страховка',
      description: 'Полис ДМС для сотрудника и семьи',
      icon: <Heart className="w-6 h-6" />
    },
    {
      title: 'Гибкий график',
      description: 'Возможность удаленной работы и гибкого графика',
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: 'Обучение и развитие',
      description: 'Корпоративные тренинги и оплата внешнего обучения',
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: 'Корпоративные мероприятия',
      description: 'Тимбилдинги, праздники и неформальное общение',
      icon: <Coffee className="w-6 h-6" />
    },
    {
      title: 'Скидки на продукты',
      description: '20% скидка на все товары в нашем магазине',
      icon: <Star className="w-6 h-6" />
    }
  ];

  const departments = [
    { id: 'all', name: 'Все отделы', count: 12 },
    { id: 'tech', name: 'IT и разработка', count: 4 },
    { id: 'logistics', name: 'Логистика', count: 3 },
    { id: 'marketing', name: 'Маркетинг', count: 2 },
    { id: 'sales', name: 'Продажи', count: 2 },
    { id: 'support', name: 'Поддержка', count: 1 }
  ];

  const vacancies = [
    {
      id: 1,
      title: 'Frontend разработчик',
      department: 'tech',
      location: 'Москва / Удаленно',
      type: 'Полная занятость',
      experience: '2-4 года',
      salary: '150 000 - 250 000 ₽',
      description: 'Разработка пользовательских интерфейсов для веб-приложения и мобильного приложения',
      requirements: ['React, TypeScript', 'HTML5, CSS3, SASS', 'Git, Webpack', 'Опыт с REST API'],
      posted: '2024-01-15',
      urgent: false
    },
    {
      id: 2,
      title: 'Backend разработчик',
      department: 'tech',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '3-5 лет',
      salary: '180 000 - 300 000 ₽',
      description: 'Разработка серверной части приложения, API и интеграций с внешними сервисами',
      requirements: ['Node.js, Python', 'PostgreSQL, Redis', 'Docker, Kubernetes', 'Микросервисная архитектура'],
      posted: '2024-01-12',
      urgent: true
    },
    {
      id: 3,
      title: 'Менеджер по логистике',
      department: 'logistics',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '2-3 года',
      salary: '80 000 - 120 000 ₽',
      description: 'Управление процессами доставки, работа с курьерскими службами и оптимизация маршрутов',
      requirements: ['Опыт в логистике', 'Знание 1С', 'Водительские права', 'Аналитическое мышление'],
      posted: '2024-01-10',
      urgent: false
    },
    {
      id: 4,
      title: 'Специалист по качеству',
      department: 'logistics',
      location: 'Москва',
      type: 'Полная занятость',
      experience: '1-2 года',
      salary: '60 000 - 90 000 ₽',
      description: 'Контроль качества поступающих товаров, работа с поставщиками',
      requirements: ['Опыт в торговле', 'Знание стандартов качества', 'Внимательность', 'Ответственность'],
      posted: '2024-01-08',
      urgent: false
    },
    {
      id: 5,
      title: 'Маркетолог',
      department: 'marketing',
      location: 'Москва / Удаленно',
      type: 'Полная занятость',
      experience: '2-4 года',
      salary: '100 000 - 150 000 ₽',
      description: 'Разработка и реализация маркетинговых кампаний, работа с digital-каналами',
      requirements: ['Digital-маркетинг', 'Google Analytics', 'SMM, контекстная реклама', 'Креативность'],
      posted: '2024-01-05',
      urgent: false
    },
    {
      id: 6,
      title: 'Курьер',
      department: 'logistics',
      location: 'Москва',
      type: 'Полная/частичная занятость',
      experience: 'Без опыта',
      salary: '50 000 - 80 000 ₽',
      description: 'Доставка заказов клиентам, работа с мобильным приложением курьера',
      requirements: ['Водительские права', 'Знание города', 'Пунктуальность', 'Клиентоориентированность'],
      posted: '2024-01-03',
      urgent: true
    }
  ];

  const filteredVacancies = vacancies.filter(vacancy => 
    selectedDepartment === 'all' || vacancy.department === selectedDepartment
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Briefcase className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Работа в ФрешМаркет</h1>
            <p className="text-xl text-purple-100 mb-8">
              Присоединяйтесь к команде лидера в сфере доставки продуктов. 
              Мы создаем будущее e-commerce вместе!
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-purple-100">Сотрудников</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">12</div>
                <div className="text-sm text-purple-100">Открытых вакансий</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.8</div>
                <div className="text-sm text-purple-100">Рейтинг работодателя</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-purple-600">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Что мы предлагаем</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-blue-600">
                        {benefit.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vacancies */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Открытые вакансии</h2>
          
          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedDepartment === dept.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <span>{dept.name}</span>
                <Badge variant="secondary" className="ml-2">
                  {dept.count}
                </Badge>
              </button>
            ))}
          </div>

          {/* Vacancies List */}
          <div className="max-w-4xl mx-auto space-y-6">
            {filteredVacancies.map((vacancy) => (
              <Card key={vacancy.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-semibold">{vacancy.title}</h3>
                        {vacancy.urgent && (
                          <Badge className="bg-red-500">Срочно</Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-gray-600 text-sm">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{vacancy.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{vacancy.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{vacancy.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(vacancy.posted).toLocaleDateString('ru-RU')}</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-green-600">{vacancy.salary}</div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{vacancy.description}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold mb-2">Требования:</h4>
                    <div className="flex flex-wrap gap-2">
                      {vacancy.requirements.map((req, index) => (
                        <Badge key={index} variant="outline">
                          {req}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Опубликовано: {new Date(vacancy.posted).toLocaleDateString('ru-RU')}
                    </div>
                    <Button>
                      Откликнуться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredVacancies.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Вакансий не найдено</h3>
              <p className="text-gray-500">В выбранном отделе сейчас нет открытых позиций</p>
            </div>
          )}
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Не нашли подходящую вакансию?</h2>
              <p className="text-gray-600">
                Отправьте нам свое резюме, и мы свяжемся с вами при появлении подходящих позиций
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Инициативная заявка</CardTitle>
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
                    <label className="block text-sm font-medium mb-1">Желаемая позиция</label>
                    <Input placeholder="Например: Frontend разработчик" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Опыт работы</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option>Выберите опыт</option>
                      <option>Без опыта</option>
                      <option>До 1 года</option>
                      <option>1-3 года</option>
                      <option>3-5 лет</option>
                      <option>Более 5 лет</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">О себе</label>
                    <Textarea 
                      placeholder="Расскажите о своем опыте, навыках и мотивации..." 
                      rows={4}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Резюме</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Перетащите файл сюда или нажмите для выбора</p>
                      <p className="text-sm text-gray-500 mt-1">PDF, DOC, DOCX до 5 МБ</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy-career" className="rounded" required />
                    <label htmlFor="privacy-career" className="text-sm text-gray-600">
                      Согласен с обработкой персональных данных
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

      {/* Company Culture */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Жизнь в компании</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Дружная команда</h3>
                <p className="text-gray-600">
                  Мы поддерживаем друг друга, делимся знаниями и растем вместе
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Карьерный рост</h3>
                <p className="text-gray-600">
                  Четкие планы развития и возможности для профессионального роста
                </p>
              </div>
              <div>
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-600">
                  Гибкий график, удаленная работа и забота о личном времени
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact HR */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Есть вопросы о работе?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Наш HR-отдел с радостью ответит на все ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Briefcase className="w-5 h-5" />
                <span>hr@freshmarket.ru</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Users className="w-5 h-5" />
                <span>Telegram: @freshmarket_hr</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;