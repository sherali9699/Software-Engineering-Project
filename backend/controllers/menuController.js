const { Item } = require("../models/models"); // Ensure this is correct

// Create a new menu item
exports.createMenuItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const menuItem = await Item.create({
      name,
      description,
      price: Number(price),
      image,
    });
    res.status(201).json(menuItem);
  } catch (err) {
    console.error("Error creating menu item:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


// Get all menu items
exports.getAllMenuItems = async (req, res) => {
    try {
      const menuItems = await Item.find(); // Fetch all items from MongoDB
      res.json(menuItems);
    } catch (err) {
      console.error("Error fetching menu items:", err);
      res.status(500).json({ message: "Server error", error: err.message });
    }
  };


// Delete a menu item
exports.deleteMenuItem = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    await Item.deleteOne({ _id: req.params.id });
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    console.error("Error deleting menu item:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


// Update a menu item
exports.updateMenuItem = async (req, res) => {
  try {
    const { name, description, price } = req.body;
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    // Update fields only if provided in the request
    item.name = name || item.name;
    item.description = description || item.description;
    item.price = price !== undefined ? Number(price) : item.price;

    const updatedItem = await item.save();
    res.status(200).json(updatedItem);
  } catch (err) {
    console.error("Error updating menu item:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};




// // Get all menu items
// exports.getAllMenuItems = async (req, res) => {
//     try {
//         const menuItems = await MenuItem.find();
//         res.json(menuItems);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// };

// // Get a single menu item
// exports.getMenuItemById = async (req, res) => {
//     try {
//         const menuItem = await MenuItem.findById(req.params.id);
//         if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
//         res.json(menuItem);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// };

// // Update a menu item
// exports.updateMenuItem = async (req, res) => {
//     try {
//         const menuItem = await MenuItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
//         res.json(menuItem);
//     } catch (err) {
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// };

// // Delete a menu item
// exports.deleteMenuItem = async (req, res) => {
//     try {
//         const menuItem = await MenuItem.findByIdAndDelete(req.params.id);
//         if (!menuItem) return res.status(404).json({ message: 'Menu item not found' });
//         res.json({ message: 'Menu item deleted successfully' });
//     } catch (err) {
//         res.status(500).json({ message: 'Server error', error: err.message });
//     }
// };
