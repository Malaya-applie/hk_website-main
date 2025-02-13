import { Request, Response } from "express";
import { Feature } from "../models";


// create a new feature

export const createFeature = async (req: Request, res: Response) => {
  try {
    // Extract data from the request body
    const { title, description, portfolioId } = req.body;

    // Save feature to the database
    const feature = await Feature.create({ title, description, portfolioId });

    res.status(201).json({ message: "Feature created successfully", feature });
  } catch (error) {
    res.status(500).json({ error: "Failed to create feature", details: error });
  }
};

// get all the features

export const getFeatures = async (req: Request, res: Response) => {
     try {
       const features = await Feature.findAll();
       res.status(200).json({ features });
     } catch (error) {
       res.status(500).json({ error: "Failed to get features", details: error });
     }
}


// get all fetures by portfolioId

export const getFeaturesByPortfolioId = async (req: Request, res: Response) => {
  try {
    const { portfolioId } = req.params;
    const features = await Feature.findAll({ where: { portfolioId } });
    res.status(200).json({ features });
  } catch (error) {
    res.status(500).json({ error: "Failed to get features", details: error });
  }
};

// get individual feature by featureID itself

export const getFeatureById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const feature = await Feature.findByPk(id);
    console.log(feature)
    if (!feature) {
      return res.status(404).json({ error: "Feature not found" });
    }
    res.status(200).json({ feature });
  } catch (error) {
    res.status(500).json({ error: "Failed to get feature", details: error });
  }
}

// for updation of the key feature

export const updateFeature = async (req: Request, res: Response) => {
  try {
    //  update 
    const { id } = req.params;
    const updatedFeature = await Feature.update(req.body, {where: {id}});
    res.status(200).json({ message: "Feature updated successfully", });
  } catch (error) {
     res.status(500).json({ error: "Failed to update feature", details: error });
  }
}

// for deletion of the key feature

export const deleteFeature = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Feature.destroy({ where: { id } });
    if (deleted) {
      res.status(200).json({ message: "Feature deleted successfully" });
    } else {
      res.status(404).json({ error: "Feature not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete feature", details: error });
  }
}