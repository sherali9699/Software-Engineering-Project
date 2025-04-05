const express = require("express");
const { getAllOrders } = require("../controllers/orderController");

const router = express.Router();

// Route to fetch all orders
router.get("/", getAllOrders);

module.exports = router;