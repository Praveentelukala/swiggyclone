import { Restaurant, FoodItem, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Pizza',
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  },
  {
    id: '2',
    name: 'Burger',
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  },
  {
    id: '3',
    name: 'Chinese',
    image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  },
  {
    id: '4',
    name: 'Indian',
    image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  },
  {
    id: '5',
    name: 'Thai',
    image: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  },
  {
    id: '6',
    name: 'Desserts',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
  }
];

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Pizza Palace',
    image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    cuisine: ['Italian', 'Pizza'],
    rating: 4.3,
    deliveryTime: '25-30 mins',
    deliveryFee: 2.5,
    minOrder: 15,
    featured: true
  },
  {
    id: '2',
    name: 'Burger Junction',
    image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    cuisine: ['American', 'Burgers'],
    rating: 4.1,
    deliveryTime: '20-25 mins',
    deliveryFee: 1.5,
    minOrder: 12,
    featured: false
  },
  {
    id: '3',
    name: 'Spice Garden',
    image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    cuisine: ['Indian', 'Curry'],
    rating: 4.5,
    deliveryTime: '30-35 mins',
    deliveryFee: 3.0,
    minOrder: 20,
    featured: true
  },
  {
    id: '4',
    name: 'Dragon Wok',
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    cuisine: ['Chinese', 'Asian'],
    rating: 4.2,
    deliveryTime: '25-30 mins',
    deliveryFee: 2.0,
    minOrder: 18,
    featured: false
  },
  {
    id: '5',
    name: 'Thai Orchid',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    cuisine: ['Thai', 'Asian'],
    rating: 4.4,
    deliveryTime: '30-40 mins',
    deliveryFee: 2.5,
    minOrder: 16,
    featured: true
  },
  {
    id: '6',
    name: 'Sweet Treats',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
    cuisine: ['Desserts', 'Bakery'],
    rating: 4.6,
    deliveryTime: '15-20 mins',
    deliveryFee: 1.0,
    minOrder: 10,
    featured: false
  }
];

export const foodItems: FoodItem[] = [
  {
    id: '1',
    restaurantId: '1',
    name: 'Margherita Pizza',
    description: 'Classic pizza with fresh tomato sauce, mozzarella cheese, and basil',
    price: 14.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    category: 'Pizza',
    isVeg: true,
    rating: 4.4,
    popular: true
  },
  {
    id: '2',
    restaurantId: '1',
    name: 'Pepperoni Pizza',
    description: 'Delicious pizza topped with pepperoni slices and melted cheese',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    category: 'Pizza',
    isVeg: false,
    rating: 4.2,
    popular: false
  },
  {
    id: '3',
    restaurantId: '2',
    name: 'Classic Cheeseburger',
    description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce',
    price: 12.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    category: 'Burger',
    isVeg: false,
    rating: 4.3,
    popular: true
  },
  {
    id: '4',
    restaurantId: '3',
    name: 'Butter Chicken',
    description: 'Creamy tomato-based curry with tender chicken pieces',
    price: 18.99,
    image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    category: 'Indian',
    isVeg: false,
    rating: 4.5,
    popular: true
  },
  {
    id: '5',
    restaurantId: '4',
    name: 'Kung Pao Chicken',
    description: 'Spicy stir-fried chicken with peanuts and vegetables',
    price: 15.99,
    image: 'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    category: 'Chinese',
    isVeg: false,
    rating: 4.1,
    popular: false
  },
  {
    id: '6',
    restaurantId: '5',
    name: 'Pad Thai',
    description: 'Traditional Thai stir-fried noodles with shrimp and vegetables',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    category: 'Thai',
    isVeg: false,
    rating: 4.4,
    popular: true
  }
];