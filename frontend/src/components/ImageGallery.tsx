import { useState } from "react";

const ImageGallery = ({
  images,
}: {
  images: { name: string; date: string; lastModified: string }[];
}) => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleCopy = (url: string, index: number) => {
    navigator.clipboard.writeText(url).then(
      () => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(null), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  return (
    <div className="rounded-lg">
      <h2 className="text-xl font-bold mb-4">Image Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => {
          const imageUrl = `${import.meta.env.VITE_API_URL}/api/img/${
            image.name
          }`;
          return (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-3 text-center bg-muted-foreground"
            >
              <img
                src={imageUrl}
                alt={`Image ${index}`}
                className="w-full h-auto rounded-md"
              />
              <p className="mt-2 text-sm text-primary">{imageUrl}</p>
              {/* <p className="mt-2 text-sm text-gray-600">{image.date}</p> */}
              <button
                onClick={() => handleCopy(imageUrl, index)}
                className="mt-2 px-3 py-1 bg-secondary text-white rounded hover:bg-secondary transition-colors"
              >
                {copiedIndex === index ? "Copied" : "Copy URL"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGallery;
