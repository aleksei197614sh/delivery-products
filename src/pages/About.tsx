import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  Award, 
  Truck, 
  Shield, 
  Heart, 
  Leaf,
  Clock,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

const About = () => {
  const stats = [
    { icon: <Users className="w-8 h-8" />, value: '10,000+', label: 'Довольных клиентов' },
    { icon: <Award className="w-8 h-8" />, value: '5', label: 'Лет на рынке' },
    { icon: <Truck className="w-8 h-8" />, value: '50+', label: 'Городов доставки' },
    { icon: <Shield className="w-8 h-8" />, value: '99.9%', label: 'Качество продуктов' },
  ];

  const values = [
    {
      icon: <Heart className="w-12 h-12 text-red-500" />,
      title: 'Забота о клиентах',
      description: 'Мы всегда ставим потребности наших клиентов на первое место и стремимся превзойти их ожидания.'
    },
    {
      icon: <Leaf className="w-12 h-12 text-green-500" />,
      title: 'Экологичность',
      description: 'Поддерживаем экологически чистое производство и предлагаем органические продукты.'
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Качество',
      description: 'Строгий контроль качества на всех этапах - от поставщика до вашего стола.'
    },
    {
      icon: <Clock className="w-12 h-12 text-purple-500" />,
      title: 'Надежность',
      description: 'Работаем круглосуточно, чтобы вы всегда могли получить свежие продукты вовремя.'
    },
  ];

  const team = [
    {
      name: 'Анна Петрова',
      position: 'Генеральный директор',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Более 10 лет опыта в ритейле и логистике'
    },
    {
      name: 'Михаил Иванов',
      position: 'Директор по качеству',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Эксперт по контролю качества продуктов питания'
    },
    {
      name: 'Елена Сидорова',
      position: 'Руководитель логистики',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Специалист по оптимизации доставки'
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">О компании ФрешМаркет</h1>
            <p className="text-xl text-green-100 mb-8">
              Мы создаем будущее продуктовых покупок, делая свежие и качественные продукты 
              доступными каждому через удобную онлайн-платформу с быстрой доставкой.
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-green-600 mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  ФрешМаркет был основан в 2019 году с простой идеей: сделать покупку 
                  продуктов питания максимально удобной и доступной для каждого.
                </p>
                <p>
                  Начав как небольшой стартап в Москве, мы быстро поняли, что люди 
                  ценят качество, удобство и надежность. За пять лет мы выросли 
                  в крупнейшую платформу доставки продуктов в России.
                </p>
                <p>
                  Сегодня мы обслуживаем более 10,000 клиентов ежедневно, работаем 
                  с лучшими поставщиками и продолжаем расширять географию доставки.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Наша история" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши ценности</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {value.icon}
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

      {/* Mission Section */}
      <section className="py-16 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Наша миссия</h2>
            <p className="text-xl text-gray-700 mb-8">
              Сделать качественные и свежие продукты доступными каждому, 
              обеспечивая удобство покупок и надежность доставки.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Качество</h3>
                  <p className="text-gray-600">Только проверенные поставщики и свежие продукты</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Удобство</h3>
                  <p className="text-gray-600">Простой заказ онлайн и быстрая доставка</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold mb-2">Доступность</h3>
                  <p className="text-gray-600">Справедливые цены и широкий ассортимент</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наша команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <Badge variant="secondary" className="mb-3">{member.position}</Badge>
                  <p className="text-gray-600">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Наши достижения</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-yellow-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Лучший сервис доставки 2023</h3>
                <p className="text-gray-600">Награда от Ассоциации интернет-торговли</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="w-12 h-12 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Сертификат качества ISO 9001</h3>
                <p className="text-gray-600">Международный стандарт управления качеством</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Leaf className="w-12 h-12 text-green-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Эко-сертификация</h3>
                <p className="text-gray-600">Подтверждение экологичности наших процессов</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
            <p className="text-xl text-green-100 mb-8">
              Есть вопросы или предложения? Мы всегда готовы к диалогу!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center">
                <Phone className="w-8 h-8 mb-2" />
                <h3 className="font-semibold mb-1">Телефон</h3>
                <p className="text-green-100">8 (800) 123-45-67</p>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="w-8 h-8 mb-2" />
                <h3 className="font-semibold mb-1">Email</h3>
                <p className="text-green-100">info@freshmarket.ru</p>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="w-8 h-8 mb-2" />
                <h3 className="font-semibold mb-1">Адрес</h3>
                <p className="text-green-100">Москва, ул. Примерная, 123</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;