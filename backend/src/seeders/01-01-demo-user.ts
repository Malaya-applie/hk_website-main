import { QueryInterface } from "sequelize";

export async function up({
  context: queryInterface,
}: {
  context: QueryInterface;
}) {
  await queryInterface.bulkInsert("Users", [
    {
      firstName: "Admin",
      lastName: "User",
      email: "admin@example.com",
      password: "$2b$10$nOnx6Xs0GRR3.picLOZGLu3gHb5L.ZoxyFtaJkW/vxoZfyy5aRPa2", // In a real application, make sure to hash the password
      role: "admin",
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
  await queryInterface.bulkDelete("Users", { email: "admin@example.com" }, {});
}
