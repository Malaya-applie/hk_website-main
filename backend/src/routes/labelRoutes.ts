import { Router } from "express";
import {
  getLabels,
  createLabel,
  updateLabel,
  deleteLabel,
  deleteMultipleLabels,
} from "../controllers/labelController";

const router = Router();

router.get("/", getLabels);
router.post("/", createLabel);
router.put("/:id", updateLabel);
router.delete("/:id", deleteLabel);
router.delete("/", deleteMultipleLabels);

export default router;
