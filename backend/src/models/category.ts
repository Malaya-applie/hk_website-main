import { DataTypes, Model, Optional, Association } from "sequelize";
import sequelize from "../config/database";
import { Blog } from "./blog"; // Import Blog model

interface CategoryAttributes {
  id: number;
  name: string;
}

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  public id!: number;
  public name!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Define associations as static members
  public static associations: {
    Blogs: Association<Category, Blog>;
  };
}

Category.init(
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
  },
  {
    tableName: "categories",
    sequelize,
    timestamps: true,
  }
);

export { Category, CategoryAttributes, CategoryCreationAttributes };
