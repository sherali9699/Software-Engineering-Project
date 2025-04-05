const express = require("express");
const { createMenuItem, getAllMenuItems, deleteMenuItem, updateMenuItem } = require("../controllers/menuController");
const multer = require("multer");

const router = express.Router();

// Multer setup for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Routes
router.post("/additem", upload.single("image"), createMenuItem); // POST to add an item
router.get("/", getAllMenuItems); // GET to fetch all items
router.delete("/:id", deleteMenuItem); // DELETE to remove an item by ID
router.put("/:id", updateMenuItem); // PUT to update an item by ID

module.exports = router;



// const express = require('express');
// // const { createMenuItem, getAllMenuItems, getMenuItemById, updateMenuItem, deleteMenuItem } = require('../controllers/menuController');
// const { createMenuItem } = require('../controllers/menuController'); // Import the controller functions
// //const { authMiddleware, adminMiddleware } = require('../middleware/authMiddleware');

// const router = express.Router();

// // router.post('/', authMiddleware, adminMiddleware, createMenuItem); // Only admins can create
// router.post('/additem', createMenuItem);
// // router.get('/', getAllMenuItems); // Public route
// // router.get('/:id', getMenuItemById); // Public route
// // router.put('/:id', authMiddleware, adminMiddleware, updateMenuItem); // Only admins can update
// // router.delete('/:id', authMiddleware, adminMiddleware, deleteMenuItem); // Only admins can delete

// module.exports = router;



