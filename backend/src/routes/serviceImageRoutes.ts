import { Router } from "express";
// imports from controller
import upload from "../middlewares/upload"; // Import the upload middleware
import  {createServiceImage}  from "../controllers/serviceImageController";
import { getServiceImages, updateServiceImage, getServiceImageById, deleteServiceImage } from "../controllers/serviceImageController";

const router = Router();



// route to post a new service image
router.post("/", upload.single("serviceImage"), createServiceImage);


// route to update a new service image
router.put("/:id/update", upload.single("serviceImage"), updateServiceImage);



// route to get all service images with details
router.get("/images", getServiceImages)

// route to get service image by id
router.get("/:id", getServiceImageById)

router.delete("/:id/delete", deleteServiceImage)


export default router;