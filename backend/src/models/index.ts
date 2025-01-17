import { Blog } from "./blog";
import { Category } from "./category";

// Define associations
Blog.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Blog, { foreignKey: "categoryId" });

export { Blog, Category };
