import { QueryInterface, DataTypes } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.createTable("technology_stack", {
    id: {
      allowNull: false,
      autoIncrement: true,
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    technologyImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM(
        "frontend technologies",
        "server architecture",
        "backend",
        "mobile development",
        "database",
        "optional stack components",
        "cache memory",
        ""
      ),
      allowNull: false,
    },
    portfolioDetailId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      references: {
        model: "portfolio_details", // Reference the portfolio_details table
        key: "id",
      },
      onDelete: "CASCADE", // Delete related technology_stack records if portfolio_details is deleted
      onUpdate: "CASCADE", // Update foreign key if portfolio_details id changes
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
}

export async function down({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.dropTable("technology_stack");
}
