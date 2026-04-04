const mongoose = require('mongoose');

const SubscribeSchema = new mongoose.Schema({
  email: { type: String, required: true, trim: true },
  source: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Subscribe', SubscribeSchema);
