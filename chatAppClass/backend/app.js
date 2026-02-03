import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";

import error from "./src/middlewares/error.middleware.js";

import userRoutes from "./src/routes/user.route.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/users", userRoutes);

app.use(error);
export default app;
