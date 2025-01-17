import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface BrandLogoAttributes {
  id: number;
  name: string;
  logo: string;
}

interface BrandLogoCreationAttributes
  extends Optional<BrandLogoAttributes, "id"> {}

class BrandLogo
  extends Model<BrandLogoAttributes, BrandLogoCreationAttributes>
  implements BrandLogoAttributes
{
  public id!: number;
  public name!: string;
  public logo!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

BrandLogo.init(
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
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "brand_logos",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { BrandLogo, BrandLogoAttributes, BrandLogoCreationAttributes };
