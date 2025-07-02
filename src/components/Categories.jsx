import React from 'react';
import { useCategories } from '../hooks/useCategories';

const Categories = () => {
  const { categories, loading, error } = useCategories();

  if (loading) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What's on your mind?
          </h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="flex flex-col items-center animate-pulse">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gray-300"></div>
                <div className="mt-3 w-16 h-4 bg-gray-300 rounded"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-red-500">Error loading categories: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What's on your mind?
        </h2>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {categories.map((category) => (
            <div
              key={category._id}
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