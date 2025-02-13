import { Router } from "express";
import { createFeature, getFeaturesByPortfolioId, getFeatures, getFeatureById, updateFeature, deleteFeature } from "../controllers/portfolioFeatureController";


const router = Router();

// route for getting feature by portfolioId
router.get("/:portfolioId", getFeaturesByPortfolioId)

// to get all features
router.get("/", getFeatures)

// route for creating a new feature
router.post("/", createFeature)

router.get('/feature/:id', getFeatureById)

router.put("/:id/update", updateFeature)

router.delete("/:id/delete", deleteFeature)





export default router;