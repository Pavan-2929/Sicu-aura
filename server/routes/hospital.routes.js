import express from "express";
import {
  createHospital,
  getAllHospitals,
  getHospital,
  loginHospital,
  logout,
} from "../controllers/hospital.controllers.js";
import { verifyToken } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/create", createHospital);
router.post("/login", loginHospital);
router.get("/get", verifyToken, getHospital);
router.get("/get/all", getAllHospitals);
router.post("/logout", logout)

export default router;
