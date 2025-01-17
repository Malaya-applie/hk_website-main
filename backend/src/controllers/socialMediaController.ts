import { Request, Response } from "express";
import { SocialMedia } from "../models/socialMedia"; // Adjust the import based on your project structure
import { deleteImage } from "../utils/imageDelete";

// Get all social medias
export const getSocialMedias = async (req: Request, res: Response) => {
  try {
    const socialMedias = await SocialMedia.findAll();
    res.json(socialMedias);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch social medias" });
  }
};

// Create a new social media
export const createSocialMedia = async (req: Request, res: Response) => {
  try {
    const { name, link } = req.body;
    const logoPath = req.file?.filename as string;

    const socialMedia = await SocialMedia.create({
      name,
      link,
      logo: logoPath, // Save the relative logo path in the database
    });
    res.status(201).json(socialMedia);
  } catch (error) {
    console.log(error);

    res.status(500).json({ error: "Failed to create social media" });
  }
};

// Update a social media
export const updateSocialMedia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, link } = req.body;
    const logoPath = req.file?.filename; // Get the filename of the uploaded logo if it exists

    const updatedData: any = { name, link };
    if (logoPath) {
      updatedData.logo = logoPath; // Update logo path if a new one is uploaded
      const existingLogo = await SocialMedia.findOne({ where: { id } });
      if (!existingLogo) {
        return res.status(404).json({ error: "Social media not found" });
      }
      deleteImage(existingLogo.logo);
    }

    const [updated] = await SocialMedia.update(updatedData, { where: { id } });
    if (updated) {
      const updatedSocialMedia = await SocialMedia.findOne({ where: { id } });
      res.status(200).json(updatedSocialMedia);
    } else {
      res.status(404).json({ error: "Social media not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to update social media" });
  }
};

// Delete a social media
export const deleteSocialMedia = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const existing = await SocialMedia.findOne({ where: { id } });
    if (!existing) {
      return res.status(404).json({ error: "Social media not found" });
    }
    deleteImage(existing.logo);

    const deleted = await SocialMedia.destroy({ where: { id } });

    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ error: "Social media not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to delete social media" });
  }
};
