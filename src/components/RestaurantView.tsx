import React from 'react';
import { ArrowLeft, Star, Clock, Truck, MapPin } from 'lucide-react';
import { Restaurant } from '../types';
import { foodItems } from '../data/mockData';
import FoodItemCard from './FoodItemCard';
import { CartItem, FoodItem } from '../types';

interface RestaurantViewProps {
  restaurant: Restaurant;
  onBack: () => void;
  cartItems: CartItem[];
  onAddToCart: (item: FoodItem) => void;
  onRemoveFromCart: (itemId: string) => void;
}

const RestaurantView: React.FC<RestaurantViewProps> = ({
  restaurant,
  onBack,
  cartItems,
  onAddToCart,
  onRemoveFromCart
}) => {
  const restaurantItems = foodItems.filter(item => item.restaurantId === restaurant.id);
  
  const getItemQuantity = (itemId: string) => {
    const cartItem = cartItems.find(item => item.id === itemId);
    return cartItem ? cartItem.quantity : 0;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-orange-500 transition-colors"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back to restaurants</span>
          </button>
        </div>
      </div>

      {/* Restaurant Hero */}
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{restaurant.name}</h1>
          <p className="text-lg mb-4">{restaurant.cuisine.join(', ')}</p>
          
          <div className="flex flex-wrap items-center space-x-6 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span className="font-medium">{restaurant.rating}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Truck className="h-4 w-4" />
              <span>Delivery: ${restaurant.deliveryFee}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="h-4 w-4" />
              <span>Min order: ${restaurant.minOrder}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Menu</h2>
        
        {restaurantItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {restaurantItems.map((item) => (
              <FoodItemCard
                key={item.id}
                item={item}
                quantity={getItemQuantity(item.id)}
                onAdd={onAddToCart}
                onRemove={onRemoveFromCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No menu items available for this restaurant.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantView;