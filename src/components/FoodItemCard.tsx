import React from 'react';
import { Plus, Star, Minus } from 'lucide-react';
import { FoodItem } from '../types';

interface FoodItemCardProps {
  item: FoodItem;
  quantity: number;
  onAdd: (item: FoodItem) => void;
  onRemove: (itemId: string) => void;
}

const FoodItemCard: React.FC<FoodItemCardProps> = ({ 
  item, 
  quantity, 
  onAdd, 
  onRemove 
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-48 object-cover"
        />
        {item.popular && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
        )}
        <div className={`absolute top-3 right-3 w-4 h-4 rounded-full ${
          item.isVeg ? 'bg-green-500' : 'bg-red-500'
        }`}>
          <div className={`w-2 h-2 rounded-full ${
            item.isVeg ? 'bg-green-600' : 'bg-red-600'
          } absolute top-1 left-1`}></div>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{item.name}</h3>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-medium">{item.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">{item.description}</p>
        
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${item.price}</span>
          
          {quantity === 0 ? (
            <button
              onClick={() => onAdd(item)}
              className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors duration-200"
            >
              <Plus className="h-4 w-4" />
              <span>Add</span>
            </button>
          ) : (
            <div className="flex items-center space-x-3 bg-orange-500 rounded-lg px-3 py-2">
              <button
                onClick={() => onRemove(item.id)}
                className="text-white hover:bg-orange-600 rounded p-1 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-white font-semibold">{quantity}</span>
              <button
                onClick={() => onAdd(item)}
                className="text-white hover:bg-orange-600 rounded p-1 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;