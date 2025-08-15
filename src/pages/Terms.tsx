import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  FileText, 
  Shield, 
  Users, 
  CreditCard,
  Truck,
  AlertTriangle,
  CheckCircle,
  Scale,
  Phone,
  Mail
} from 'lucide-react';

const Terms = () => {
  const sections = [
    {
      id: 'general',
      title: 'Общие положения',
      icon: <FileText className="w-6 h-6" />,
      content: [
        'Настоящие Условия использования регулируют отношения между ООО "ФрешМаркет" и пользователями интернет-магазина freshmarket.ru.',
        'Используя наш сайт и услуги, вы соглашаетесь с данными условиями в полном объеме.',
        'Мы оставляем за собой право изменять данные условия. Изменения вступают в силу с момента публикации на сайте.',
        'Продолжение использования сайта после внесения изменений означает ваше согласие с новыми условиями.'
      ]
    },
    {
      id: 'registration',
      title: 'Регистрация и аккаунт',
      icon: <Users className="w-6 h-6" />,
      content: [
        'Для оформления заказов рекомендуется создать личный аккаунт, указав достоверную информацию.',
        'Вы несете ответственность за сохранность данных для входа в аккаунт.',
        'Запрещается передавать доступ к аккаунту третьим лицам.',
        'Мы имеем право заблокировать аккаунт при нарушении условий использования.',
        'При регистрации вы подтверждаете, что достигли возраста 18 лет.'
      ]
    },
    {
      id: 'orders',
      title: 'Оформление и выполнение заказов',
      icon: <Truck className="w-6 h-6" />,
      content: [
        'Заказ считается принятым после получения вами подтверждения по SMS или email.',
        'Мы оставляем за собой право отказать в выполнении заказа при отсутствии товара или технических проблемах.',
        'Цены на товары могут изменяться без предварительного уведомления.',
        'Стоимость заказа фиксируется на момент его подтверждения.',
        'Сроки доставки являются ориентировочными и могут изменяться в зависимости от обстоятельств.'
      ]
    },
    {
      id: 'payment',
      title: 'Оплата',
      icon: <CreditCard className="w-6 h-6" />,
      content: [
        'Оплата производится способами, указанными на сайте.',
        'При оплате картой средства списываются после подтверждения заказа.',
        'При оплате наличными расчет производится с курьером при получении заказа.',
        'В случае отмены заказа возврат средств осуществляется в течение 3-5 рабочих дней.',
        'Мы не несем ответственности за задержки в работе платежных систем.'
      ]
    },
    {
      id: 'delivery',
      title: 'Доставка',
      icon: <Truck className="w-6 h-6" />,
      content: [
        'Доставка осуществляется в пределах зон, указанных на сайте.',
        'Время доставки согласовывается с покупателем при оформлении заказа.',
        'При отсутствии покупателя по указанному адресу заказ может быть возвращен на склад.',
        'Риск случайной гибели товара переходит к покупателю в момент передачи заказа.',
        'Претензии по качеству товара принимаются в течение 24 часов после получения.'
      ]
    },
    {
      id: 'liability',
      title: 'Ответственность',
      icon: <Shield className="w-6 h-6" />,
      content: [
        'Мы несем ответственность за качество товаров и соблюдение сроков доставки.',
        'Наша ответственность ограничивается стоимостью заказа.',
        'Мы не несем ответственности за ущерб, вызванный неправильным использованием товаров.',
        'Покупатель несет ответственность за предоставление достоверной информации.',
        'Споры решаются путем переговоров, при невозможности - в судебном порядке.'
      ]
    }
  ];

  const lastUpdated = '15 декабря 2024 года';

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Scale className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl font-bold mb-6">Условия использования</h1>
            <p className="text-xl text-blue-100 mb-8">
              Правила и условия использования интернет-магазина ФрешМаркет
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 inline-block">
              <p className="text-sm">
                Последнее обновление: {lastUpdated}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Содержание</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="text-blue-600">
                    {section.icon}
                  </div>
                  <span className="font-medium">{section.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <Card key={section.id} id={section.id}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3 text-2xl">
                    <div className="text-blue-600">
                      {section.icon}
                    </div>
                    <span>{section.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <div key={pIndex} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <p className="text-gray-700 leading-relaxed">{paragraph}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
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
                      Важное уведомление
                    </h3>
                    <div className="text-yellow-700 space-y-2">
                      <p>
                        Данные условия использования являются публичной офертой в соответствии 
                        со статьей 437 Гражданского кодекса Российской Федерации.
                      </p>
                      <p>
                        Оформляя заказ на нашем сайте, вы подтверждаете, что ознакомились 
                        с условиями и согласны с ними в полном объеме.
                      </p>
                      <p>
                        Если вы не согласны с какими-либо условиями, пожалуйста, 
                        не используйте наш сайт и услуги.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Информация о компании</h2>
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">ООО "ФрешМаркет"</h3>
                    <div className="space-y-2 text-gray-600">
                      <p><strong>ИНН:</strong> 7701234567</p>
                      <p><strong>ОГРН:</strong> 1127746123456</p>
                      <p><strong>Юридический адрес:</strong> 123456, г. Москва, ул. Примерная, д. 123</p>
                      <p><strong>Фактический адрес:</strong> 123456, г. Москва, ул. Примерная, д. 123</p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Контактная информация</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Phone className="w-4 h-4 text-gray-400" />
                        <span>8 (800) 123-45-67</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>info@freshmarket.ru</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="w-4 h-4 text-gray-400" />
                        <span>legal@freshmarket.ru</span>
                      </div>
                    </div>
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
            <h2 className="text-3xl font-bold mb-6">Вопросы по условиям использования?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Наши юристы готовы ответить на ваши вопросы
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Phone className="w-5 h-5" />
                <span>8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-6 py-3">
                <Mail className="w-5 h-5" />
                <span>legal@freshmarket.ru</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Terms;