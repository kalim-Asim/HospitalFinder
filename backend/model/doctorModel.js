const mongoose = require("mongoose");
require('dotenv').config();


// Define the Doctor schema
const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  phone: {
    type: String,
  },
  experience: {
    type: String,
  },
  speciality: {
    type: String,
  }
});

// Define the Doctor model
const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;
