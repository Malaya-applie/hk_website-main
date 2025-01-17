import { Router } from "express";
import {
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  deleteMultipleCategories,
} from "../controllers/categoryController";

const router = Router();

router.get("/", getCategories);
router.post("/", createCategory);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);
router.delete("/", deleteMultipleCategories);

export default router;
