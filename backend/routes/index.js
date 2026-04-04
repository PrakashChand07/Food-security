const express = require('express');
const router = express.Router();

// route modules
const subscribeRoutes = require('./subscribeRoutes');
const contactRoutes = require('./contactRoutes');
const speakRoutes = require('./speakRoutes');
const nominateRoutes = require('./nominateRoutes');
const partnerRoutes = require('./partnerRoutes');
const exhibitSponsorRoutes = require('./exhibitSponsorRoutes');
const pastEditionRequestRoutes = require('./pastEditionRequestRoutes');
const bookingRoutes = require('./bookingRoutes');
const legacyForms = require('./forms');
const authRoutes = require('./authRoutes');
const userRoutes = require('./userRoutes');
const pricingRoutes = require('./pricing');
const paymentRoutes = require('./payment');
const visitRoutes = require('./visitRoutes');

router.use('/subscribe', subscribeRoutes);
router.use('/contact', contactRoutes);
router.use('/speak', speakRoutes);
router.use('/nominate', nominateRoutes);
router.use('/partner', partnerRoutes);
router.use('/exhibit-sponsor', exhibitSponsorRoutes);
router.use('/past-edition', pastEditionRequestRoutes);
router.use('/booking', bookingRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/visit', visitRoutes);
// keep legacy monolithic forms endpoints for compatibility with existing frontends
router.use('/forms', legacyForms);
router.use('/pricing', pricingRoutes);
router.use('/payment', paymentRoutes);

module.exports = router;
