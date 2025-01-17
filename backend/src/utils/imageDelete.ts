import fs from "fs";
import path from "path";

export const deleteImage = (image: string) => {
  if (image === "default user.jpg" || image === "default icon.jpg") return;
  const oldLogoPath = path.join(__dirname, "..", "..", "uploads", image);
  fs.unlink(oldLogoPath, (err) => {
    if (err) {
      console.error("Failed to delete old image:", err);
    }
  });
};
