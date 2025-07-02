import React from 'react';
import RestaurantCard from './RestaurantCard';
import { restaurants } from '../data/mockData';
import { Restaurant } from '../types';

interface RestaurantListProps {
  onRestaurantClick: (restaurant: Restaurant) => void;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ onRestaurantClick }) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">
            Restaurants near you
          </h2>
          <div className="flex space-x-4">
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Sort by</option>
              <option>Rating</option>
              <option>Delivery Time</option>
              <option>Price</option>
            </select>
            <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>All Cuisines</option>
              <option>Italian</option>
              <option>Chinese</option>
              <option>Indian</option>
              <option>Thai</option>
            </select>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              restaurant={restaurant}
              onClick={onRestaurantClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RestaurantList;