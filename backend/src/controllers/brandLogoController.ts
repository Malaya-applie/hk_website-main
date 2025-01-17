import { Request, Response } from "express";
import { BrandLogo } from "../models/brandLogo"; // Adjust the import based on your project structure
import { deleteImage } from "../utils/imageDelete";

// Get all brand logos
export const getBrandLogos = async (req: Request, res: Response) => {
  try {
    const brandLogos = await BrandLogo.findAll();
    res.json(brandLogos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch brand logos" });
  }
};

// Create a new brand logo
export const createBrandLogo = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const logoPath = req.file?.filename as string;

    const brandLogo = await BrandLogo.create({
      name,
      logo: logoPath, // Save the relative logo path in the database
    });
    res.status(201).json(brandLogo);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to create brand logo" });
  }
};

// Update a brand logo
export const updateBrandLogo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    const logoPath = req.file?.filename; // Get the filename of the uploaded logo if it exists

    const updatedData: any = { name };
    if (logoPath) {
      updatedData.logo = logoPath; // Update logo path if a new one is uploaded
      const existingLogo = await BrandLogo.findOne({ where: { id } });
      if (!existingLogo) {
        return res.status(404).json({ error: "Brand logo not found" });
      }
      deleteImage(existingLogo.logo);
    }

    const [updated] = await BrandLogo.update(updatedData, { where: { id } });
    if (updated) {
      const updatedBrandLogo = await BrandLogo.findOne({ where: { id } });
      res.status(200).json(updatedBrandLogo);
    } else {
      res.status(404).json({ error: "Brand logo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update brand logo" });
  }
};

// Delete a brand logo
export const deleteBrandLogo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await BrandLogo.findOne({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Brand logo not found" });
    }
    deleteImage(existing.logo);

    const deleted = await BrandLogo.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Brand logo not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete brand logo" });
  }
};
