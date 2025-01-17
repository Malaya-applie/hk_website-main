import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface SocialMediaAttributes {
  id: number;
  name: string;
  link: string;
  logo: string;
}

interface SocialMediaCreationAttributes
  extends Optional<SocialMediaAttributes, "id"> {}

class SocialMedia
  extends Model<SocialMediaAttributes, SocialMediaCreationAttributes>
  implements SocialMediaAttributes
{
  public id!: number;
  public name!: string;
  public link!: string;
  public logo!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

SocialMedia.init(
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
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    logo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "social_media",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { SocialMedia, SocialMediaAttributes, SocialMediaCreationAttributes };
