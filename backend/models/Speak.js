const mongoose = require('mongoose');

const SpeakSchema = new mongoose.Schema({
  // Your Details
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  companyName: String,
  jobTitle: String,
  country: String,
  countryCode: String,
  phoneNumber: String,

  // Speaker Details
  speakerFirstName: { type: String, required: true },
  speakerLastName: { type: String, required: true },
  speakerEmail: { type: String, required: true },
  designation: String,
  organization: String,
  organizationWebsite: String,
  speakerCountry: String,
  speakerPhoneNumber: String,
  speakerLinkedIn: String,
  speakerCategory: String,
  hearAboutUs: String,
  announcements: String,
  sponsorship: String,
}, { timestamps: true });

module.exports = mongoose.model('Speak', SpeakSchema);
