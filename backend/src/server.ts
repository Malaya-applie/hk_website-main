import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // Import cors
import path from "path";
import sequelize from "./config/database";
import { runMigrations, runSeeders } from "./config/umzug";
import router from "./routes/index";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(
  cors({
    origin: [
      "http://3.111.143.152",
      "http://localhost:5173",
      "http://localhost:4173",
    ],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
    exposedHeaders: ["set-cookie"],
  })
); // Use cors middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/uploads", express.static(path.join(__dirname, "../../uploads")));

app.use(express.json());
app.use("/api", router);

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected!");
    // await runMigrations();
    // console.log("Migrations completed!");
    // await runSeeders();
    // console.log("Seeders completed!");
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

startServer();
