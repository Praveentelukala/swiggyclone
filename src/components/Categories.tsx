import React from 'react';
import { categories } from '../data/mockData';

const Categories: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What's on your mind?
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="flex flex-col items-center cursor-pointer group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="mt-3 text-sm md:text-base font-medium text-gray-700 group-hover:text-orange-500 transition-colors">
                {category.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;