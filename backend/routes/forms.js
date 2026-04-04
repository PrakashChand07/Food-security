const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const forms = require('../controllers/formsController');

// simple middleware to handle validation results
const runValidation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success: false, errors: errors.array() });
  }
  next();
};

// Subscribe
router.post('/subscribe', [body('email').isEmail().withMessage('Valid email required')], runValidation, forms.createSubscribe);

// Contact / Connect With Us
router.post('/contact', [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required'),
], runValidation, forms.createContact);

// Speak
router.post(
  '/speak',
  [
    body('firstName').notEmpty().withMessage('First name required'),
    body('lastName').notEmpty().withMessage('Last name required'),
    body('email').isEmail().withMessage('Valid email required'),
    body('speakerFirstName').notEmpty().withMessage('Speaker first name required'),
    body('speakerEmail').isEmail().withMessage('Speaker email required'),
  ],
  runValidation,
  forms.createSpeak
);

// Nominate
router.post(
  "/nominate",
  [
    body("firstName").notEmpty().withMessage("First name required"),
    body("lastName").notEmpty().withMessage("Last name required"),
    body("email").isEmail().withMessage("Valid email required"),
  ],
  runValidation,
  forms.createNominate
);
// Partner
router.post(
  "/partner",
  [
    body("firstName").notEmpty().withMessage("First name required"),
    body("lastName").notEmpty().withMessage("Last name required"),
    body("email").isEmail().withMessage("Valid email required"),
  ],
  runValidation,
  forms.createPartner
);

// Exhibit / Sponsor
router.post(
  "/exhibit-sponsor",
  [
    body("firstName").notEmpty().withMessage("First name required"),
    body("lastName").notEmpty().withMessage("Last name required"),
    body("email").isEmail().withMessage("Valid email required"),
  ],
  runValidation,
  forms.createExhibitSponsor
);


// Past edition - Get Full Past Event Report
router.post('/past-edition', [
  body('name').notEmpty().withMessage('Name required'),
  body('email').isEmail().withMessage('Valid email required'),
], runValidation, forms.createPastEditionRequest);

// Booking / Register Now
router.post(
  "/booking",
  [
    body("firstName").notEmpty().withMessage("First Name required"),
    body("lastName").notEmpty().withMessage("Last Name required"),
    body("email").isEmail().withMessage("Valid email required"),
  ],
  runValidation,
  forms.createBooking
);

// Visit
router.post(
  "/visit",
  [
    body("firstName").notEmpty().withMessage("First name required"),
    body("lastName").notEmpty().withMessage("Last name required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("countryCode").notEmpty().withMessage("Country code required"),
    body("phoneNumber").notEmpty().withMessage("Phone number required"),
  ],
  runValidation,
  forms.createVisit
);

// Pitch / Startup Application
router.post(
  "/pitch",
  [
    body("startupName").notEmpty().withMessage("Startup name required"),
    body("country").notEmpty().withMessage("Country required"),
    body("yearFounded").notEmpty().withMessage("Year founded required"),
    body("stage").notEmpty().withMessage("Startup stage required"),
    body("fullName").notEmpty().withMessage("Full name required"),
    body("jobTitle").notEmpty().withMessage("Job title required"),
    body("email").isEmail().withMessage("Valid email required"),
    body("phone").notEmpty().withMessage("Phone number required"),
    body("description").notEmpty().withMessage("Description required"),
    body("problem").notEmpty().withMessage("Problem statement required"),
    body("uniqueness").notEmpty().withMessage("Uniqueness required"),
    body("funding").notEmpty().withMessage("Funding status required"),
    body("seeking").notEmpty().withMessage("Seeking information required"),
    body("accuracyConfirmed").equals("true").withMessage("Please confirm information accuracy"),
    body("contactConsent").equals("true").withMessage("Please provide contact consent"),
  ],
  runValidation,
  forms.createPitch
);



module.exports = router;
