import { Router } from "express";
// imports from controller
import upload from "../middlewares/upload"; // Import the upload middleware
import { createServiceDetail, getServiceDetails, updateServiceDetail, getServiceDetailById, deleteServiceDetail } from "../controllers/serviceDetailController";


const router = Router();

// route to create a new service detail
router.post("/", createServiceDetail);

// route to get services detail
router.get("/", getServiceDetails)

// route to get service detail by id 
router.get("/:id", getServiceDetailById)


// route to update a service detail
router.put("/:id/update", updateServiceDetail)

router.delete("/:id/delete", deleteServiceDetail)



export default router;