import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface PortfolioAttributes {
  id: number;
  title: string;
  image: string;
  heading: string;
  problem: string;
  solution: string;
  impact_1_title?: string;
  impact_1_stats?: string;
  impact_2_title?: string;
  impact_2_stats?: string;
  impact_3_title?: string;
  impact_3_stats?: string;
  impact_4_title?: string;
  impact_4_stats?: string;
}

interface PortfolioCreationAttributes
  extends Optional<PortfolioAttributes, "id"> {}

class Portfolio
  extends Model<PortfolioAttributes, PortfolioCreationAttributes>
  implements PortfolioAttributes
{
  public id!: number;
  public title!: string;
  public image!: string;
  public heading!: string;
  public problem!: string;
  public solution!: string;
  public impact_1_title!: string;
  public impact_1_stats!: string;
  public impact_2_title!: string;
  public impact_2_stats!: string;
  public impact_3_title!: string;
  public impact_3_stats!: string;
  public impact_4_title!: string;
  public impact_4_stats!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Portfolio.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heading: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    problem: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    solution: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    impact_1_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_1_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_2_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_2_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_3_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_3_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_4_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_4_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "portfolios",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { Portfolio, PortfolioAttributes, PortfolioCreationAttributes };
