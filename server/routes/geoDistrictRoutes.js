import express from "express";
const router = express.Router();
import {
  createGeoDistrict,
  getGeoDistricts,
} from "../controllers/geoDistrictController.js";

// routes
router.get("/", getGeoDistricts);
router.post("/admin", createGeoDistrict);

export default router;
