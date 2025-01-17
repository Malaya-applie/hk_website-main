import { Request, Response } from "express";
import path from "path";
import fs from "fs";

export const getLogoById = (req: Request, res: Response) => {
  const { id } = req.params;

  // Construct the path to the logo image
  const imagePath = path.join(__dirname, "../../uploads", `${id}`); // Adjust the path and extension as needed

  // Check if the file exists
  fs.access(imagePath, fs.constants.F_OK, (err) => {
    if (err) {
      return res.status(404).json({ message: "Image not found" });
    }

    // Send the image file
    res.sendFile(imagePath);
  });
};
