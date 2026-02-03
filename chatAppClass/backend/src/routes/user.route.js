import { Router } from "express";
import { login, register } from "../controllers/user.controller.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { registerUserSchema } from "../validators/user.validator.js";

const router = Router();

router.post("/register", validateBody(registerUserSchema), register);
router.post("/login", /* validateBody(loginUserSchema) */ login);

export default router;
