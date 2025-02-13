import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";


const Feature = sequelize.define(
    "Feature",
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      portfolioId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "PortfolioDetails", // Table name
          key: "id", // Primary key of PortfolioDetails
        },
        onDelete: "CASCADE"  // Add this to enable cascading deletes
      },
    },
    {
      tableName: "features",
      timestamps: true,
    }
  );
  
  export default Feature;