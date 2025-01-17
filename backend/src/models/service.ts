import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface ServicesAttributes {
  id: number;
  name: string;
  icon: string;
  description: string;
}

interface ServicesCreationAttributes
  extends Optional<ServicesAttributes, "id"> {}

class Services
  extends Model<ServicesAttributes, ServicesCreationAttributes>
  implements ServicesAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public icon!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Services.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    icon: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "default icon.jpg",
    },
  },
  {
    tableName: "services",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { Services, ServicesAttributes, ServicesCreationAttributes };
