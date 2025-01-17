import { Request, Response } from "express";
import { Label } from "../models/label";

// Get all labels
export const getLabels = async (req: Request, res: Response) => {
  try {
    const labels = await Label.findAll();
    res.json(labels);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch labels" });
  }
};

// Create a new label
export const createLabel = async (req: Request, res: Response) => {
  try {
    const label = await Label.create(req.body);
    res.status(201).json(label);
  } catch (error) {
    res.status(500).json({ error: "Failed to create label" });
  }
};

// Update a label
export const updateLabel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const [updated] = await Label.update(req.body, { where: { id } });
    if (updated) {
      const updatedLabel = await Label.findOne({ where: { id } });
      res.status(200).json(updatedLabel);
    } else {
      res.status(404).json({ error: "Label not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update label" });
  }
};

// Delete a label
export const deleteLabel = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await Label.destroy({ where: { id } });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Label not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete label" });
  }
};

// Delete multiple labels
export const deleteMultipleLabels = async (req: Request, res: Response) => {
  const { ids } = req.body;
  try {
    await Label.destroy({ where: { id: { $in: ids } } });
    res.status(200).json({ message: "Labels deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete labels", error });
  }
};
