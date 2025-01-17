import { Request, Response } from "express";
import { Services } from "../models/service"; // Adjust the import based on your project structure
import { deleteImage } from "../utils/imageDelete";

// Get all services
export const getServices = async (req: Request, res: Response) => {
  try {
    const services = await Services.findAll();
    res.json(services);
  } catch (error) {
    console.log(error);
    
    res.status(500).json({ error: "Failed to fetch services" });
  }
};

// Create a new service
export const createServices = async (req: Request, res: Response) => {
  try {
    const { name, description } = req.body;
    const iconPath = req.file?.filename as string;

    const service = await Services.create({
      name,
      description,
      icon: iconPath,
    });
    res.status(201).json(service);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to create service" });
  }
};

// Update a service
export const updateServices = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const iconPath = req.file?.filename; // Get the filename of the uploaded icon if it exists

    const updatedData: any = { name };
    if (iconPath) {
      updatedData.icon = iconPath; // Update icon path if a new one is uploaded
      const existingLogo = await Services.findOne({ where: { id } });
      if (!existingLogo) {
        return res.status(404).json({ error: "Services not found" });
      }
      deleteImage(existingLogo.icon);
    }

    const [updated] = await Services.update(updatedData, { where: { id } });
    if (updated) {
      const updatedServices = await Services.findOne({ where: { id } });
      res.status(200).json(updatedServices);
    } else {
      res.status(404).json({ error: "Services not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update service" });
  }
};

// Delete a service
export const deleteServices = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await Services.findOne({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Services not found" });
    }
    deleteImage(existing.icon);

    const deleted = await Services.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Services not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete service" });
  }
};
