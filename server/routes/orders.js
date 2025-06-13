import express from 'express';
import Order from '../models/Order.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

// Create new order
router.post('/', authenticateToken, async (req, res) => {
  try {
    const {
      restaurant,
      items,
      totalAmount,
      deliveryFee,
      tax,
      grandTotal,
      paymentMethod,
      deliveryAddress,
      notes
    } = req.body;

    const order = new Order({
      user: req.userId,
      restaurant,
      items,
      totalAmount,
      deliveryFee,
      tax,
      grandTotal,
      paymentMethod,
      deliveryAddress,
      notes,
      estimatedDeliveryTime: new Date(Date.now() + 30 * 60 * 1000) // 30 minutes from now
    });

    await order.save();
    
    const populatedOrder = await Order.findById(order._id)
      .populate('restaurant', 'name image')
      .populate('items.foodItem', 'name image')
      .populate('user', 'name email phone');

    res.status(201).json({
      message: 'Order placed successfully',
      order: populatedOrder
    });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get user orders
router.get('/my-orders', authenticateToken, async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId })
      .populate('restaurant', 'name image')
      .populate('items.foodItem', 'name image')
      .sort({ createdAt: -1 });

    res.json(orders);
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get order by ID
router.get('/:id', authenticateToken, async (req, res) => {
  try {
    const order = await Order.findOne({ 
      _id: req.params.id, 
      user: req.userId 
    })
    .populate('restaurant', 'name image address phone')
    .populate('items.foodItem', 'name image description')
    .populate('user', 'name email phone');

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }

    res.json(order);
  } catch (error) {
    console.error('Error fetching order:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
