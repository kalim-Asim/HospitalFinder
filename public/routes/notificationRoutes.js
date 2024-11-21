// routes/notificationRoutes.js
const express = require('express');
const Appointment = require('../model/appointModel');
const router = express.Router();

// Endpoint to get appointments by user email
router.get('/:email/appointments', async (req, res) => {
  const { email } = req.params;

  try {
    const appointments = await Appointment.find({
      email,
      appointmentDate: { $gte: new Date() } // Only fetch future appointments
    });

    res.json(appointments);
  } catch (error) {
    console.error('Error fetching appointments:', error);
    res.status(500).json({ error: 'Server error while fetching appointments' });
  }
});

module.exports = router;
