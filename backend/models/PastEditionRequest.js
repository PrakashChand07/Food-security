const mongoose = require('mongoose');

const PastEditionRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  organisation: { type: String },
  phone: { type: String },
  message: { type: String },
  eventYear: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('PastEditionRequest', PastEditionRequestSchema);
