const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    designation: { type: String },
    companyName: { type: String },
    companyWebsite: { type: String },
    countryCode: { type: String },
    phoneNumber: { type: String },
    interest: { type: String },
    hearAboutUs: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
