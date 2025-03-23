const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.updateProfile = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Find user by ID
        let user = await User.findById(req.user.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Update fields if provided
        if (name) user.name = name;
        if (email) user.email = email;
        if (password) {
            user.password = await bcrypt.hash(password, 10); // Hash new password
        }

        // Save updated user
        await user.save();
        res.json({ message: 'Profile updated successfully', user });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
