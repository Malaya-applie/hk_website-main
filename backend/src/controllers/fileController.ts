import { Request, Response } from "express";
import fs from "fs";
import path from "path";

export const listUploadedFiles = (req: Request, res: Response) => {
  const uploadsDir = path.join(__dirname, "../../uploads");

  fs.readdir(uploadsDir, (err, files) => {
    if (err) {
      return res
        .status(500)
        .json({ error: "Failed to read uploads directory" });
    }
    const fileData = files.map((file) => {
      const stats = fs.statSync(path.join(uploadsDir, file));
      const lastModified = new Date(stats.mtime);
      return {
        name: file,
        date: lastModified.toLocaleString(),
        lastModified: lastModified,
      };
    });
    // Sort the fileData in descending order of date and time
    fileData.sort(
      (a, b) => b.lastModified.getTime() - a.lastModified.getTime()
    );

    res.json(fileData);
  });
};
export const UploadFile = (req: Request, res: Response) => {
  try {
    const imagePath = req.file?.filename as string;
    res.status(201).json(imagePath);
  } catch (error) {
    res.status(500).json({ error: "Failed to upload image" });
  }
};
