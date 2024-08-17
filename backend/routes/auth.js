const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: 'User already exists' });
        }

        const newUser = new User({ firstName, lastName, email, password });
        await newUser.save();

        const token = jwt.sign({ id: newUser._id }, 'yourSecretKey', { expiresIn: '1h' });

        res.json({ token, user: { id: newUser._id, firstName, lastName, email } });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: user._id }, 'yourSecretKey', { expiresIn: '1h' });

        res.json({ token, user: { id: user._id, firstName: user.firstName, lastName: user.lastName, email } });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;
