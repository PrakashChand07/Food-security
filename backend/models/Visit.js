const mongoose = require("mongoose");

const VisitSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    designation: {
      type: String,
      trim: true,
    },
    companyWebsite: {
      type: String,
      trim: true,
    },
    countryCode: {
      type: String,
      trim: true,
    },
    phoneNumber: {
      type: String,
      trim: true,
    },
    hearAboutUs: {
      type: String,
      trim: true,
    },
    announcements: {
      type: String,
      enum: ["yes", "no"],
    },
    sponsorship: {
      type: String,
      enum: ["yes", "no"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Visit", VisitSchema);
