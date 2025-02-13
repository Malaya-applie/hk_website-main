import { Router } from "express";
import { createPortfolioDetail, getPortfolioDetails, getPortfolioDetailById, updatePortfolioDetail, deletePortfolioDetail } from "../controllers/portfolioDetailController";
import upload from "../middlewares/upload"; // Import the upload middleware

const router = Router();

// route to get all portfolio details
router.get("/", getPortfolioDetails);

// route to get portfolio detail by id
router.get("/:id", getPortfolioDetailById);


// route to create a new portfolio detail
router.post(
  "/",
  upload.fields([
    { name: "logo", maxCount: 1 },
    { name: "heroImage", maxCount: 1 },
    { name: "projectOverviewImage", maxCount: 1 },
    { name: "solutionImage", maxCount: 1 },
    { name: "challengeIconImage", maxCount: 1 },
    { name: "solutionIconImage", maxCount: 1 },
  ]),
  createPortfolioDetail
);

// route to update a portfolio detail
router.put("/:id/update", upload.fields([
  { name: "logo", maxCount: 1 },
  { name: "heroImage", maxCount: 1 },
  { name: "projectOverviewImage", maxCount: 1 },
  { name: "solutionImage", maxCount: 1 },
  { name: "challengeIconImage", maxCount: 1 },
  { name: "solutionIconImage", maxCount: 1 },
]), updatePortfolioDetail)


// route to delete a portfolio detail
router.delete("/:id/delete", deletePortfolioDetail);

export default router;
