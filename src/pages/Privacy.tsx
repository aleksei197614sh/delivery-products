import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database,
  UserCheck,
  Settings,
  AlertTriangle,
  CheckCircle,
  Phone,
  Mail,
  FileText,
  Users
} from 'lucide-react';

const Privacy = () => {
  const dataTypes = [
    {
      type: 'Персональные данные',
      icon: <UserCheck className="w-5 h-5" />,
      examples: ['Имя, фамилия', 'Номер телефона', 'Email адрес', 'Дата рождения'],
      purpose: 'Для оформления заказов и связи с клиентами'
    },
    {
      type: 'Адресные данные',
      icon: <Database className="w-5 h-5" />,
      examples: ['Адрес доставки', 'Рабочий адрес', 'Почтовый индекс'],
      purpose: 'Для осуществления доставки заказов'
    },
    {
      type: 'Платежная информация',
      icon: <Lock className="w-5 h-5" />,
      examples: ['Данные карты (зашифрованы)', 'История платежей', 'Способы оплаты'],
      purpose: 'Для обработки платежей и возвратов'
    },
    {
      type: 'Поведенческие данные',
      icon: <Eye className="w-5 h-5" />,
      examples: ['История заказов', 'Просмотренные товары', 'Предпочтения'],
      purpose: 'Для персонализации предложений'
    }
  ];

  const rights = [
    {
      right: 'Право на информацию',
      description: 'Вы имеете право знать, какие данные мы собираем и как их используем'
    },
    {
      right: 'Право на доступ',
      description: 'Вы можете запросить копию всех ваших персональных данных'
    },
    {
      right: 'Право на исправление',
      description: 'Вы можете исправить неточные или неполные данные'
    },
    {
      right: 'Право на удаление',
      description: 'Вы можете запросить удаление ваших персональных данных'
    },
    {
      right: 'Право на ограничение',
      description: 'Вы можете ограничить обработку ваших данных'
    },
    {
      right: 'Право на возражение',
      description: 'Вы можете возразить против обработки данных для маркетинга'
    }
  ];

  const securityMeasures = [
    'SSL-шифрование для защиты передачи данных',
    'Двухфакторная аутентификация для сотрудников',
    'Регулярное резервное копирование данных',
    'Ограниченный доступ к персональным данным',
    'Регулярные аудиты безопасности',
    'Соответствие стандартам PCI DSS для платежных данных'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Политика конфиденциальности</h1>
            <p className="text-xl text-purple-100 mb-8">
              Мы серьезно относимся к защите ваших персональных данных и соблюдаем 
              все требования законодательства РФ
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-sm">
                Последнее обновление: 15 декабря 2024 года
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6">Введение</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    ООО "ФрешМаркет" (далее - "Компания", "мы") обязуется защищать 
                    конфиденциальность персональных данных пользователей нашего 
                    интернет-магазина freshmarket.ru.
                  </p>
                  <p>
                    Настоящая Политика конфиденциальности описывает, какую информацию 
                    мы собираем, как мы ее используем, храним и защищаем в соответствии 
                    с Федеральным законом "О персональных данных" № 152-ФЗ.
                  </p>
                  <p>
                    Используя наш сайт, вы соглашаетесь с условиями данной политики 
                    конфиденциальности.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Collection */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Какие данные мы собираем</h2>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            {dataTypes.map((item, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="text-purple-600">
                      {item.icon}
                    </div>
                    <span>{item.type}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Примеры данных:</h4>
                      <ul className="space-y-1">
                        {item.examples.map((example, i) => (
                          <li key={i} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                            <span className="text-gray-600">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">Цель сбора:</h4>
                      <p className="text-gray-600">{item.purpose}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How We Use Data */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Как мы используем ваши данные</h2>
            <Card>
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Основные цели:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Обработка и выполнение заказов</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Связь с клиентами по вопросам заказов</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Предоставление клиентской поддержки</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Обработка платежей и возвратов</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Дополнительные цели:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Персонализация предложений</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Улучшение качества сервиса</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Маркетинговые коммуникации (с согласия)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span>Аналитика и статистика</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ваши права</h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {rights.map((item, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{item.right}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Безопасность данных</h2>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-3">
                  <Lock className="w-6 h-6 text-purple-600" />
                  <span>Меры защиты</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-6">
                  Мы применяем современные технические и организационные меры 
                  для защиты ваших персональных данных:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {securityMeasures.map((measure, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <Shield className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{measure}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cookies */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Использование cookies</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Мы используем файлы cookie для улучшения работы сайта и 
                    персонализации вашего опыта использования.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-semibold mb-2">Необходимые</h3>
                      <p className="text-sm text-gray-600">
                        Обеспечивают базовую функциональность сайта
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Аналитические</h3>
                      <p className="text-sm text-gray-600">
                        Помогают понять, как посетители используют сайт
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Маркетинговые</h3>
                      <p className="text-sm text-gray-600">
                        Используются для персонализации рекламы
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700">
                    Вы можете управлять настройками cookie в своем браузере или 
                    через настройки на нашем сайте.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Data Retention */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Хранение данных</h2>
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Мы храним ваши персональные данные только в течение времени, 
                    необходимого для достижения целей их обработки:
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Database className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">Данные аккаунта</h3>
                        <p className="text-gray-600">Хранятся до удаления аккаунта пользователем</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Database className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">История заказов</h3>
                        <p className="text-gray-600">Хранится 3 года для налогового учета</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Database className="w-5 h-5 text-purple-600 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold">Маркетинговые данные</h3>
                        <p className="text-gray-600">Удаляются при отзыве согласия</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-yellow-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                      Изменения в политике
                    </h3>
                    <div className="text-yellow-700 space-y-2">
                      <p>
                        Мы можем обновлять данную политику конфиденциальности. 
                        О существенных изменениях мы уведомим вас по email или 
                        через уведомления на сайте.
                      </p>
                      <p>
                        Рекомендуем периодически просматривать эту страницу для 
                        ознакомления с актуальной версией политики.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Вопросы о конфиденциальности?</h2>
            <p className="text-xl text-purple-100 mb-8">
              Свяжитесь с нашим специалистом по защите данных
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Phone className="w-5 h-5" />
                <span>8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Mail className="w-5 h-5" />
                <span>privacy@freshmarket.ru</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;