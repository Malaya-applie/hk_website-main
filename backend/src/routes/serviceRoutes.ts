import { Router } from "express";
import {
  getServices,
  createServices,
  updateServices,
  deleteServices,
} from "../controllers/serviceController";
import upload from "../middlewares/upload";

const router = Router();

router.get("/", getServices);
router.post("/", upload.single("icon"), createServices);
router.put("/:id", upload.single("icon"), updateServices);
router.delete("/:id", deleteServices);

export default router;
