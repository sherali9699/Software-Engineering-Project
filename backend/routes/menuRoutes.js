const express = require('express');
const { createMenuItem, getAllMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, adminMiddleware, createMenuItem); // Only admins can create
router.get('/', getAllMenuItems); // Public route
router.get('/:id', getMenuItemById); // Public route
router.put('/:id', authMiddleware, adminMiddleware, updateMenuItem); // Only admins can update
router.delete('/:id', authMiddleware, adminMiddleware, deleteMenuItem); // Only admins can delete

module.exports = router;
