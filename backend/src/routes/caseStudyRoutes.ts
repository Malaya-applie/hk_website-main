import { Router } from "express";
import {
  getCaseStudies,
  createCaseStudy,
  updateCaseStudy,
  deleteCaseStudy,
} from "../controllers/caseStudyController";
import upload from "../middlewares/upload"; // Import the upload middleware

const router = Router();

router.get("/", getCaseStudies);
router.post("/", upload.single("image"), createCaseStudy); // Use multer for file upload
router.put("/:id", upload.single("image"), updateCaseStudy); // Use multer for file upload
router.delete("/:id", deleteCaseStudy);

export default router;
