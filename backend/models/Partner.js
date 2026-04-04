const mongoose = require('mongoose');

const PartnerSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  fullName: { type: String, trim: true },
  email: { type: String, required: true, trim: true },
  designation: { type: String, trim: true },
  companyName: { type: String, trim: true },
  companyWebsite: { type: String, trim: true },
  countryCode: { type: String, trim: true },
  phoneNumber: { type: String, trim: true },
  linkedIn: { type: String, trim: true },
  partnershipType: { type: String, trim: true },
  hearAboutUs: { type: String, trim: true },
  submissionDate: { type: Date, default: Date.now },
}, { timestamps: true });

module.exports = mongoose.model('Partner', PartnerSchema);
