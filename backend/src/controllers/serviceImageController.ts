import { Request, Response } from "express";
import ServicesImagesTable from "../models/servicesImagesTable";
import ServicesTable from "../models/ServicesTable";

// Create a service image
export const createServiceImage = async (req: Request, res: Response) => {
    try {
        // Ensure a file was uploaded
        if (!req.file) {
            return res.status(400).json({ error: "No image file uploaded" });
        }

        const imagePath = req.file.filename; // File name from multer
        const { serviceImageTitle, serviceImageDescription, serviceTypeId } = req.body;

        const serviceImage = await ServicesImagesTable.create({
            serviceImageTitle,
            serviceImageDescription,
            serviceImage: imagePath, // Store file path in DB
            serviceTypeId
        });

        res.status(201).json(serviceImage);
    } catch (error) {
        console.error("Error creating service image:", error);
        res.status(500).json({ error: "Failed to create service image" });
    }
};

// update a service image
export const updateServiceImage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params; // Get the ID from request params
        const { serviceImageTitle, serviceImageDescription, serviceTypeId } = req.body;

        // Find the existing service image entry
        const serviceImage = await ServicesImagesTable.findByPk(id);
           console.log(serviceImage?.dataValues)
        if (!serviceImage) {
            return res.status(404).json({ error: "Service image not found" });
        }

        // If a new file is uploaded, use its filename; otherwise, keep the existing image
        const updatedImagePath = req.file ? req.file.filename : serviceImage?.dataValues.serviceImage;

        // Update the service image entry
        await serviceImage.update({
            serviceImageTitle,
            serviceImageDescription,
            serviceImage: updatedImagePath, 
            serviceTypeId
        });

        // Fetch and return updated data
        const updatedServiceImage = await ServicesImagesTable.findByPk(id);
        res.status(200).json(updatedServiceImage);
        
    } catch (error) {
        console.error("Error updating service image:", error);
        res.status(500).json({ error: "Failed to update service image" });
    }
};






// get all service images with service type details

export const getServiceImages = async (req: Request, res: Response) => {
    try {
        const serviceImages = await ServicesImagesTable.findAll({
            include: [
                {
                    model: ServicesTable,
                    as: "ServicesTable",  // Ensure this matches the association name
                },
            ],
        });   // to include service table details here
        // const serviceImages = await ServicesImagesTable.findAll();
        res.status(200).json(serviceImages);
    } catch (error) {
        console.error("Error getting service images:", error);
        res.status(500).json({ error: "Failed to get service images" });
    }
};

// get service by id
export const getServiceImageById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const serviceImage = await ServicesImagesTable.findByPk(id);
        if (serviceImage) {
            res.status(200).json(serviceImage);
        } else {
            res.status(404).json({ error: "Service image not found" });
        }
    } catch (error) {
        console.error("Error getting service image:", error);
        res.status(500).json({ error: "Failed to get service image" });
    }
};

// delete a service image
export const deleteServiceImage = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const deleted = await ServicesImagesTable.destroy({ where: { id } });
        if (deleted) {
            res.status(200).json({ message: "Service image deleted successfully" });
        } else {
            res.status(404).json({ error: "Service image not found" });
        }
    } catch (error) {
        console.error("Error deleting service image:", error);
        res.status(500).json({ error: "Failed to delete service image" });
    }
};
