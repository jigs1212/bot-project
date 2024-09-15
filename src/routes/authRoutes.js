// routes/authRoutes.js
const express = require("express");
const { register, login } = require("../controllers/authController");
const passport = require("passport");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

// Example of a protected route
router.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "You are authenticated!" });
  }
);

module.exports = router;
