import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

import userRouter from "./routes/user.routes.js";
import preferenceRouter from "./routes/preference.routes.js";
import insightsRouter from "./routes/insights.routes.js";

app.use("/api/users", userRouter);
app.use("/api/preferences", preferenceRouter);
app.use("/api/insights", insightsRouter);

export default app;
