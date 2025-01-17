import { Request, Response } from "express";
import { Portfolio } from "../models/portfolio"; // Adjust the import based on your project structure
import { deleteImage } from "../utils/imageDelete";

// Get all portfolios
export const getPortfolios = async (req: Request, res: Response) => {
  try {
    const portfolios = await Portfolio.findAll();
    res.json(portfolios);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch portfolios" });
  }
};

// Create a new portfolio
export const createPortfolio = async (req: Request, res: Response) => {
  try {
    const {
      title,
      heading,
      problem,
      solution,
      impact_1_title,
      impact_1_stats,
      impact_2_title,
      impact_2_stats,
      impact_3_title,
      impact_3_stats,
      impact_4_title,
      impact_4_stats,
    } = req.body;
    const imagePath = req.file?.filename as string;

    const createdPortfolio = await Portfolio.create({
      title,
      heading,
      problem,
      solution,
      impact_1_title,
      impact_1_stats,
      impact_2_title,
      impact_2_stats,
      impact_3_title,
      impact_3_stats,
      impact_4_title,
      impact_4_stats,
      image: imagePath, // Save the relative image path in the database
    });
    res.status(201).json(createdPortfolio);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to create portfolio" });
  }
};

// Update a portfolio
export const updatePortfolio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      title,
      heading,
      problem,
      solution,
      impact_1_title,
      impact_1_stats,
      impact_2_title,
      impact_2_stats,
      impact_3_title,
      impact_3_stats,
      impact_4_title,
      impact_4_stats,
    } = req.body;
    const imagePath = req.file?.filename; // Get the filename of the uploaded image if it exists

    const updatedData: any = {
      title,
      heading,
      problem,
      solution,
      impact_1_title,
      impact_1_stats,
      impact_2_title,
      impact_2_stats,
      impact_3_title,
      impact_3_stats,
      impact_4_title,
      impact_4_stats,
    };
    if (imagePath) {
      updatedData.image = imagePath; // Update image path if a new one is uploaded
      const existingImage = await Portfolio.findOne({ where: { id } });
      if (!existingImage) {
        return res.status(404).json({ error: "Case study not found" });
      }
      deleteImage(existingImage.image);
    }

    const [updated] = await Portfolio.update(updatedData, { where: { id } });
    if (updated) {
      const updatedPortfolio = await Portfolio.findOne({ where: { id } });
      res.status(200).json(updatedPortfolio);
    } else {
      res.status(404).json({ error: "Case study not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update portfolio" });
  }
};

// Delete a portfolio
export const deletePortfolio = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await Portfolio.findOne({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Case study not found" });
    }
    deleteImage(existing.image);

    const deleted = await Portfolio.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Case study not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete portfolio" });
  }
};
