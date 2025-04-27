const { Order } = require("../models/models");

// Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
      .populate("userId", "name email") // Populate user details (optional)
      .populate("items.itemId", "name price"); // Populate item details
    res.status(200).json(orders);
  } catch (err) {
    console.error("Error fetching orders:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Create a new order
exports.createOrder = async (req, res) => {
  console.log("req.body:", req.body);

  try {
    const { userId, items, totalAmount, status, deliveryAddress } = req.body;

    // Validate input
    if (!items || items.length === 0) {
      return res.status(400).json({ message: "Invalid order data" });
    }

    // Create order
    const order = await Order.create({
      userId: userId === "guest" ? null : userId,
      items,
      totalAmount,
      status: status || "pending",
      deliveryAddress: deliveryAddress || "N/A",
    });

    res.status(201).json({ message: "Order created successfully", order });
  } catch (err) {
    console.error("Error creating order:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};