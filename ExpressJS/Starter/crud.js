import express from "express";
import empDetails from "./db.js";

const app = express();

//TODO:middleware
app.use(express.urlencoded({ extended: true })); // reading the data, which is coming from html form
app.use(express.json());

//! a simple route to display hello
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "hello",
  });
});

//! route to display all the data saved in database
app.get("/users", (req, res) => {
  res.status(200).json({
    success: true,
    message: "all users fetched",
    data: empDetails,
  });
});

//~ every data that is written in frontend or postman, is stored in req.body
//! route to post a user in database
app.post("/register", (req, res) => {
  let newUser = req.body;
  console.log(newUser);
  empDetails.push(newUser);

  res.status(201).json({
    success: true,
    message: "User registration successful",
    data: newUser,
  });
});

//! route to display a single user details (dynamic routing)
app.get("/one/:id", (req, res) => {
  let userId = req.params.id;

  console.log(userId);

  let user = empDetails.find((user) => user.id === parseInt(userId));

  if (user === undefined)
    return res.status(404).json({
      success: false,
      message: "No user found",
    });

  console.log(user);

  res.status(200).json({
    success: true,
    message: "User details fetched successfully",
    data: user,
  });
});

app.delete("/delete/:id", (req, res) => {
  let userId = req.params.id;

  let idx = empDetails.findIndex((user) => user.id === parseInt(userId));

  if (idx !== -1) {
    empDetails.splice(idx, 1);

    return res.status(200).json({
      success: true,
      message: "user deleted",
      data: empDetails,
    });
  } else {
    res.status(404).json({
      success: false,
      message: "No user found",
    });
  }
});

app.patch("/update/:id", (req, res) => {});

app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("Server running att port 90000");
});

//! steps to work in postman
//~ 1) create a new workspace
//~ 2) give a name and click on create
