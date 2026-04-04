// routes/pricing.js
const express = require('express');
const router = express.Router();
const pricingController = require('../controllers/pricingController');

router.get('/plans', pricingController.getPlans);

// optional: seed (protected ideally)
router.post('/seed', pricingController.seedPlans);

module.exports = router;
