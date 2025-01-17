import { Router } from "express";
import { listUploadedFiles, UploadFile } from "../controllers/fileController";
import upload from "../middlewares/upload";

const router = Router();

router.get("/", listUploadedFiles);
router.post("/", upload.single("image"), UploadFile);

export default router;
