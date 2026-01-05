import express from "express";
import connectDB from "./config/database.config.js";

import userRoutes from "./routes/user.route.js";

connectDB();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(userRoutes);

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(9000, (err) => {
  if (err) console.log("error occurred while starting the server");
  console.log("Server Running");
});

//! while using default script, in the terminal, run "npm scriptName"
//! while using custom script, in the terminal, run "npm run scriptName"

//! open cmd as admin, run "net start mongodb"
