let arr = [
  { id: 1, name: "varun", age: 34 },
  { id: 2, name: "ashwin", age: 34 },
  { id: 3, name: "ashwini", age: 32 },
];

import express from "express";
import fs from "fs";

const app = express();

app.use(express.urlencoded({ extended: true })); //TODO:middleware

app.get("/", (req, res) => {
  //   throw new Error("Something happened");

  if (arr.length === 0)
    return res.status(404).json({
      success: false,
      message: "No Users found",
    }); //? if return is not present, then we will get an error

  res.status(200).json({
    success: true,
    message: "All users fetched successfully",
    data: arr,
  });
});

//! to display form on the UI
app.get("/form", (req, res) => {
  fs.createReadStream("./pages/Register.html", "utf-8").pipe(res);
});

//! body property in req object will store the data, which is coming from frontend --> req.body will contain an object
app.post("/add", (req, res) => {
  let userData = req.body;
  arr.push(userData);
  res.status(201).json({
    success: true,
    message: "Registration Successful",
  });
});

// app.get("/user/1", (req, res) => {
//   res.send("user 1");
// });
// app.get("/user/2", (req, res) => {
//   res.send("user 2");
// }); // this is not possible, to define all the routes

//! dynamic routing
app.get("/user/:id/:name", (req, res) => {
  console.log(req.params);
  const id = parseInt(req.params.id);
  let user = arr.find((user) => id === user.id);
  console.log(user);
  res.send(user);
});
//localhost:9000/user/123/abc

http: app.listen(9000, (err) => {
  if (err) console.log(err);
  console.log("server running");
});

//~ it only supports routing (minimal web framework)
