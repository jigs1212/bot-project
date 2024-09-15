import express from "express";
import { register, login } from "../controllers/auth.controller.js";
import passport from "passport";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", login);

// Example of a protected route
authRoutes.get(
  "/protected",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({ message: "You are authenticated!" });
  }
);

export default authRoutes;
