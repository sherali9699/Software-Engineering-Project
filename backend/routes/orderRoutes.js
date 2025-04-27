const express = require("express");
const { getAllOrders, createOrder } = require("../controllers/orderController");

const router = express.Router();

// Route to fetch all orders
router.get("/", getAllOrders);
router.post("/", createOrder);

module.exports = router;