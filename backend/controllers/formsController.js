const Contact = require("../models/Contact");
const Subscribe = require("../models/Subscribe");
const Speak = require("../models/Speak");
const Nominate = require("../models/Nominate");
const Partner = require("../models/Partner");
const ExhibitSponsor = require("../models/ExhibitSponsor");
const PastEditionRequest = require("../models/PastEditionRequest");
const Booking = require("../models/Booking");
const { sendFormEmail } = require("../utils/email");
const Visit = require("../models/Visit");
const Pitch = require("../models/Pitch");
const checkDuplicateEmail = require("../utils/checkDuplicateEmail");

exports.createContact = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Contact, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }
    const doc = await Contact.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log(
      `Contact form submitted successfully: ${doc && (doc._id || doc.id)}`
    );
    // send email asynchronously; log errors but don't block response
    sendFormEmail("contact", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    next(err);
  }
};
exports.createSubscribe = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Subscribe, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }

    const doc = await Subscribe.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log("Subscribe doc:", doc);
    console.log(
      `Subscribe form submitted successfully: ${doc && (doc._id || doc.id)}`
    );
    sendFormEmail("subscribe", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
    console.log("sendFormEmail triggered for subscribe");
    console.log("Request body:", req.body);
  } catch (err) {
    next(err);
  }
};
exports.createSpeak = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Speak, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }

    const doc = await Speak.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log(
      `Speak form submitted successfully: ${doc && (doc._id || doc.id)}`
    );
    sendFormEmail("speak", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    next(err);
  }
};

exports.createNominate = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Nominate, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }

    const doc = await Nominate.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log(
      `Nominate form submitted successfully: ${doc && (doc._id || doc.id)}`
    );
    sendFormEmail("nominate", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    console.error("Nominate creation error:", err);
    res
      .status(400)
      .json({
        success: false,
        message: "Failed to submit nomination",
        error: err.message,
      });
  }
};
exports.createPartner = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Partner, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }

    const doc = await Partner.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log(
      `Partner form submitted successfully: ${doc && (doc._id || doc.id)}`
    );
    sendFormEmail("partner", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    next(err);
  }
};
exports.createExhibitSponsor = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(ExhibitSponsor, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }
    const doc = await ExhibitSponsor.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log(
      `ExhibitSponsor form submitted successfully: ${doc && (doc._id || doc.id)
      }`
    );
    sendFormEmail("exhibitSponsor", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    next(err);
  }
};

exports.createPastEditionRequest = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(PastEditionRequest, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }
    const doc = await PastEditionRequest.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log(
      `PastEditionRequest form submitted successfully: ${doc && (doc._id || doc.id)
      }`
    );
    sendFormEmail("pastEditionRequest", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    next(err);
  }
};

exports.createBooking = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Booking, req.body.email)) {
      return res
        .status(400)
        .json({ success: false, message: "Request already submitted." });
    }

    const doc = await Booking.create(req.body);
    res.status(201).json({ success: true, data: doc });
    console.log(
      `Booking form submitted successfully: ${doc && (doc._id || doc.id)}`
    );
    sendFormEmail("booking", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    next(err);
  }
};

exports.createVisit = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Visit, req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "This email has already been used for Visit registration.",
      });
    }

    const doc = await Visit.create({
      ...req.body,
      email: req.body.email.toLowerCase(),
    });

    res.status(201).json({ success: true, data: doc });
    sendFormEmail("visit", doc).catch(console.error);
  } catch (err) {
    next(err);
  }
};

exports.createPitch = async (req, res, next) => {
  try {
    if (await checkDuplicateEmail(Pitch, req.body.email)) {
      return res.status(400).json({
        success: false,
        message: "This email has already been used for a Pitch application.",
      });
    }

    const doc = await Pitch.create({
      ...req.body,
      email: req.body.email.toLowerCase(),
    });

    res.status(201).json({ success: true, data: doc });
    console.log(
      `Pitch form submitted successfully: ${doc && (doc._id || doc.id)}`
    );
    sendFormEmail("pitch", doc).catch((e) =>
      console.error("sendFormEmail error", e)
    );
  } catch (err) {
    next(err);
  }
};
