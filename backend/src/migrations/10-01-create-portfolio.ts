import { QueryInterface, DataTypes } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.createTable("portfolios", {
    id: {
      allowNull: false,
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heading: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    problem: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    solution: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    impact_1_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_1_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_2_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_2_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_3_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_3_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_4_title: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    impact_4_stats: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
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
  await queryInterface.dropTable("portfolios");
}
