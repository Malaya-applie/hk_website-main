import { DataTypes, Model, Optional } from "sequelize";
import sequelize from "../config/database";

interface InquiriesAttributes {
  id: number;
  name: string;
  email: string;
  service: string;
}

interface InquiriesCreationAttributes
  extends Optional<InquiriesAttributes, "id"> {}

class Inquiries
  extends Model<InquiriesAttributes, InquiriesCreationAttributes>
  implements InquiriesAttributes
{
  public id!: number;
  public name!: string;
  public email!: string;
  public service!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Inquiries.init(
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
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "inquiries",
    sequelize, // passing the `sequelize` instance is required
    timestamps: true,
  }
);

export { Inquiries, InquiriesAttributes, InquiriesCreationAttributes };
