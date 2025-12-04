import express from "express";
const router = express.Router();
import {
  createGeoDivision,
  getGeoDivisions,
} from "../controllers/geoDivisionController.js";

// routes
router.get("/", getGeoDivisions);
router.post("/admin", createGeoDivision);

export default router;
