import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";


const TechnologyStack = sequelize.define(
    "TechnologyStack",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      technologyImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      type: {
        type: DataTypes.ENUM(
          "frontend technologies",
          "server architecture",
          "backend",
          "mobile development",
          "database",
          "optional stack components",
          "cache memory",
          ""
        ),
        allowNull: false,
      },
      portfolioDetailId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        references: {
          model: "PortfolioDetails", // Reference the PortfolioDetails model
          key: "id",
        },
        onDelete: "CASCADE", // Optional: Handle deletion behavior
      },
    },
    {
      tableName: "technology_stack",
      timestamps: true, // Add timestamps
    }
  );

  export default TechnologyStack;