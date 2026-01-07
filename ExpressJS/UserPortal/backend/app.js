// console.log(process.env); // it is an object

import express from "express";
import connectDB from "./config/database.config.js";

import { PORT } from "./config/index.js";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";
import userRoutes from "./routes/user.route.js";

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("working");
});

//! error middleware
app.use(errorHandler);

app.listen(PORT, (err) => {
  if (err) console.log("error occurred while starting the server");
  console.log("Server Running", process.env.PORT);
});

//! while using default script, in the terminal, run "npm scriptName"
//! while using custom script, in the terminal, run "npm run scriptName"

//! open cmd as admin, run "net start mongodb"

//! zero dependency packages : packages which are not depended on any other package
