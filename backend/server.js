require("dotenv").config();

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const routes = require("./routes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const allowedOrigins = [
  "https://new-theme-pied.vercel.app",
  "https://foodsecuritysummitx.com",
  "https://www.foodsecuritysummitx.com",
  "https://web.foodsecuritysummitx.com",
  "https://admin.foodsecuritysummitx.com",
  "https://food-secure-admin.vercel.app",
  "http://localhost:3000",
  "http://localhost:5173",
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow Postman / server-to-server
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    return callback(new Error(`CORS blocked origin: ${origin}`));
  },
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};
app.use(cors(corsOptions));
app.options("*", cors(corsOptions));

app.use(express.json());

// connect db and seed admin users if missing
(async () => {
  try {
    await connectDB();

    // seed default users if not present
    const User = require("./models/User");
    const bcrypt = require("bcryptjs");

    const superEmail = process.env.SUPERADMIN_EMAIL || "superadmin@example.com";
    const superPass = process.env.SUPERADMIN_PASSWORD || "SuperAdmin123!";
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    const adminPass = process.env.ADMIN_PASSWORD || "Admin123!";

    console.log(
      "RESEND_API_KEY:",
      process.env.RESEND_API_KEY ? "SET" : "NOT SET"
    );
    console.log("ADMIN_EMAIL:", process.env.ADMIN_EMAIL);
    console.log("FROM_EMAIL:", process.env.FROM_EMAIL);

    const superExists = await User.findOne({ email: superEmail });
    if (!superExists) {
      const hash = await bcrypt.hash(superPass, 10);
      await User.create({
        name: "Super Admin",
        email: superEmail,
        password: hash,
        role: "superadmin",
      });
      console.log(
        "✅ Created default superadmin:",
        superEmail,
        " / password from env or default"
      );
    }

    const adminExists = await User.findOne({ email: adminEmail });
    if (!adminExists) {
      const hash = await bcrypt.hash(adminPass, 10);
      await User.create({
        name: "Admin User",
        email: adminEmail,
        password: hash,
        role: "admin",
      });
      console.log(
        "✅ Created default admin:",
        adminEmail,
        " / password from env or default"
      );
    }
  } catch (err) {
    console.error("Failed to connect to DB or seed users", err);
    process.exit(1);
  }
})();

app.get("/", (req, res) =>
  res.send({ ok: true, message: "New-theme backend running 🚀" })
);

// Mount API routes under /api
app.use("/api", routes);
app.use("/api", require("./routes/testMail"));

// error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server started on port ${PORT}`));
