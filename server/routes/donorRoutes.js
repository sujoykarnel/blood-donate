import express from "express";
const router = express.Router();
import {
  createDonor,
  getDonors,
} from "../controllers/donorController.js";

// routes
router.get("/", getDonors);
router.post("/admin", createDonor);

export default router;
