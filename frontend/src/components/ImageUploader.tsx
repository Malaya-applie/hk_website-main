import React, { useState } from "react";
import { createFile } from "../api/imageFileApi";
import { Button } from "./ui/button";

const ImageUploader = ({ onUpload }: { onUpload: () => void }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUpload = async () => {
    if (file) {
      try {
        const uploadedImage = await createFile({ image: [file] });
        navigator.clipboard.writeText(
          `${import.meta.env.VITE_API_URL}/api/img/${uploadedImage}`
        );

        onUpload(); // Callback to refresh the image list
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <div className="mb-4">
      <h2>Upload Image</h2>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <Button
        className="w-fit text-secondary bg-primary"
        onClick={handleUpload}
      >
        Upload
      </Button>
    </div>
  );
};

export default ImageUploader;
