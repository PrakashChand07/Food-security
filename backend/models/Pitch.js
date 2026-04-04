const mongoose = require("mongoose");

const pitchSchema = new mongoose.Schema(
    {
        // Startup Information
        startupName: { type: String, required: true },
        website: { type: String },
        country: { type: String, required: true },
        yearFounded: { type: String, required: true },
        stage: { type: String, required: true },

        // Founder/Representative Details
        fullName: { type: String, required: true },
        jobTitle: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phone: { type: String, required: true },

        // Focus Areas
        focusAreas: [{ type: String }],
        otherFocus: { type: String },

        // About Startup
        description: { type: String, required: true, maxlength: 500 },
        problem: { type: String, required: true },
        uniqueness: { type: String, required: true },

        // Funding & Growth
        funding: { type: String, required: true, enum: ["Yes", "No"] },
        amountRaised: { type: String },
        seeking: { type: String, required: true },

        // Consent
        accuracyConfirmed: { type: Boolean, required: true },
        contactConsent: { type: Boolean, required: true },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Pitch", pitchSchema);
