import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import Restaurant from './models/Restaurant.js';
import FoodItem from './models/FoodItem.js';
import Category from './models/Category.js';
import User from './models/User.js';

const seedData = async () => {
  try {
    console.log('MONGODB_URI:', process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI);
    
    // Clear existing data
    await Restaurant.deleteMany({});
    await FoodItem.deleteMany({});
    await Category.deleteMany({});
    await User.deleteMany({});

    // Create a sample restaurant owner
    const owner = new User({
      name: 'Praveen Telukala',
      email: 'praveentelukala55@gmail.com',
      password: 'praveen@2203',
      phone: '+1234567890',
      role: 'restaurant_owner'
    });
    await owner.save();

    // Seed categories
    const categories = [
      {
        name: 'Pizza',
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
      },
      {
        name: 'Burger',
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
      },
      {
        name: 'Chinese',
        image: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
      },
      {
        name: 'Indian',
        image: 'https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
      },
      {
        name: 'Thai',
        image: 'https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
      },
      {
        name: 'Desserts',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=2'
      }
    ];

    const createdCategories = await Category.insertMany(categories);

    // Seed restaurants
    const restaurants = [
      {
        name: 'Pizza Palace',
        description: 'Authentic Italian pizzas with fresh ingredients',
        image: 'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
        cuisine: ['Italian', 'Pizza'],
        rating: 4.3,
        totalRatings: 150,
        deliveryTime: '25-30 mins',
        deliveryFee: 2.5,
        minOrder: 15,
        featured: true,
        owner: owner._id,
        address: {
          street: '123 Main St',
          city: 'New York',
          state: 'NY',
          zipCode: '10001'
        }
      },
      {
        name: 'Burger Junction',
        description: 'Gourmet burgers made with premium ingredients',
        image: 'https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
        cuisine: ['American', 'Burgers'],
        rating: 4.1,
        totalRatings: 89,
        deliveryTime: '20-25 mins',
        deliveryFee: 1.5,
        minOrder: 12,
        featured: false,
        owner: owner._id,
        address: {
          street: '456 Oak Ave',
          city: 'New York',
          state: 'NY',
          zipCode: '10002'
        }
      },
      {
        name: 'Spice Garden',
        description: 'Traditional Indian cuisine with authentic spices',
        image: 'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&dpr=2',
        cuisine: ['Indian', 'Curry'],
        rating: 4.5,
        totalRatings: 203,
        deliveryTime: '30-35 mins',
        deliveryFee: 3.0,
        minOrder: 20,
        featured: true,
        owner: owner._id,
        address: {
          street: '789 Spice Rd',
          city: 'New York',
          state: 'NY',
          zipCode: '10003'
        }
      }
    ];

    const createdRestaurants = await Restaurant.insertMany(restaurants);

    // Seed food items
    const foodItems = [
      {
        name: 'Margherita Pizza',
        description: 'Classic pizza with fresh tomato sauce, mozzarella cheese, and basil',
        price: 14.99,
        image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
        category: 'Pizza',
        restaurant: createdRestaurants[0]._id,
        isVeg: true,
        rating: 4.4,
        totalRatings: 45,
        popular: true
      },
      {
        name: 'Pepperoni Pizza',
        description: 'Delicious pizza topped with pepperoni slices and melted cheese',
        price: 16.99,
        image: 'https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
        category: 'Pizza',
        restaurant: createdRestaurants[0]._id,
        isVeg: false,
        rating: 4.2,
        totalRatings: 38,
        popular: false
      },
      {
        name: 'Classic Cheeseburger',
        description: 'Juicy beef patty with cheese, lettuce, tomato, and special sauce',
        price: 12.99,
        image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
        category: 'Burger',
        restaurant: createdRestaurants[1]._id,
        isVeg: false,
        rating: 4.3,
        totalRatings: 52,
        popular: true
      },
      {
        name: 'Butter Chicken',
        description: 'Creamy tomato-based curry with tender chicken pieces',
        price: 18.99,
        image: 'https://images.pexels.com/photos/2474658/pexels-photo-2474658.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
        category: 'Indian',
        restaurant: createdRestaurants[2]._id,
        isVeg: false,
        rating: 4.5,
        totalRatings: 67,
        popular: true
      }
    ];

    await FoodItem.insertMany(foodItems);

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
