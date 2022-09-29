const userTableMigration = require("./20220920042952_create_table_users");

const migrations = [userTableMigration];

exports.up = async function (knex, schemaName) {
  for (let migration of migrations) {
    await migration.up(knex, schemaName);
  }
  return Promise.resolve(true);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex, schemaName) {
  for (let migration of migrations) {
    await migration.down(knex, schemaName);
  }
  return Promise.resolve(true);
};
