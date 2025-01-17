import { Request, Response } from "express";
import { ClientFeedback } from "../models/clientFeedback";
import { deleteImage } from "../utils/imageDelete";

// Get all client feedback
export const getFeedbacks = async (req: Request, res: Response) => {
  try {
    const feedbacks = await ClientFeedback.findAll();
    res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch client feedbacks" });
  }
};

// Create a new client feedback
export const createFeedback = async (req: Request, res: Response) => {
  try {
    const { name, company, position, feedback } = req.body;
    const userImagePath = req.file?.filename as string;

    const feedbackData = await ClientFeedback.create({
      name,
      feedback,
      position,
      company,
      userimage: userImagePath,
    });
    res.status(201).json(feedbackData);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to create client feedback" });
  }
};

// Update a client feedback
export const updateBrandLogo = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, company, position, feedback } = req.body;
    const userImagePath = req.file?.filename;

    const updatedData: any = { name, company, position, feedback };
    if (userImagePath) {
      updatedData.userimage = userImagePath;
      const existingUserImage = await ClientFeedback.findOne({ where: { id } });
      if (!existingUserImage) {
        return res.status(404).json({ error: "User Image not found" });
      }
      deleteImage(existingUserImage.userimage);
    }

    const [updated] = await ClientFeedback.update(updatedData, {
      where: { id },
    });
    if (updated) {
      const updatedClientFeedback = await ClientFeedback.findOne({
        where: { id },
      });
      res.status(200).json(updatedClientFeedback);
    } else {
      res.status(404).json({ error: "Client feedback not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update client feedback" });
  }
};

// Delete a client feedback
export const deleteClientFeedback = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await ClientFeedback.findOne({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Client feedback not found" });
    }
    deleteImage(existing.userimage);

    const deleted = await ClientFeedback.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Client feedback not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete client feedback" });
  }
};
