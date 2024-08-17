// backend/models/College.js

const mongoose = require('mongoose');

const CollegeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    ranking: {
        type: Number,
        required: true,
    },
    majors: {
        type: [String],
        required: true,
    },
    financialAid: {
        type: Boolean,
        required: true,
    },
    gpaRequirement: {
        type: Number,
        required: true,
    },
    satRequirement: {
        type: Number,
        required: true,
    },
    actRequirement: {
        type: Number,
        required: true,
    },
    extracurriculars: {
        type: [String], // Array of extracurriculars the college values
    },
    campusCulture: {
        type: String, // Description of the campus culture
    },
    diversityImportance: {
        type: Boolean,
    },
    internationalSupport: {
        type: Boolean,
    },
    size: {
        type: String, // "Large", "Medium", "Small"
    },
    type: {
        type: String, // "Public", "Private", "Liberal Arts", "Research University"
    },
    setting: {
        type: String, // "Urban", "Suburban", "Rural"
    },
    budgetRange: {
        type: String, // e.g., "Below $20,000", "$20,000 - $40,000", etc.
    },
});

module.exports = mongoose.model('College', CollegeSchema);
