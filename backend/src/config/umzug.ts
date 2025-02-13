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

// export const resetMigrations = async () => {
//   try {
//     // Down all migrations
//     await umzug.down({ to: 0 });
//     console.log('All migrations have been reverted');
    
//     // Up all migrations again
//     await umzug.up();
//     console.log('All migrations have been reapplied');
//   } catch (error) {
//     console.error('Error resetting migrations:', error);
//     throw error;
//   }
// };


// export const getMigrationStatus = async () => {
//   const pending = await umzug.pending();
//   const executed = await umzug.executed();
//   return {
//     pending: pending.map(m => m.name),
//     executed: executed.map(m => m.name)
//   };
// };



export const runSeeders = async () => {
  await seederUmzug.up();
};
