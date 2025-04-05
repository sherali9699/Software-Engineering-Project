const express = require("express");
const { getAllUsers } = require("../controllers/userController");

const router = express.Router();

// Route to fetch all users
router.get("/", getAllUsers);

module.exports = router;