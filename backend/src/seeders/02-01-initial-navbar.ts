import { QueryInterface } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.bulkInsert("Navbar", [
    {
      name: "ABOUT ME",
      link: "/about-me",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "ACHIEVEMENTS",
      link: "/achievements",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "SOLUTIONS",
      link: "/solutions",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "BLOG",
      link: "/blog",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);
}

export async function down({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.bulkDelete("Navbar", { name: "ABOUT ME" }, {});
  await queryInterface.bulkDelete("Navbar", { name: "ACHIEVEMENTS" }, {});
  await queryInterface.bulkDelete("Navbar", { name: "SOLUTIONS" }, {});
  await queryInterface.bulkDelete("Navbar", { name: "BLOG" }, {});
}
