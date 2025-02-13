import { QueryInterface, DataTypes } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.createTable("portfolio_details", {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
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
      type: DataTypes.TEXT,
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
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}

export async function down({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.dropTable("portfolio_details");
}






