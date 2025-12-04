import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./config/db.js";

// Internal Modules
import donorRoutes from "./routes/donorRoutes.js";
import geoDivisionRoutes from "./routes/geoDivisionRoutes.js";
import geoDistrictRoutes from "./routes/geoDistrictRoutes.js";
import geoUpazilaRoutes from "./routes/geoUpazilaRoutes.js";

// Load environment variables
dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);

// Connect to MongoDB
connectDB();

// connected message
app.get("/", (req, res) => {
  res.json({ message: "API Server Running." });
});

// Routes
app.use("/api/donors", donorRoutes);
app.use("/api/geoDivisions", geoDivisionRoutes);
app.use("/api/geoDistricts", geoDistrictRoutes);
app.use("/api/geoUpazilas", geoUpazilaRoutes);

// Start server
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
