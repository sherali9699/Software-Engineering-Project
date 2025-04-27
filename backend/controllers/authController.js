const { User } = require("../models/models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

// User signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    // Validate role
    if (role && !["customer", "admin"].includes(role)) {
      return res.status(400).json({ message: "Invalid role specified" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already in use" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user with specified role (defaults to "customer" if not provided)
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || "customer",
    });

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error("Error signing up:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// User login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user._id, role: user.role }, SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(200).json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } });
  } catch (err) {
    console.error("Error logging in:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};