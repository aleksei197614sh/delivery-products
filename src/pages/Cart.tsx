import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  Gift, 
  Truck,
  CreditCard,
  MapPin,
  Clock,
  Tag,
  ArrowRight,
  Heart
} from 'lucide-react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Яблоки Гала',
      price: 189,
      quantity: 2,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=200',
      unit: 'кг',
      inStock: true,
      discount: 15
    },
    {
      id: 2,
      name: 'Молоко 3.2% 1л',
      price: 85,
      quantity: 3,
      image: 'https://images.pexels.com/photos/236010/pexels-photo-236010.jpeg?auto=compress&cs=tinysrgb&w=200',
      unit: 'шт',
      inStock: true,
      discount: 0
    },
    {
      id: 3,
      name: 'Хлеб бородинский',
      price: 65,
      quantity: 1,
      image: 'https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?auto=compress&cs=tinysrgb&w=200',
      unit: 'шт',
      inStock: true,
      discount: 0
    },
    {
      id: 4,
      name: 'Куриная грудка',
      price: 320,
      quantity: 1,
      image: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=200',
      unit: 'кг',
      inStock: false,
      discount: 20
    }
  ]);

  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [selectedDelivery, setSelectedDelivery] = useState('standard');
  const [selectedPayment, setSelectedPayment] = useState('card');

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyPromoCode = () => {
    // Simulate promo code application
    if (promoCode === 'SAVE10') {
      setAppliedPromo({ code: 'SAVE10', discount: 10, type: 'percentage' });
    } else if (promoCode === 'FREE200') {
      setAppliedPromo({ code: 'FREE200', discount: 200, type: 'fixed' });
    }
  };

  const subtotal = cartItems.reduce((sum, item) => {
    const itemPrice = item.discount > 0 ? item.price * (1 - item.discount / 100) : item.price;
    return sum + (itemPrice * item.quantity);
  }, 0);

  const deliveryCost = selectedDelivery === 'express' ? 299 : (subtotal >= 1500 ? 0 : 199);
  const promoDiscount = appliedPromo ? 
    (appliedPromo.type === 'percentage' ? subtotal * appliedPromo.discount / 100 : appliedPromo.discount) : 0;
  const total = subtotal + deliveryCost - promoDiscount;

  const deliveryOptions = [
    {
      id: 'standard',
      name: 'Стандартная доставка',
      time: '2-4 часа',
      price: subtotal >= 1500 ? 0 : 199,
      description: 'Бесплатно от 1500 ₽'
    },
    {
      id: 'express',
      name: 'Экспресс-доставка',
      time: '1-2 часа',
      price: 299,
      description: 'Приоритетная обработка'
    },
    {
      id: 'scheduled',
      name: 'Доставка на завтра',
      time: 'Завтра 10:00-18:00',
      price: subtotal >= 1000 ? 0 : 149,
      description: 'Бесплатно от 1000 ₽'
    }
  ];

  const paymentMethods = [
    { id: 'card', name: 'Банковская карта', icon: <CreditCard className="w-5 h-5" /> },
    { id: 'cash', name: 'Наличными при получении', icon: <Gift className="w-5 h-5" /> },
    { id: 'sbp', name: 'Система быстрых платежей', icon: <CreditCard className="w-5 h-5" /> }
  ];

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Корзина пуста</h2>
          <p className="text-gray-600 mb-8">Добавьте товары из каталога, чтобы оформить заказ</p>
          <Button size="lg">
            Перейти в каталог
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Корзина</h1>
          <p className="text-gray-600">{cartItems.length} товаров в корзине</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{item.name}</h3>
                          {!item.inStock && (
                            <Badge variant="secondary" className="mt-1">
                              Нет в наличии
                            </Badge>
                          )}
                          {item.discount > 0 && (
                            <Badge className="mt-1 bg-red-500">
                              -{item.discount}%
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center space-x-2">
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => {/* Add to favorites */}}
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => removeItem(item.id)}
                            className="text-red-600 hover:text-red-700"
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={!item.inStock}
                          >
                            <Minus className="w-4 h-4" />
                          </Button>
                          <span className="font-medium min-w-[3rem] text-center">
                            {item.quantity} {item.unit}
                          </span>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={!item.inStock}
                          >
                            <Plus className="w-4 h-4" />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          {item.discount > 0 ? (
                            <div>
                              <div className="text-sm text-gray-500 line-through">
                                {(item.price * item.quantity).toLocaleString()} ₽
                              </div>
                              <div className="text-lg font-bold text-green-600">
                                {(item.price * (1 - item.discount / 100) * item.quantity).toLocaleString()} ₽
                              </div>
                            </div>
                          ) : (
                            <div className="text-lg font-bold">
                              {(item.price * item.quantity).toLocaleString()} ₽
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Promo Code */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <Tag className="w-5 h-5 text-gray-400" />
                  <div className="flex-1 flex space-x-2">
                    <Input
                      placeholder="Введите промокод"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                    />
                    <Button onClick={applyPromoCode}>Применить</Button>
                  </div>
                </div>
                {appliedPromo && (
                  <div className="mt-3 p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-green-800">
                        Промокод {appliedPromo.code} применен
                      </span>
                      <span className="text-green-600 font-semibold">
                        -{appliedPromo.type === 'percentage' ? `${appliedPromo.discount}%` : `${appliedPromo.discount} ₽`}
                      </span>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle>Ваш заказ</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Order Summary */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Товары ({cartItems.length})</span>
                    <span>{subtotal.toLocaleString()} ₽</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Доставка</span>
                    <span>{deliveryCost === 0 ? 'Бесплатно' : `${deliveryCost} ₽`}</span>
                  </div>
                  {appliedPromo && (
                    <div className="flex justify-between text-green-600">
                      <span>Скидка по промокоду</span>
                      <span>-{promoDiscount.toLocaleString()} ₽</span>
                    </div>
                  )}
                  <hr />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Итого</span>
                    <span>{total.toLocaleString()} ₽</span>
                  </div>
                </div>

                {/* Delivery Options */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Truck className="w-4 h-4 mr-2" />
                    Способ доставки
                  </h4>
                  <div className="space-y-2">
                    {deliveryOptions.map((option) => (
                      <label key={option.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="delivery"
                          value={option.id}
                          checked={selectedDelivery === option.id}
                          onChange={(e) => setSelectedDelivery(e.target.value)}
                          className="text-green-600"
                        />
                        <div className="flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <div className="font-medium">{option.name}</div>
                              <div className="text-sm text-gray-600">{option.time}</div>
                              <div className="text-xs text-gray-500">{option.description}</div>
                            </div>
                            <div className="text-sm font-medium">
                              {option.price === 0 ? 'Бесплатно' : `${option.price} ₽`}
                            </div>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Delivery Address */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    Адрес доставки
                  </h4>
                  <div className="p-3 border rounded-lg">
                    <div className="font-medium">Дом</div>
                    <div className="text-sm text-gray-600">г. Москва, ул. Примерная, д. 123, кв. 45</div>
                    <Button size="sm" variant="outline" className="mt-2">
                      Изменить адрес
                    </Button>
                  </div>
                </div>

                {/* Delivery Time */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    Время доставки
                  </h4>
                  <select className="w-full p-2 border rounded-lg">
                    <option>Как можно скорее</option>
                    <option>15:00 - 18:00</option>
                    <option>18:00 - 21:00</option>
                    <option>21:00 - 23:00</option>
                  </select>
                </div>

                {/* Payment Method */}
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Способ оплаты
                  </h4>
                  <div className="space-y-2">
                    {paymentMethods.map((method) => (
                      <label key={method.id} className="flex items-center space-x-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                        <input
                          type="radio"
                          name="payment"
                          value={method.id}
                          checked={selectedPayment === method.id}
                          onChange={(e) => setSelectedPayment(e.target.value)}
                          className="text-green-600"
                        />
                        <div className="flex items-center space-x-2">
                          {method.icon}
                          <span>{method.name}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Order Button */}
                <Button className="w-full" size="lg">
                  Оформить заказ
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                {/* Additional Info */}
                <div className="text-xs text-gray-500 space-y-1">
                  <p>• Нажимая "Оформить заказ", вы соглашаетесь с условиями использования</p>
                  <p>• Мы свяжемся с вами для подтверждения заказа</p>
                  <p>• Время доставки может варьироваться в зависимости от загруженности</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;