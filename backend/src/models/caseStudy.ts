import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface CaseStudyAttributes {
  id: number;
  title: string;
  image: string;
  description: string;
  points: string;
  button_text: string;
  button_link: string;
}

interface CaseStudyCreationAttributes
  extends Optional<CaseStudyAttributes, "id"> {}

class CaseStudy
  extends Model<CaseStudyAttributes, CaseStudyCreationAttributes>
  implements CaseStudyAttributes
{
  public id!: number;
  public title!: string;
  public image!: string;
  public description!: string;
  public points!: string;
  public button_text!: string;
  public button_link!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

CaseStudy.init(
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
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    points: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    button_text: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    button_link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "case_studies",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { CaseStudy, CaseStudyAttributes, CaseStudyCreationAttributes };
