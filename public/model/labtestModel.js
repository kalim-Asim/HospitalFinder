const mongoose = require('mongoose');

const labTestSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  patientEmail: { type: String, required: true },
  patientAge: {type: Number, required: true},
  patientGender: {type: String, require: true},
  test: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LabTest', labTestSchema);