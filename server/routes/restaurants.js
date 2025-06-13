import express from 'express';
import Restaurant from '../models/Restaurant.js';
import FoodItem from '../models/FoodItem.js';

const router = express.Router();

// Get all restaurants
router.get('/', async (req, res) => {
  try {
    const { cuisine, rating, featured, search } = req.query;
    let query = { isActive: true };

    if (cuisine) {
      query.cuisine = { $in: [cuisine] };
    }

    if (rating) {
      query.rating = { $gte: parseFloat(rating) };
    }

    if (featured === 'true') {
      query.featured = true;
    }

    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { cuisine: { $in: [new RegExp(search, 'i')] } }
      ];
    }

    const restaurants = await Restaurant.find(query)
      .populate('owner', 'name email')
      .sort({ featured: -1, rating: -1 });

    res.json(restaurants);
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get restaurant by ID
router.get('/:id', async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id)
      .populate('owner', 'name email');
    
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json(restaurant);
  } catch (error) {
    console.error('Error fetching restaurant:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get restaurant menu
router.get('/:id/menu', async (req, res) => {
  try {
    const { category } = req.query;
    let query = { restaurant: req.params.id, isAvailable: true };

    if (category) {
      query.category = category;
    }

    const menuItems = await FoodItem.find(query)
      .populate('restaurant', 'name')
      .sort({ popular: -1, rating: -1 });

    res.json(menuItems);
  } catch (error) {
    console.error('Error fetching menu:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;