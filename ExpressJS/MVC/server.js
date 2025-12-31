import express from "express";

import routes from "./routes/router.js";

const app = express();

app.use(express.urlencoded({ extended: true })); // reading the data, which is coming from html form
app.use(express.json());

app.use(routes);

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running att port 90000");
});

//! steps to work in postman
//~ 1) create a new workspace
//~ 2) give a name and click on create

// MVC => models ,views, controllers
