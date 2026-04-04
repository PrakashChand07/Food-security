const express = require("express");
const router = express.Router();
const Speaker = require("../models/Speaker");

/**
 * GET /api/key-information/speakers
 * Purpose: Get speakers data under Key Information
 */
router.get("/speakers", async (req, res, next) => {
  try {
    const speakers = await Speaker.find().sort({ createdAt: -1 });
    res.status(200).json(speakers);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/key-information/about
 * (placeholder – future use)
 */
router.get("/about", (req, res) => {
  res.json({
    title: "About Us",
    message: "Key Information - About Us content will come from CMS"
  });
});

/**
 * GET /api/key-information/agenda
 * (placeholder – future use)
 */
router.get("/agenda", (req, res) => {
  res.json({
    title: "Agenda",
    message: "Key Information - Agenda content will come from CMS"
  });
});

module.exports = router;
