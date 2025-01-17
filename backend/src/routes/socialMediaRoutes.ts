import { Router } from "express";
import {
  getSocialMedias,
  createSocialMedia,
  updateSocialMedia,
  deleteSocialMedia,
} from "../controllers/socialMediaController";
import upload from "../middlewares/upload"; // Import the upload middleware

const router = Router();

router.get("/", getSocialMedias);
router.post("/", upload.single("logo"), createSocialMedia); // Use multer for file upload
router.put("/:id", upload.single("logo"), updateSocialMedia); // Use multer for file upload
router.delete("/:id", deleteSocialMedia);

export default router;
