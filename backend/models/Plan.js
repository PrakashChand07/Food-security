// models/Plan.js
const mongoose = require('mongoose');

const PlanSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true }, // in rupees
  oldPrice: { type: Number, default: 0 },
  img: { type: String },
  points: { type: [String], default: [] },
}, { timestamps: true });

module.exports = mongoose.model('Plan', PlanSchema);
