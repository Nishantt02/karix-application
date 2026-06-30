import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";

import sebiRoutes from "./routes/sebiRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";
const app = express();

app.use(cors({
    origin: "http://localhost:5173"
}));

app.use(helmet());

app.use(morgan("dev"));

app.use(express.json());

app.use("/api/sebi", sebiRoutes);

app.use(errorHandler);

export default app;