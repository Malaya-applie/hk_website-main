import { Blog } from "./blog";
import { Category } from "./category";
import PortfolioDetails from "./portfolioDetails";
import TechnologyStack from "./technologyStack";
import Feature from "./features";
import ServicesTable from "./ServicesTable";
import ServicesImagesTable from "./servicesImagesTable";

// Define associations
Blog.belongsTo(Category, { foreignKey: "categoryId" });
Category.hasMany(Blog, { foreignKey: "categoryId" });

PortfolioDetails.hasMany(Feature, {
    foreignKey: "portfolioId", // Define foreign key in the `features` table
    as: "features", // Alias for accessing features
    onDelete: "CASCADE",  // Add this to enable cascading deletes
    hooks: true  // Enable hooks for cascading
  });
  
  Feature.belongsTo(PortfolioDetails, {
    foreignKey: "portfolioId", // Define the foreign key in the `features` table
    as: "portfolio", // Alias for accessing the associated portfolio
    onDelete: "CASCADE"  // Add this to enable cascading deletes
  });

  PortfolioDetails.hasMany(TechnologyStack, {
    foreignKey: "portfolioDetailId",
    as: "technologyStacks",
  });
  
  TechnologyStack.belongsTo(PortfolioDetails, {
    foreignKey: "portfolioDetailId",
    as: "portfolioDetail",
  });

  ServicesTable.hasMany(ServicesImagesTable, { foreignKey: "serviceTypeId" });
  ServicesImagesTable.belongsTo(ServicesTable, { foreignKey: "serviceTypeId" });



export { Blog, Category, PortfolioDetails, Feature, TechnologyStack };
