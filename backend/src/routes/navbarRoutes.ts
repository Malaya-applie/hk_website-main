import { Router } from "express";
import {
  getNavbars,
  createNavbar,
  updateNavbar,
  deleteNavbar,
  deleteMultipleNavbars,
} from "../controllers/navbarController";

const router = Router();

router.get("/", getNavbars);
router.post("/", createNavbar);
router.put("/:id", updateNavbar);
router.delete("/:id", deleteNavbar);
router.delete("/", deleteMultipleNavbars);

export default router;
