import multer from "multer";
import path from "path";
import fs from "fs";

// Check if uploads folder exists, if not, create it
const uploadPath = path.join(__dirname, "../../uploads");
if (!fs.existsSync(uploadPath)) {
  fs.mkdirSync(uploadPath);
}

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadPath); // Specify the directory to save uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Append timestamp to the filename
  },
});

// Create the multer instance
const upload = multer({ storage });

export default upload;
