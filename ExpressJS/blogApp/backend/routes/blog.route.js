import { Router } from "express";
import { addBlog, getBlog, getBlogs } from "../controllers/blog.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import upload from "../middlewares/multer.middleware.js";
import { validateBody } from "../middlewares/validate.middleware.js";
import { addBlogSchema } from "../validators/blog.validator.js";

const router = Router();

router.post(
  "/add",
  authenticate,
  validateBody(addBlogSchema),
  upload.single("image"),
  addBlog,
);
router.get("/all", getBlogs);
router.get("/:id", getBlog);

export default router;
