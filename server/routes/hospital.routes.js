import express from 'express'
import { createHospital, loginHospital } from '../controllers/hospital.controllers.js';

const router = express.Router();

router.post("/create", createHospital);
router.post("/login", loginHospital)

export default router