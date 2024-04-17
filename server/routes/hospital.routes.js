import express from 'express'
import { createHospital, getHospital, loginHospital } from '../controllers/hospital.controllers.js';
import { verifyToken } from '../middleware/verifyToken.js';

const router = express.Router();

router.post("/create", createHospital);
router.post("/login", loginHospital)
router.get("/get", verifyToken, getHospital)

export default router