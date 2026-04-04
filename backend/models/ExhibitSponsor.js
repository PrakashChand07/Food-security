const mongoose = require('mongoose');

const ExhibitSponsorSchema = new mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  linkedIn: { type: String, trim: true },
  email: { type: String, required: true, trim: true },
  companyName: { type: String, trim: true },
  companyWebsite: { type: String, trim: true },
  jobTitle: { type: String, trim: true },
  natureOfBusiness: { type: String, trim: true },
  yearsOfBusiness: { type: String, trim: true },
  sizeOfBusiness: { type: String, trim: true },
  countryCode: { type: String, trim: true },
  phoneNumber: { type: String, trim: true },
  standType: { type: String, trim: true },
  announcements: { type: String, enum: ["yes", "no"], trim: true },
  sponsorship: { type: String, enum: ["yes", "no"], trim: true },
}, { timestamps: true });

module.exports = mongoose.model('ExhibitSponsor', ExhibitSponsorSchema);
