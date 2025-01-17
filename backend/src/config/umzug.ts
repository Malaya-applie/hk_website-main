import { Umzug, SequelizeStorage } from "umzug";
import sequelize from "./database";

const umzug = new Umzug({
  migrations: { glob: "src/migrations/*.ts" },
  storage: new SequelizeStorage({
    sequelize,
    modelName: "SequelizeMigrations",
  }),
  context: sequelize.getQueryInterface(),
  logger: console,
});

const seederUmzug = new Umzug({
  migrations: { glob: "src/seeders/*.ts" },
  storage: new SequelizeStorage({ sequelize, modelName: "SequelizeSeeders" }),
  context: sequelize.getQueryInterface(),
  logger: console,
});

export const runMigrations = async () => {
  await umzug.up();
};

export const runSeeders = async () => {
  await seederUmzug.up();
};
