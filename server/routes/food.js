import express from 'express';
import FoodItem from '../models/FoodItem.js';

const router = express.Router();

// Get all food items
router.get('/', async (req, res) => {
  try {
    const { category, restaurant, search, popular } = req.query;
    let query = { isAvailable: true };

    if (category) {
      query.category = category;
    }

    if (restaurant) {
      query.restaurant = restaurant;
    }

    if (popular === 'true') {
      query.popular = true;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } },
        { category: { $regex: search, $options: 'i' } }
      ];
    }

    const foodItems = await FoodItem.find(query)
      .populate('restaurant', 'name image deliveryTime deliveryFee')
      .sort({ popular: -1, rating: -1 });

    res.json(foodItems);
  } catch (error) {
    console.error('Error fetching food items:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get food item by ID
router.get('/:id', async (req, res) => {
  try {
    const foodItem = await FoodItem.findById(req.params.id)
      .populate('restaurant', 'name image deliveryTime deliveryFee');
    
    if (!foodItem) {
      return res.status(404).json({ message: 'Food item not found' });
    }

    res.json(foodItem);
  } catch (error) {
    console.error('Error fetching food item:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;