import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { 
  User, 
  MapPin, 
  Phone, 
  Mail, 
  Calendar,
  ShoppingBag,
  Heart,
  CreditCard,
  Bell,
  Shield,
  Gift,
  Star,
  Edit,
  Save,
  Package,
  Truck,
  CheckCircle
} from 'lucide-react';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'Анна Петрова',
    email: 'anna.petrova@email.com',
    phone: '+7 (999) 123-45-67',
    birthDate: '1990-05-15',
    address: 'г. Москва, ул. Примерная, д. 123, кв. 45'
  });

  const orders = [
    {
      id: '12345',
      date: '2024-01-15',
      status: 'delivered',
      total: 2450,
      items: 8,
      deliveryDate: '2024-01-16'
    },
    {
      id: '12344',
      date: '2024-01-10',
      status: 'delivered',
      total: 1890,
      items: 5,
      deliveryDate: '2024-01-11'
    },
    {
      id: '12343',
      date: '2024-01-05',
      status: 'cancelled',
      total: 3200,
      items: 12,
      deliveryDate: null
    }
  ];

  const favorites = [
    {
      id: 1,
      name: 'Яблоки Гала',
      price: 189,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: true
    },
    {
      id: 2,
      name: 'Молоко 3.2%',
      price: 85,
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: true
    },
    {
      id: 3,
      name: 'Хлеб бородинский',
      price: 65,
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=200',
      inStock: false
    }
  ];

  const addresses = [
    {
      id: 1,
      title: 'Дом',
      address: 'г. Москва, ул. Примерная, д. 123, кв. 45',
      isDefault: true
    },
    {
      id: 2,
      title: 'Работа',
      address: 'г. Москва, ул. Деловая, д. 67, офис 890',
      isDefault: false
    }
  ];

  const loyaltyInfo = {
    points: 1250,
    level: 'Золотой',
    nextLevel: 'Платиновый',
    pointsToNext: 750,
    totalSpent: 45600
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'processing': return 'bg-blue-100 text-blue-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Доставлен';
      case 'processing': return 'В обработке';
      case 'cancelled': return 'Отменен';
      default: return 'Неизвестно';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'delivered': return <CheckCircle className="w-4 h-4" />;
      case 'processing': return <Package className="w-4 h-4" />;
      case 'cancelled': return <Shield className="w-4 h-4" />;
      default: return <Package className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Личный кабинет</h1>
          <p className="text-gray-600">Управляйте своим профилем и заказами</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">{userInfo.name}</h3>
                  <p className="text-sm text-gray-600">{userInfo.email}</p>
                  <Badge className="mt-2 bg-yellow-100 text-yellow-800">
                    {loyaltyInfo.level} клиент
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Баллы:</span>
                    <span className="font-semibold">{loyaltyInfo.points}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Заказов:</span>
                    <span className="font-semibold">{orders.length}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Потрачено:</span>
                    <span className="font-semibold">{loyaltyInfo.totalSpent.toLocaleString()} ₽</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="profile" className="space-y-6">
              <TabsList className="grid w-full grid-cols-6">
                <TabsTrigger value="profile">Профиль</TabsTrigger>
                <TabsTrigger value="orders">Заказы</TabsTrigger>
                <TabsTrigger value="favorites">Избранное</TabsTrigger>
                <TabsTrigger value="addresses">Адреса</TabsTrigger>
                <TabsTrigger value="loyalty">Бонусы</TabsTrigger>
                <TabsTrigger value="settings">Настройки</TabsTrigger>
              </TabsList>

              {/* Profile Tab */}
              <TabsContent value="profile">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Личная информация</CardTitle>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        {isEditing ? (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            Сохранить
                          </>
                        ) : (
                          <>
                            <Edit className="w-4 h-4 mr-2" />
                            Редактировать
                          </>
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Имя</label>
                        <Input
                          value={userInfo.name}
                          disabled={!isEditing}
                          onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <Input
                          value={userInfo.email}
                          disabled={!isEditing}
                          onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Телефон</label>
                        <Input
                          value={userInfo.phone}
                          disabled={!isEditing}
                          onChange={(e) => setUserInfo({...userInfo, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Дата рождения</label>
                        <Input
                          type="date"
                          value={userInfo.birthDate}
                          disabled={!isEditing}
                          onChange={(e) => setUserInfo({...userInfo, birthDate: e.target.value})}
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium mb-2">Адрес</label>
                        <Input
                          value={userInfo.address}
                          disabled={!isEditing}
                          onChange={(e) => setUserInfo({...userInfo, address: e.target.value})}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Orders Tab */}
              <TabsContent value="orders">
                <Card>
                  <CardHeader>
                    <CardTitle>История заказов</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {orders.map((order) => (
                        <div key={order.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3">
                              <div className="text-lg font-semibold">Заказ #{order.id}</div>
                              <Badge className={getStatusColor(order.status)}>
                                <div className="flex items-center space-x-1">
                                  {getStatusIcon(order.status)}
                                  <span>{getStatusText(order.status)}</span>
                                </div>
                              </Badge>
                            </div>
                            <div className="text-right">
                              <div className="font-semibold">{order.total} ₽</div>
                              <div className="text-sm text-gray-600">{order.items} товаров</div>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="w-4 h-4 mr-2" />
                              Заказ: {new Date(order.date).toLocaleDateString('ru-RU')}
                            </div>
                            {order.deliveryDate && (
                              <div className="flex items-center">
                                <Truck className="w-4 h-4 mr-2" />
                                Доставлен: {new Date(order.deliveryDate).toLocaleDateString('ru-RU')}
                              </div>
                            )}
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">Повторить заказ</Button>
                              <Button size="sm" variant="outline">Подробнее</Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Favorites Tab */}
              <TabsContent value="favorites">
                <Card>
                  <CardHeader>
                    <CardTitle>Избранные товары</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {favorites.map((item) => (
                        <div key={item.id} className="border rounded-lg p-4">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-32 object-cover rounded-lg mb-3"
                          />
                          <h3 className="font-semibold mb-2">{item.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-lg font-bold text-green-600">{item.price} ₽</span>
                            <div className="flex space-x-2">
                              <Button size="sm" disabled={!item.inStock}>
                                <ShoppingBag className="w-4 h-4 mr-1" />
                                {item.inStock ? 'В корзину' : 'Нет в наличии'}
                              </Button>
                              <Button size="sm" variant="outline">
                                <Heart className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Addresses Tab */}
              <TabsContent value="addresses">
                <Card>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Адреса доставки</CardTitle>
                      <Button>
                        <MapPin className="w-4 h-4 mr-2" />
                        Добавить адрес
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {addresses.map((address) => (
                        <div key={address.id} className="border rounded-lg p-4">
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center space-x-2">
                              <h3 className="font-semibold">{address.title}</h3>
                              {address.isDefault && (
                                <Badge variant="secondary">По умолчанию</Badge>
                              )}
                            </div>
                            <div className="flex space-x-2">
                              <Button size="sm" variant="outline">Изменить</Button>
                              <Button size="sm" variant="outline">Удалить</Button>
                            </div>
                          </div>
                          <p className="text-gray-600">{address.address}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Loyalty Tab */}
              <TabsContent value="loyalty">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Программа лояльности</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Gift className="w-8 h-8 text-yellow-600" />
                          </div>
                          <div className="text-2xl font-bold">{loyaltyInfo.points}</div>
                          <div className="text-sm text-gray-600">Доступных баллов</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Star className="w-8 h-8 text-purple-600" />
                          </div>
                          <div className="text-2xl font-bold">{loyaltyInfo.level}</div>
                          <div className="text-sm text-gray-600">Текущий уровень</div>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <CreditCard className="w-8 h-8 text-blue-600" />
                          </div>
                          <div className="text-2xl font-bold">{loyaltyInfo.pointsToNext}</div>
                          <div className="text-sm text-gray-600">До {loyaltyInfo.nextLevel}</div>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <div className="flex justify-between text-sm mb-2">
                          <span>Прогресс до следующего уровня</span>
                          <span>{loyaltyInfo.points} / {loyaltyInfo.points + loyaltyInfo.pointsToNext}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full" 
                            style={{ width: `${(loyaltyInfo.points / (loyaltyInfo.points + loyaltyInfo.pointsToNext)) * 100}%` }}
                          ></div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Как использовать баллы</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold">1</span>
                          </div>
                          <span>1 балл = 1 рубль скидки</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold">%</span>
                          </div>
                          <span>Можно оплатить до 50% заказа баллами</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 font-bold">+</span>
                          </div>
                          <span>Получайте 1 балл за каждые 100 ₽ покупки</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              {/* Settings Tab */}
              <TabsContent value="settings">
                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Уведомления</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Email уведомления</h4>
                            <p className="text-sm text-gray-600">Получать уведомления о заказах на email</p>
                          </div>
                          <input type="checkbox" className="rounded" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">SMS уведомления</h4>
                            <p className="text-sm text-gray-600">Получать SMS о статусе доставки</p>
                          </div>
                          <input type="checkbox" className="rounded" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <div>
                            <h4 className="font-medium">Акции и скидки</h4>
                            <p className="text-sm text-gray-600">Уведомления о новых акциях</p>
                          </div>
                          <input type="checkbox" className="rounded" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Безопасность</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Button variant="outline" className="w-full justify-start">
                          <Shield className="w-4 h-4 mr-2" />
                          Изменить пароль
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                          <Phone className="w-4 h-4 mr-2" />
                          Двухфакторная аутентификация
                        </Button>
                        <Button variant="outline" className="w-full justify-start text-red-600 hover:text-red-700">
                          <User className="w-4 h-4 mr-2" />
                          Удалить аккаунт
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;