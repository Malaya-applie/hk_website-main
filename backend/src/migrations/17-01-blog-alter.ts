import { QueryInterface, DataTypes } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.changeColumn("blogs", "introduction", {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  });
  await queryInterface.changeColumn("blogs", "description", {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  });
}

export async function down({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.changeColumn("blogs", "introduction", {
    type: DataTypes.STRING,
    allowNull: false,
  });
  await queryInterface.changeColumn("blogs", "description", {
    type: DataTypes.TEXT,
    allowNull: false,
  });
}
