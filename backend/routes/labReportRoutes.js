const express = require('express');
const LabTest = require('../model/labtestModel');
const router = express.Router();

// Route for fetching lab reports by patient email
router.get('/labreports', async (req, res) => {
    const email = req.query.email; // Getting the email from query string

    if (!email) {
        return res.status(400).render('error', { message: "Email is required." });
    }

    try {
        // Fetch lab reports from the database where patientEmail matches the provided email
        const reports = await LabTest.find({ patientEmail: email });

        // If no reports are found, display an appropriate message
        if (reports.length === 0) {
            return res.render('labreports', { message: "No lab reports found for this user." });
        }

        // Render the labreports page with the list of reports
        res.render('labreports', { reports });
    } catch (error) {
        console.error("Error fetching lab reports:", error);
        // Handle errors by displaying a friendly message
        res.status(500).render('error', { message: "Error loading lab reports. Please try again later." });
    }
});

module.exports = router;
