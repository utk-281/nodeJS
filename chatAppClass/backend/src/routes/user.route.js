import { Router } from "express";
import {
  getCurrentUser,
  login,
  logout,
  register,
} from "../controllers/user.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validators/user.validator.js";

const router = Router();

router.post("/register", validateBody(registerUserSchema), register);
router.post("/login", validateBody(loginUserSchema), login);
router.post("/logout", authenticate, logout);

router.get("/get-current", authenticate, getCurrentUser);

export default router;
