// controllers/pricingController.js
const Plan = require('../models/Plan');

exports.getPlans = async (req, res, next) => {
  try {
    const plans = await Plan.find().sort({ price: 1 });
    res.json({ success: true, data: plans });
  } catch (err) {
    next(err);
  }
};

// optional: seed plans endpoint if you want to populate via api
exports.seedPlans = async (req, res, next) => {
  try {
    const sample = [
      {
        title: "Visitor Pass",
        price: 0,
        oldPrice: 0,
        img: "assets/images/pattern/1.png",
        points: [
          "Access to Exhibition Area only",
          "Entry to Opening Ceremony",
          "Inclusion in Attendee List",
          "Certificate of Attendance",
          "No access to sessions or food & beverages",
        ]
      },
      {
        title: "Attendee Pass",
        price: 99,
        oldPrice: 149,
        img: "assets/images/pattern/2.png",
        points: [
          "Full-day access to Conference Sessions",
          "Access to Exhibition Zone",
          "Access to Networking Area",
          "Participation Certificate (Digital)",
          "Inclusion in post-event Digital Brochure",
          "Tea/Coffee Breaks included (no lunch)",
          "Access to event Photo Gallery (Digital)",
        ]
      },
      {
        title: "Delegate Pass",
        price: 1099,
        oldPrice: 1299,
        img: "assets/images/pattern/1.png",
        points: [
          "Full 2-Day Conference + Exhibition Access",
          "All Panel Discussions & Sessions",
          "Access to Networking Area",
          "Investor & Partnership Meetings",
          "Lunch + Refreshments (Both Days)",
          "Post-event Networking Database",
          "Digital Certificate",
          "Post-Event Report Access",
          "Social Media Mention (3 Posts)",
          "Recorded Sessions (On Demand)",
          "Blog / Article Mention",
          "Stage Access",
          "Company Logo on Website + Event Logo Placement",
        ]
      },
      {
        title: "VIP Delegate Pass",
        price: 1399,
        oldPrice: 1599,
        img: "assets/images/pattern/2.png",
        points: [
          "All Delegate Pass benefits",
          "VIP Access Badge",
          "Priority Seating at Conference & Awards",
          "Pre-Event Interview (2 Posts)",
          "Post-Event Magazine Feature",
          "Priority Access for Future Events",
          "Accommodation for Event Timeline",
        ]
      }
    ];

    await Plan.deleteMany({});
    const created = await Plan.insertMany(sample);
    res.json({ success: true, count: created.length });
  } catch (err) {
    next(err);
  }
};
