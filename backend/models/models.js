const mongoose = require("mongoose");

// User Schema
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["customer", "admin"], default: "customer" },
  createdAt: { type: Date, default: Date.now }
});

// Menu Schema
const menuSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  status: { type: String, enum: ["active", "inactive"], default: "active" }
});

// Item Schema
const itemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  //menuId: { type: mongoose.Schema.Types.ObjectId, ref: "Menu", required: true },
  image: { type: String },
  // availability: { type: Boolean, default: true }
});

// Order Schema
const orderSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [
    {
      itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
      quantity: { type: Number, required: true },
      price: { type: Number, required: true }
    }
  ],
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ["pending", "completed", "cancelled"], default: "pending" },
  orderedAt: { type: Date, default: Date.now },
  deliveryAddress: { type: String }
});

// Review Schema
const reviewSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  itemId: { type: mongoose.Schema.Types.ObjectId, ref: "Item", required: true },
  rating: { type: Number, min: 1, max: 5, required: true },
  comment: { type: String },
  createdAt: { type: Date, default: Date.now }
});

// Staff Schema
const staffSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, enum: ["chef", "cashier", "manager"], required: true },
  email: { type: String, unique: true },
  phone: { type: String }
});

// Delivery Schema
const deliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  deliveryPerson: { type: String },
  status: { type: String, enum: ["out for delivery", "delivered", "failed"], default: "out for delivery" },
  estimatedTime: { type: String }
});

// Promotion Schema
const promotionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  discountType: { type: String, enum: ["percentage", "fixed"], required: true },
  discountValue: { type: Number, required: true },
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
  active: { type: Boolean, default: true }
});

// Export all models
module.exports = {
  User: mongoose.model("User", userSchema),
  Menu: mongoose.model("Menu", menuSchema),
  Item: mongoose.model("Item", itemSchema),
  Order: mongoose.model("Order", orderSchema),
  Review: mongoose.model("Review", reviewSchema),
  Staff: mongoose.model("Staff", staffSchema),
  Delivery: mongoose.model("Delivery", deliverySchema),
  Promotion: mongoose.model("Promotion", promotionSchema)
};