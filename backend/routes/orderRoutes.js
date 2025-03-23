const express = require('express');
const { placeOrder, getUserOrders, getAllOrders, updateOrderStatus, cancelOrder } = require('../controllers/orderController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, placeOrder); // Only logged-in users can place orders
router.get('/', authMiddleware, getUserOrders); // Only logged-in users can see their orders
router.get('/all', authMiddleware, adminMiddleware, getAllOrders); // Only admins can see all orders
router.put('/:id/status', authMiddleware, adminMiddleware, updateOrderStatus); // Only admins can update order status
router.delete('/:id', authMiddleware, cancelOrder); // Users can cancel their own orders


module.exports = router;
