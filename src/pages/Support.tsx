import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { 
  Headphones, 
  MessageCircle, 
  Phone, 
  Mail,
  Clock,
  CheckCircle,
  AlertTriangle,
  Search,
  FileText,
  Video,
  Download,
  Monitor,
  Smartphone,
  Wifi,
  Settings,
  Bug,
  HelpCircle,
  Send,
  Zap
} from 'lucide-react';

const Support = () => {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const supportChannels = [
    {
      title: 'Онлайн-чат',
      description: 'Мгновенная помощь от наших специалистов',
      icon: <MessageCircle className="w-8 h-8" />,
      availability: 'Круглосуточно',
      responseTime: '< 2 минут',
      color: 'bg-green-500',
      action: 'Начать чат'
    },
    {
      title: 'Телефон',
      description: '8 (800) 123-45-67',
      icon: <Phone className="w-8 h-8" />,
      availability: '24/7',
      responseTime: 'Мгновенно',
      color: 'bg-blue-500',
      action: 'Позвонить'
    },
    {
      title: 'Email поддержка',
      description: 'support@freshmarket.ru',
      icon: <Mail className="w-8 h-8" />,
      availability: 'Круглосуточно',
      responseTime: '< 2 часов',
      color: 'bg-purple-500',
      action: 'Написать'
    },
    {
      title: 'Удаленная помощь',
      description: 'Помощь с настройкой через TeamViewer',
      icon: <Monitor className="w-8 h-8" />,
      availability: '9:00-21:00',
      responseTime: '< 15 минут',
      color: 'bg-orange-500',
      action: 'Подключиться'
    }
  ];

  const commonIssues = [
    {
      id: 'login',
      title: 'Проблемы со входом в аккаунт',
      description: 'Не могу войти, забыл пароль, заблокирован аккаунт',
      icon: <Settings className="w-6 h-6" />,
      category: 'Аккаунт',
      solutions: 3
    },
    {
      id: 'payment',
      title: 'Ошибки при оплате',
      description: 'Платеж не проходит, деньги списались дважды',
      icon: <AlertTriangle className="w-6 h-6" />,
      category: 'Оплата',
      solutions: 5
    },
    {
      id: 'app',
      title: 'Мобильное приложение не работает',
      description: 'Приложение зависает, не загружается, ошибки',
      icon: <Smartphone className="w-6 h-6" />,
      category: 'Приложение',
      solutions: 4
    },
    {
      id: 'website',
      title: 'Проблемы с сайтом',
      description: 'Сайт медленно загружается, ошибки 404, 500',
      icon: <Monitor className="w-6 h-6" />,
      category: 'Сайт',
      solutions: 6
    },
    {
      id: 'order',
      title: 'Вопросы по заказу',
      description: 'Статус заказа, изменение, отмена',
      icon: <FileText className="w-6 h-6" />,
      category: 'Заказы',
      solutions: 8
    },
    {
      id: 'delivery',
      title: 'Проблемы с доставкой',
      description: 'Задержка доставки, неправильный адрес',
      icon: <AlertTriangle className="w-6 h-6" />,
      category: 'Доставка',
      solutions: 7
    }
  ];

  const systemStatus = [
    { service: 'Веб-сайт', status: 'online', uptime: '99.9%' },
    { service: 'Мобильное приложение', status: 'online', uptime: '99.8%' },
    { service: 'Система оплаты', status: 'online', uptime: '99.9%' },
    { service: 'API для партнеров', status: 'maintenance', uptime: '99.5%' },
    { service: 'Служба доставки', status: 'online', uptime: '99.7%' }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': return 'text-green-600 bg-green-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'offline': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'online': return 'Работает';
      case 'maintenance': return 'Обслуживание';
      case 'offline': return 'Недоступен';
      default: return 'Неизвестно';
    }
  };

  const troubleshootingSteps = [
    {
      step: 1,
      title: 'Проверьте интернет-соединение',
      description: 'Убедитесь, что у вас стабильное подключение к интернету'
    },
    {
      step: 2,
      title: 'Очистите кэш браузера',
      description: 'Нажмите Ctrl+Shift+Del и очистите кэш и cookies'
    },
    {
      step: 3,
      title: 'Попробуйте другой браузер',
      description: 'Откройте сайт в Chrome, Firefox или Safari'
    },
    {
      step: 4,
      title: 'Отключите блокировщики рекламы',
      description: 'Временно отключите AdBlock и подобные расширения'
    },
    {
      step: 5,
      title: 'Обновите приложение',
      description: 'Проверьте наличие обновлений в App Store или Google Play'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Headphones className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Техническая поддержка</h1>
            <p className="text-xl text-indigo-100 mb-8">
              Мы готовы помочь решить любые технические проблемы 24 часа в сутки, 7 дней в неделю
            </p>
            
            {/* Quick Search */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  placeholder="Опишите вашу проблему..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-lg bg-white text-gray-800"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Channels */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Способы получить помощь</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportChannels.map((channel, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className={`w-16 h-16 ${channel.color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                    {channel.icon}
                  </div>
                  <CardTitle className="text-xl">{channel.title}</CardTitle>
                  <p className="text-gray-600">{channel.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Доступность:</span>
                      <span className="font-medium">{channel.availability}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Ответ:</span>
                      <span className="font-medium">{channel.responseTime}</span>
                    </div>
                  </div>
                  <Button className="w-full">{channel.action}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Статус системы</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Мониторинг сервисов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemStatus.map((service, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className={`w-3 h-3 rounded-full ${
                          service.status === 'online' ? 'bg-green-500' : 
                          service.status === 'maintenance' ? 'bg-yellow-500' : 'bg-red-500'
                        }`}></div>
                        <span className="font-medium">{service.service}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-sm text-gray-600">Uptime: {service.uptime}</span>
                        <Badge className={getStatusColor(service.status)}>
                          {getStatusText(service.status)}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-800">Плановое обслуживание</h4>
                      <p className="text-sm text-blue-700">
                        API для партнеров будет недоступен 16 января с 02:00 до 04:00 МСК 
                        в связи с плановым обновлением.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Частые проблемы</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonIssues.map((issue) => (
              <Card key={issue.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <div className="text-indigo-600">
                        {issue.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold">{issue.title}</h3>
                        <Badge variant="outline">{issue.category}</Badge>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{issue.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          {issue.solutions} решений
                        </span>
                        <Button size="sm" variant="outline">
                          Решить
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Troubleshooting Guide */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Самостоятельное решение проблем</h2>
            <Card>
              <CardHeader>
                <CardTitle>Пошаговое руководство</CardTitle>
                <p className="text-gray-600">
                  Попробуйте выполнить эти шаги перед обращением в поддержку
                </p>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {troubleshootingSteps.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{step.title}</h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Support Request Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Создать запрос в поддержку</h2>
              <p className="text-gray-600">
                Если не удалось решить проблему самостоятельно, создайте запрос
              </p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Форма обращения</CardTitle>
              </CardHeader>
              <CardContent>
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
                    <label className="block text-sm font-medium mb-1">Тип проблемы *</label>
                    <select 
                      className="w-full p-2 border border-gray-300 rounded-md"
                      value={selectedIssue}
                      onChange={(e) => setSelectedIssue(e.target.value)}
                      required
                    >
                      <option value="">Выберите тип проблемы</option>
                      <option value="login">Проблемы со входом</option>
                      <option value="payment">Ошибки оплаты</option>
                      <option value="app">Мобильное приложение</option>
                      <option value="website">Проблемы с сайтом</option>
                      <option value="order">Вопросы по заказу</option>
                      <option value="other">Другое</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Приоритет</label>
                    <select className="w-full p-2 border border-gray-300 rounded-md">
                      <option value="low">Низкий</option>
                      <option value="medium">Средний</option>
                      <option value="high">Высокий</option>
                      <option value="critical">Критический</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Описание проблемы *</label>
                    <Textarea 
                      placeholder="Подробно опишите проблему, укажите шаги для воспроизведения, сообщения об ошибках..." 
                      rows={5}
                      required 
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Системная информация</label>
                    <Textarea 
                      placeholder="Браузер, операционная система, версия приложения (если применимо)..." 
                      rows={3}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-1">Прикрепить файлы</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <Download className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-600">Перетащите файлы сюда или нажмите для выбора</p>
                      <p className="text-sm text-gray-500 mt-1">
                        Скриншоты, логи, видео (до 10 МБ каждый)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <input type="checkbox" id="privacy-support" className="rounded" required />
                    <label htmlFor="privacy-support" className="text-sm text-gray-600">
                      Согласен с обработкой персональных данных
                    </label>
                  </div>

                  <Button className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    Отправить запрос
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Полезные ресурсы</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">База знаний</h3>
                  <p className="text-gray-600 mb-4">
                    Подробные инструкции и ответы на частые вопросы
                  </p>
                  <Button variant="outline">Перейти</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Video className="w-12 h-12 text-red-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Видеоуроки</h3>
                  <p className="text-gray-600 mb-4">
                    Обучающие видео по использованию сервиса
                  </p>
                  <Button variant="outline">Смотреть</Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <MessageCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">Сообщество</h3>
                  <p className="text-gray-600 mb-4">
                    Форум пользователей и обмен опытом
                  </p>
                  <Button variant="outline">Присоединиться</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AlertTriangle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Критическая проблема?</h2>
            <p className="text-xl text-red-100 mb-8">
              Если проблема критически влияет на ваш бизнес, свяжитесь с нами немедленно
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Phone className="w-5 h-5" />
                <span>8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <MessageCircle className="w-5 h-5" />
                <span>Экстренный чат</span>
              </div>
            </div>
            <p className="text-sm text-red-200 mt-4">
              Экстренная поддержка доступна круглосуточно
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;