import { useState, useEffect } from "react";
import ImageGallery from "../components/ImageGallery";
import ImageUploader from "../components/ImageUploader";
import { fetchfiles } from "../api/imageFileApi";

const ImagePage = () => {
  const [images, setImages] = useState<
    { name: string; date: string; lastModified: string }[]
  >([]);
  const [refresh, setRefresh] = useState<boolean>(false);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const files = await fetchfiles();
        setImages(files);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [refresh]); // Re-fetch images when `refresh` changes

  const refreshImages = () => {
    setRefresh((prev) => !prev); // Toggle the refresh state to trigger re-fetch
  };

  return (
    <div>
      <ImageUploader onUpload={refreshImages} />
      <ImageGallery images={images} />
    </div>
  );
};

export default ImagePage;
