import { Router } from "express";
import {
  getBrandLogos,
  createBrandLogo,
  updateBrandLogo,
  deleteBrandLogo,
} from "../controllers/brandLogoController";
import upload from "../middlewares/upload"; // Import the upload middleware

const router = Router();

router.get("/", getBrandLogos);
router.post("/", upload.single("logo"), createBrandLogo); // Use multer for file upload
router.put("/:id", upload.single("logo"), updateBrandLogo); // Use multer for file upload
router.delete("/:id", deleteBrandLogo);

export default router;
