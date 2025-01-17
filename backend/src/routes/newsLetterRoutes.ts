import { Router } from "express";
import {
  createNewsletterSignup,
  getNewsletterSignups,
} from "../controllers/newsLetterController";

const router = Router();

router.get("/", getNewsletterSignups);
router.post("/", createNewsletterSignup);

export default router;
