import React, { useState } from 'react';
import { MapPin, Search, ShoppingBag, User, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import LoginModal from './Auth/LoginModal';

const Header = ({ cartItemsCount, onCartClick }) => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const { user, logout, isAuthenticated } = useAuth();

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      setIsLoginModalOpen(true);
    }
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-orange-500">SwiggyClone</h1>
              </div>
            </div>

            {/* Location */}
            <div className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-500 cursor-pointer transition-colors">
              <MapPin className="h-5 w-5" />
              <span className="font-medium">New York, NY</span>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for restaurants or food..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={handleAuthClick}
                className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                {isAuthenticated ? (
                  <>
                    <User className="h-5 w-5" />
                    <span>{user?.name}</span>
                    <LogOut className="h-4 w-4" />
                  </>
                ) : (
                  <>
                    <User className="h-5 w-5" />
                    <span>Sign In</span>
                  </>
                )}
              </button>
              
              <button
                onClick={onCartClick}
                className="relative flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors"
              >
                <ShoppingBag className="h-6 w-6" />
                {cartItemsCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemsCount}
                  </span>
                )}
                <span className="hidden sm:inline">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;