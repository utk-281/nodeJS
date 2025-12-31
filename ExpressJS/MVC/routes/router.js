//! for every routes file follow these three steps
//~ 1) destructure the Router from "express"
//~ 2) Invoke the top level function
//~ 3) export the router

//~ 4) in main file, import this router

import { Router } from "express";
import {
  deleteUser,
  displayAllUSers,
  displayHello,
  displaySingleUser,
  registerUser,
  updateUser,
} from "../contollers/controller.js";

const router = Router();

//! a simple route to display hello
router.get("/", displayHello);

//! route to display all the data saved in database
router.get("/users", displayAllUSers);

//~ every data that is written in frontend or postman, is stored in req.body
//! route to post a user in database
router.post("/register", registerUser);

//! route to display a single user details (dynamic routing)
router.get("/one/:id", displaySingleUser);

// /! delete
router.delete("/delete/:id", deleteUser);

router.patch("/update/:id", updateUser);

export default router;
