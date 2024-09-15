import express from "express";
import passport from "passport";
import { passportConfig } from "./config/passport.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";

export const app = express();

passportConfig(passport);
app.use(passport.initialize());

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes
app.use("/auth", authRoutes);
// prompt routes
// app.use("/prompt", promptRoutes);
