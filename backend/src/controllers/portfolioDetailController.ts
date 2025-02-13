import { Request, Response } from "express";
import { Feature, PortfolioDetails, TechnologyStack } from "../models";

// Create a new portfolio detail
export const createPortfolioDetail = async (req: Request, res: Response) => {
  try {
    // Extract data from the request body
    const {
      clientName,
      tagline,
      introduction,
      projectOverviewHeading,
      projectOverviewDescription,
      challengeHeading,
      challengeDescription,
      solutionHeading,
      solutionDescription,
      solutionDevelopmentHeading,
      solutionDevelopmentDescription,
      keyFeaturesHeading,
      conclusionHeading,
      conclusionDescription,
      securityHeading,
      securityDescription,
    } = req.body;

    // Explicitly type req.files
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const logo = files?.["logo"]?.[0]?.filename || null;
    const heroImage = files?.["heroImage"]?.[0]?.filename || null;
    const projectOverviewImage = files?.["projectOverviewImage"]?.[0]?.filename || null;
    const solutionImage = files?.["solutionImage"]?.[0]?.filename || null;
    const challengeIconImage = files?.["challengeIconImage"]?.[0]?.filename || null;
    const solutionIconImage = files?.["solutionIconImage"]?.[0]?.filename || null;

    

    // Save portfolio details to the database
    const portfolio = await PortfolioDetails.create({
      clientName,
      tagline,
      logo,
      introduction,
      heroImage,
      projectOverviewHeading,
      projectOverviewDescription,
      projectOverviewImage,
      challengeIconImage,
      challengeHeading,
      challengeDescription,
      solutionIconImage,
      solutionHeading,
      solutionDescription,
      solutionDevelopmentHeading,
      solutionDevelopmentDescription,
      solutionImage,
      keyFeaturesHeading,
      conclusionHeading,
      conclusionDescription,
      securityHeading,
      securityDescription,
    });

    res.status(201).json({ message: "Portfolio created successfully", portfolio });
  } catch (error) {
    res.status(500).json({ error: "Failed to create portfolio", details: error });
  }
};


// Get all portfolio details
export const getPortfolioDetails = async (req: Request, res: Response) => {
  try {
    const portfolio = await PortfolioDetails.findAll();
    res.status(200).json({ portfolio });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch portfolio details", details: error });
  }
};

// Get a single portfolio detail by id
export const getPortfolioDetailById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const portfolio = await PortfolioDetails.findByPk(id, {
      include: [
        {
          model: Feature,
          as: "features",
        },
        {
          model: TechnologyStack,
          as: "technologyStacks", // Use the alias defined in the relationship
        },
      ],
    });
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    res.status(200).json({ portfolio });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch portfolio detail", details: error });
  }
};


// Update a portfolio detail

export const updatePortfolioDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      clientName,
      tagline,
      introduction,
      projectOverviewHeading,
      projectOverviewDescription,
      challengeHeading,
      challengeDescription,
      solutionHeading,
      solutionDescription,
      solutionDevelopmentHeading,
      solutionDevelopmentDescription,
      keyFeaturesHeading,
      conclusionHeading,
      conclusionDescription,
      securityHeading,
      securityDescription,
    } = req.body;

    
    // Explicitly type req.files
    const files = req.files as { [fieldname: string]: Express.Multer.File[] };

    const logo = files?.["logo"]?.[0]?.filename || undefined;
    const heroImage = files?.["heroImage"]?.[0]?.filename || undefined;
    const projectOverviewImage = files?.["projectOverviewImage"]?.[0]?.filename || undefined;
    const solutionImage = files?.["solutionImage"]?.[0]?.filename || undefined;
    const challengeIconImage = files?.["challengeIconImage"]?.[0]?.filename || undefined;
    const solutionIconImage = files?.["solutionIconImage"]?.[0]?.filename || undefined;

    const portfolio = await PortfolioDetails.findByPk(id);
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }

    const updatedData = await portfolio.update({
      clientName,
      tagline,
      logo,
      introduction,
      heroImage,
      projectOverviewHeading,
      projectOverviewDescription,
      projectOverviewImage,
      challengeIconImage,
      challengeHeading,
      challengeDescription,
      solutionIconImage,
      solutionHeading,
      solutionDescription,
      solutionDevelopmentHeading,
      solutionDevelopmentDescription,
      solutionImage,
      keyFeaturesHeading,
      conclusionHeading,
      conclusionDescription,
      securityHeading,
      securityDescription,
    });

    res.status(200).json({ message: "Portfolio updated successfully", updatedData });
  } catch (error) {
    res.status(500).json({ error: "Failed to update portfolio", details: error });
  }
};

// Delete a portfolio detail

export const deletePortfolioDetail = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const portfolio = await PortfolioDetails.findByPk(id);
    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }
    await portfolio.destroy();
    res.status(200).json({ message: "Portfolio deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete portfolio", details: error });
  }
};

