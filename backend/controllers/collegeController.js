// backend/controllers/collegeController.js

const College = require('../models/College');

const matchColleges = async (req, res) => {
    try {
        const {
            gpa,
            sat,
            act,
            major,
            locationPreference,
            financialAid,
            extracurriculars,
            campusCulture,
            diversityImportance,
            internationalSupport,
            size,
            type,
            setting,
            budget,
        } = req.body;

        // Define search criteria based on user responses
        const criteria = {
            gpaRequirement: { $lte: gpa },
            satRequirement: { $lte: sat },
            actRequirement: { $lte: act },
            majors: { $in: [major] },
            location: locationPreference,
            financialAid: financialAid,
            extracurriculars: { $in: extracurriculars || [] },
            campusCulture: { $regex: campusCulture, $options: 'i' },
            diversityImportance: diversityImportance,
            internationalSupport: internationalSupport,
            size: size,
            type: type,
            setting: setting,
            budgetRange: budget,
        };

        // Filter out undefined criteria
        Object.keys(criteria).forEach(key => {
            if (!criteria[key] || (Array.isArray(criteria[key]) && criteria[key].length === 0)) {
                delete criteria[key];
            }
        });

        // Find matching colleges
        const matchingColleges = await College.find(criteria).sort({ ranking: 1 });

        // Return the list of matching colleges
        res.json(matchingColleges);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server Error');
    }
};

module.exports = {
    matchColleges,
};
