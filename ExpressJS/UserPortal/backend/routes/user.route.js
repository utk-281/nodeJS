//! 1) import {Router} from 'express'
//! 2) import all the controller functions
//! 3) create an instance of Router
//! 4) define all the routes and attach the controller functions
//! 5) export the router instance

import { Router } from "express";
import {
  deleteUser,
  getUser,
  getUsers,
  login,
  register,
  updateUser,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import {
  updatedUserSchema,
  userRegisterSchema,
} from "../validators/user.validator.js";

const router = Router();

router.post("/register", validateBody(userRegisterSchema), register);

router.get("/all", authenticate, getUsers);

router.get("/single/:id", getUser);

router.patch("/update/:id", validateBody(updatedUserSchema), updateUser);

router.delete("/delete/:id", deleteUser);

router.post("/login", login);

export default router;
