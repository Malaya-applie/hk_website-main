import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface LabelAttributes {
  id: number;
  label: string;
  description: string;
}

interface LabelCreationAttributes extends Optional<LabelAttributes, "id"> {}

class Label
  extends Model<LabelAttributes, LabelCreationAttributes>
  implements LabelAttributes
{
  public id!: number;
  public label!: string;
  public description!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Label.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    label: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
  },
  {
    tableName: "labels",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { Label, LabelAttributes, LabelCreationAttributes };
