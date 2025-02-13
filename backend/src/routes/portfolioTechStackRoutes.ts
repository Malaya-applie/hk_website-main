import { Router } from "express";
// import controllers here
import { createTechnologyStack, getAllTechnologyStacksByPortfolioDetailId, getTechnologyStacks, getTechnologyStackById, updateTechnologyStack, deleteTechnologyStack } from "../controllers/portfolioTechStackController";
import upload from "../middlewares/upload"; // Import the upload middleware


const router = Router();


// write routes here

// route to add a technology stack 
router.post('/', upload.single("technologyImage"), createTechnologyStack)

// route to get all technology stacks by portfolioDetailId
router.get('/:portfolioDetailId', getAllTechnologyStacksByPortfolioDetailId)

router.get('/', getTechnologyStacks)

router.get('/technologyStack/:id', getTechnologyStackById)

router.put('/:id/update', upload.single("technologyImage"), updateTechnologyStack)

router.delete('/:id/delete', deleteTechnologyStack)


export default router;