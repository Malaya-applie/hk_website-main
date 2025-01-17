import { QueryInterface, DataTypes } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.changeColumn("case_studies", "description", {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  });
  await queryInterface.changeColumn("case_studies", "points", {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  });
}

export async function down({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.changeColumn("case_studies", "description");
  await queryInterface.changeColumn("case_studies", "points");
}
