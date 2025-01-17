import { DataTypes, Model, Optional, Association } from "sequelize";
import sequelize from "../config/database";
import { Category } from "./category"; // Import Category model

interface BlogAttributes {
  id: number;
  title: string;
  categoryId: number;
  introduction: string;
  description: string;
  author: string;
  image: string;
}

interface BlogCreationAttributes extends Optional<BlogAttributes, "id"> {}

class Blog
  extends Model<BlogAttributes, BlogCreationAttributes>
  implements BlogAttributes
{
  public id!: number;
  public title!: string;
  public categoryId!: number;
  public introduction!: string;
  public description!: string;
  public author!: string;
  public image!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  // Add a Category field to Blog
  public Category!: Category;

  // Define associations as static members
  public static associations: {
    Category: Association<Blog, Category>;
  };
}

Blog.init(
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
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: Category,
        key: "id",
      },
    },
    introduction: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT("long"),
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "Hitesh Khunt",
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "blogs",
    sequelize,
    timestamps: true,
  }
);

export { Blog, BlogAttributes, BlogCreationAttributes };
