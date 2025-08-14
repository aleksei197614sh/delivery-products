import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount] = useState(3);
  const location = useLocation();

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'Каталог', href: '/catalog' },
    { name: 'Акции', href: '/promotions' },
    { name: 'О нас', href: '/about' },
    { name: 'Доставка', href: '/delivery' },
    { name: 'Контакты', href: '/contacts' },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-green-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>8 (800) 123-45-67</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>Доставка по всей России</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span>Работаем 24/7</span>
            <Link to="/help" className="hover:underline">Помощь</Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <ShoppingCart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-green-600">ФрешМаркет</h1>
              <p className="text-xs text-gray-500">Свежие продукты с доставкой</p>
            </div>
          </Link>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <Input
                type="text"
                placeholder="Поиск продуктов..."
                className="pl-10 pr-4 py-2 w-full"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
            </div>
            <Button className="ml-2 bg-green-600 hover:bg-green-700">
              Найти
            </Button>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            <Link to="/profile" className="hidden md:flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <User className="w-5 h-5" />
              <span>Профиль</span>
            </Link>
            
            <Link to="/cart" className="relative flex items-center space-x-1 text-gray-600 hover:text-green-600">
              <ShoppingCart className="w-5 h-5" />
              <span className="hidden md:inline">Корзина</span>
              {cartCount > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 min-w-[20px] h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </Badge>
              )}
            </Link>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex mt-4 space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`text-gray-600 hover:text-green-600 font-medium transition-colors ${
                location.pathname === item.href ? 'text-green-600 border-b-2 border-green-600' : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Mobile search */}
        <div className="md:hidden mt-4">
          <div className="relative">
            <Input
              type="text"
              placeholder="Поиск продуктов..."
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <nav className="container mx-auto px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`block py-2 text-gray-600 hover:text-green-600 font-medium ${
                  location.pathname === item.href ? 'text-green-600' : ''
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              to="/profile"
              className="block py-2 text-gray-600 hover:text-green-600 font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Профиль
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;