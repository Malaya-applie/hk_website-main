import { Router } from "express";
import {
  getPortfolios,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
} from "../controllers/portfolioController";
import upload from "../middlewares/upload"; // Import the upload middleware

const router = Router();

router.get("/", getPortfolios);
router.post("/", upload.single("image"), createPortfolio); // Use multer for file upload
router.put("/:id", upload.single("image"), updatePortfolio); // Use multer for file upload
router.delete("/:id", deletePortfolio);

export default router;
