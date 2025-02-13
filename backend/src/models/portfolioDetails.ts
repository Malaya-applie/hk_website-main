import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";


const PortfolioDetails  = sequelize.define(
    'PortfolioDetails',
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      clientName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      tagline: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      logo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      introduction: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      heroImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectOverviewHeading: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      projectOverviewDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      projectOverviewImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      challengeIconImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      challengeHeading: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      challengeDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      solutionIconImage: {
        type: DataTypes.STRING,
        allowNull: false
      },
      solutionHeading: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      solutionDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      solutionDevelopmentHeading: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      solutionDevelopmentDescription: {
        type: DataTypes.TEXT,
        allowNull:false
      },
      solutionImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      keyFeaturesHeading: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      conclusionHeading: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      conclusionDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      securityHeading: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      securityDescription: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      // Other model options go here
      tableName: "portfolio_details", 
    timestamps: true,
    },
  );

  export default PortfolioDetails