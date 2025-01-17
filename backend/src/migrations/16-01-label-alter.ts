import { QueryInterface, DataTypes } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.changeColumn("labels", "description", {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  });
}

export async function down({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.changeColumn("labels", "description", {
    type: DataTypes.STRING(256),
    allowNull: false,
  });
}
