import { Router } from "express";
import {
  getFeedbacks,
  createFeedback,
  updateBrandLogo,
  deleteClientFeedback,
} from "../controllers/clientFeedbackController";
import upload from "../middlewares/upload"; // Import the upload middleware

const router = Router();

router.get("/", getFeedbacks);
router.post("/", upload.single("userimage"), createFeedback); // Use multer for file upload
router.put("/:id", upload.single("userimage"), updateBrandLogo); // Use multer for file upload
router.delete("/:id", deleteClientFeedback);

export default router;
