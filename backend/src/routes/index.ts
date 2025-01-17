const express = require("express");
const router = express.Router();

import { isAdmin } from "../middlewares/authMiddleware";
import adminRoutes from "./adminRoutes";
import userRoutes from "./authRoutes";
import labelRoutes from "./labelRoutes";
import brandLogoRoutes from "./brandLogoRoutes";
import brandLogoImageRoutes from "./imageRoutes";
import clientFeedbackRoutes from "./clientFeedbackRoutes";
import navbarRoutes from "./navbarRoutes";
import newsletterRoutes from "./newsLetterRoutes";
import serviceRoutes from "./serviceRoutes";
import inquiryRoutes from "./inquiryRoutes";
import caseStudyRoutes from "./caseStudyRoutes";
import portfolioRoutes from "./portfolioRoutes";
import socialMediaRoutes from "./socialMediaRoutes";
import categoryRoutes from "./categoryRoutes";
import blogRoutes from "./blogRoutes";
import fileRoutes from "./fileRoutes";

router.use("/admin", isAdmin, adminRoutes);
router.use("/user", userRoutes);
router.use("/navbar", navbarRoutes);
router.use("/labels", labelRoutes);
router.use("/brand-logos", brandLogoRoutes);
router.use("/client-feedback", clientFeedbackRoutes);
router.use("/img", brandLogoImageRoutes);
router.use("/newsletter", newsletterRoutes);
router.use("/services", serviceRoutes);
router.use("/inquiry", inquiryRoutes);
router.use("/case-study", caseStudyRoutes);
router.use("/portfolio", portfolioRoutes);
router.use("/social-media", socialMediaRoutes);
router.use("/category", categoryRoutes);
router.use("/blog", blogRoutes);
router.use("/file", fileRoutes);

export default router;
