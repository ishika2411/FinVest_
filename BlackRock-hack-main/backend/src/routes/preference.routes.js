import { Router } from "express";
import { createPreference } from "../controllers/preference.controller.js";

const preferenceRouter = Router();

preferenceRouter.post("/create", createPreference);

export default preferenceRouter;
