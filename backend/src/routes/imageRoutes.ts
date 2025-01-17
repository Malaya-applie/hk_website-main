import { Router } from "express";
import { getLogoById } from "../controllers/imgController";

const router = Router();

router.get("/:id", getLogoById);

export default router;
