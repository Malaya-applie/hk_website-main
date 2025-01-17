import { Router } from "express";
import {
  getBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog,
  getOneBlogByType,
  getBlogsByType,
  getBlog,
} from "../controllers/blogController";
import upload from "../middlewares/upload"; // Import the upload middleware

const router = Router();

router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.post("/", upload.single("image"), createBlog); // Use multer for file upload
router.put("/:id", upload.single("image"), updateBlog); // Use multer for file upload
router.delete("/:id", deleteBlog);
router.get("/type/:type", getOneBlogByType);
router.get("/show/:type/:count", getBlogsByType);
router.get("/blog/:id", getBlog);

export default router;
