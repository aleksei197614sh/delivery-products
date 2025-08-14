import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-xl font-bold">ФрешМаркет</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Свежие продукты с быстрой доставкой по всей России. 
              Качество, которому можно доверять.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li><Link to="/catalog" className="text-gray-300 hover:text-white">Каталог</Link></li>
              <li><Link to="/promotions" className="text-gray-300 hover:text-white">Акции</Link></li>
              <li><Link to="/delivery" className="text-gray-300 hover:text-white">Доставка</Link></li>
              <li><Link to="/payment" className="text-gray-300 hover:text-white">Оплата</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">О нас</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-white">Вакансии</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-gray-300 hover:text-white">Помощь</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-white">Частые вопросы</Link></li>
              <li><Link to="/returns" className="text-gray-300 hover:text-white">Возврат товара</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-white">Условия использования</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-white">Политика конфиденциальности</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-white">Отзывы</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">8 (800) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">info@freshmarket.ru</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Москва, ул. Примерная, 123</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-400" />
                <span className="text-gray-300">Работаем 24/7</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 ФрешМаркет. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;