import express from "express";
const router = express.Router();
import {
  createBloodGroup,
  getBloodGroups,
} from "../controllers/bloodGroupController.js";

// routes
router.get("/", getBloodGroups);
router.post("/admin", createBloodGroup);

export default router;
