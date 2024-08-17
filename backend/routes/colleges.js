// backend/routes/colleges.js

const express = require('express');
const { matchColleges } = require('../controllers/collegeController');
const router = express.Router();

// Route to match colleges based on user input
router.post('/match', matchColleges);

module.exports = router;
