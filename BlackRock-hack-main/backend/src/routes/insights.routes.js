import { Router } from "express";
import { getInsights } from "../controllers/insights.controller.js";

const insightsRouter = Router();

insightsRouter.get("/:id", getInsights);

export default insightsRouter;
