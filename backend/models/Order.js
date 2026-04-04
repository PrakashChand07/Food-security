// models/Order.js
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  planTitle: String,
  amount: Number, // in paisa
  currency: { type: String, default: 'INR' },
  qty: { type: Number, default: 1 },
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  status: { type: String, enum: ['created','paid','failed'], default: 'created' },
  customer: {
    name: String,
    email: String,
    contact: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
