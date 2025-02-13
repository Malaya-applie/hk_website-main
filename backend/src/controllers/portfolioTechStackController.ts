import { Request, Response } from "express";
import { TechnologyStack } from "../models";

// Create a new technology stack
export const createTechnologyStack = async (req: Request, res: Response) => {
  try {
    const {type, portfolioDetailId } = req.body;

    const imagePath = req.file?.filename as string;

    const technologyStack = await TechnologyStack.create({
      technologyImage: imagePath,
      type,
      portfolioDetailId,
    });

    res.status(201).json(technologyStack);
  } catch (error) {
    res.status(500).json({ error: "Failed to create technology stack" });
  }
};

// update a technology stack
export const updateTechnologyStack = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Find existing technology stack
    const technologyStack = await TechnologyStack.findByPk(id);
    if (!technologyStack) {
      return res.status(404).json({ error: "Technology stack not found" });
    }

    // Handle image update only if a new file is uploaded
    let imagePath;
    if (req.file) {
      imagePath = req.file.filename;  // Set the image path if a new file is uploaded
    } else {
      imagePath = (technologyStack as any).technologyImage;  // Keep the existing image if no new file is uploaded
    }

    // Update the technology stack, preserving the image if not provided
    const [updatedRows] = await TechnologyStack.update(
      {
        ...req.body,  // Spread other fields
        technologyImage: imagePath,  // Conditionally set technologyImage
      },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(400).json({ error: "No changes made" });
    }

    // Fetch the updated record and return it
    const updatedTechnologyStack = await TechnologyStack.findByPk(id);
    res.status(200).json(updatedTechnologyStack);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update technology stack" });
  }
}


// get all technology stacks by portfolioDetailId

export const getAllTechnologyStacksByPortfolioDetailId = async (req: Request, res: Response) => {
  try {
    //  get all the technology stacks by portfolioDetail Id
     const {portfolioDetailId} = req.params;
    const technologyStacks = await TechnologyStack.findAll({ where: { portfolioDetailId } });

    res.status(200).json({ technologyStacks });
 
  } catch (error) {
     res.status(500).json({ error: "Failed to fetch technology stacks" });
  }
}

// get all the technology stacks
export const getTechnologyStacks = async (req: Request, res: Response) => {
  try {
    const technologyStacks = await TechnologyStack.findAll();
    res.status(200).json({ technologyStacks });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch technology stacks" });
  }
}

// get individual technology stack by technologyStackId itself
export const getTechnologyStackById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const technologyStack = await TechnologyStack.findByPk(id);
    res.status(200).json({ technologyStack });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch technology stack" });
  }
}

// delete a technology stack
export const deleteTechnologyStack = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await TechnologyStack.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Technology stack deleted successfully" });
    } else {
      res.status(404).json({ error: "Technology stack not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete technology stack" });
  }
}




