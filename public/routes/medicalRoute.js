const express = require("express");
const routee = express.Router();
const Appointment = require("../model/appointModel"); // Import Appointment model

// Route to render medical history for a specific user by email
routee.get("/medicalhistory", async (req, res) => {
  const email = req.query.email;

  try {
    // Fetch appointments for the user with the specified email
    const appointments = await Appointment.find({ email });

    if (!appointments || appointments.length === 0) {
      return res.render("medicalhistory", { message: "No medical history found for this user." });
    }

    // Render medicalhistory page with appointments data
    res.render("medicalhistory", { appointments });
  } catch (error) {
    console.error("Error fetching medical history:", error);
    res.status(500).render("error", { message: "An error occurred while fetching medical history." });
  }
});

module.exports = routee;
