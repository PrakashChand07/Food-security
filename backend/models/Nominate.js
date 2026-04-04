const mongoose = require("mongoose");

const NominateSchema = new mongoose.Schema({
  // Contact Details
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  designation: { type: String, trim: true },
  countryCode: { type: String, trim: true },
  phoneNumber: { type: String, trim: true },
  companyName: { type: String, trim: true },
  companyWebsite: { type: String, trim: true },

  // Nominee Details
  nomineeType: { type: String, enum: ["company", "individual"], required: true },
  nomineeName: { type: String, required: true, trim: true },
  nomineeWebsite: { type: String, trim: true },
  nomineeLinkedIn: { type: String, trim: true },
  nomineeRegion: { type: String, trim: true },
  workDescription: { type: String, trim: true },
  awardHistory: { type: String, trim: true },
  announcements: { type: String, enum: ["yes", "no"], trim: true },
  sponsorship: { type: String, enum: ["yes", "no"], trim: true },

  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Nominate", NominateSchema);
