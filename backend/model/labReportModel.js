// File: model/labReportModel.js
const mongoose = require('mongoose');

const labReportSchema = new mongoose.Schema({
  patientEmail: { type: String, required: true },
  reportName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  notes: { type: String },
  uploadedBy: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('LabReport', labReportSchema);
