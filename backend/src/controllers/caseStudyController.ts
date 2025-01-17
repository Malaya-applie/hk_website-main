import { Request, Response } from "express";
import { CaseStudy } from "../models/caseStudy"; // Adjust the import based on your project structure
import { deleteImage } from "../utils/imageDelete";

// Get all case studies
export const getCaseStudies = async (req: Request, res: Response) => {
  try {
    const caseStudies = await CaseStudy.findAll();
    res.json(caseStudies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch case studies" });
  }
};

// Create a new case study
export const createCaseStudy = async (req: Request, res: Response) => {
  try {
    const { title, description, points, button_text, button_link } = req.body;
    const imagePath = req.file?.filename as string;

    const brandLogo = await CaseStudy.create({
      title,
      description,
      points,
      button_text,
      button_link,
      image: imagePath, // Save the relative image path in the database
    });
    res.status(201).json(brandLogo);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to create case study" });
  }
};

// Update a case study
export const updateCaseStudy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description, points, button_text, button_link } = req.body;
    const imagePath = req.file?.filename; // Get the filename of the uploaded image if it exists

    const updatedData: any = {
      title,
      description,
      points,
      button_text,
      button_link,
    };
    if (imagePath) {
      updatedData.image = imagePath; // Update image path if a new one is uploaded
      const existingLogo = await CaseStudy.findOne({ where: { id } });
      if (!existingLogo) {
        return res.status(404).json({ error: "Case study not found" });
      }
      deleteImage(existingLogo.image);
    }

    const [updated] = await CaseStudy.update(updatedData, { where: { id } });
    if (updated) {
      const updatedCaseStudy = await CaseStudy.findOne({ where: { id } });
      res.status(200).json(updatedCaseStudy);
    } else {
      res.status(404).json({ error: "Case study not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update case study" });
  }
};

// Delete a case study
export const deleteCaseStudy = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await CaseStudy.findOne({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Case study not found" });
    }
    deleteImage(existing.image);

    const deleted = await CaseStudy.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Case study not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete case study" });
  }
};
