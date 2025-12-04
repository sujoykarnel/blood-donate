import express from "express";
const router = express.Router();
import {
  createGeoUpazila,
  getGeoUpazilas,
} from "../controllers/geoUpazilaController.js";

// routes
router.get("/", getGeoUpazilas);
router.post("/admin", createGeoUpazila);

export default router;
