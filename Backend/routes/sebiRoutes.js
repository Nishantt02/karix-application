import express from "express";

import { sendProcessVariables } from "../controllers/sebicontrollers.js";

const router = express.Router();

router.post("/submit", sendProcessVariables);

export default router;