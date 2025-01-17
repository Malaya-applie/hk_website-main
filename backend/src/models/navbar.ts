import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database"; // Adjust the import based on your project structure

interface NavbarAttributes {
  id: number;
  name: string;
  link: string;
}

interface NavbarCreationAttributes extends Optional<NavbarAttributes, "id"> {}

class Navbar
  extends Model<NavbarAttributes, NavbarCreationAttributes>
  implements NavbarAttributes
{
  public id!: number;
  public name!: string;
  public link!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Navbar.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
  },
  {
    tableName: "navbar",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { Navbar, NavbarAttributes, NavbarCreationAttributes };
