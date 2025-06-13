import React from 'react';
import { Star, Clock, Truck } from 'lucide-react';

const RestaurantCard = ({ restaurant, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer overflow-hidden"
      onClick={() => onClick(restaurant)}
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover"
        />
        {restaurant.featured && (
          <div className="absolute top-3 left-3 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{restaurant.name}</h3>
        <p className="text-gray-600 mb-3">{restaurant.cuisine.join(', ')}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="font-medium">{restaurant.rating}</span>
            <span>({restaurant.totalRatings})</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          
          <div className="flex items-center space-x-1">
            <Truck className="h-4 w-4" />
            <span>${restaurant.deliveryFee}</span>
          </div>
        </div>
        
        <div className="mt-3 pt-3 border-t border-gray-100">
          <p className="text-xs text-gray-500">
            Minimum order: ${restaurant.minOrder}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;