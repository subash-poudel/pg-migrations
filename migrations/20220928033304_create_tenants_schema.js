const schemaMigration = require("../schema_migration/schemaMigrationHelper");
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const dbResponse = await knex.raw(`select schema_name from tenant;`);
  const rows = dbResponse.rows;
  console.log(rows);
  const promises = rows.map((r) => {
    return knex.raw(`create schema ${r.schema_name}`);
  });
  await Promise.all(promises);
  // all schemas created.
  const pms = rows.map(async (r) => {
    await schemaMigration.up(knex, r.schema_name);
  });
  return Promise.resolve(true);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
  const dbResponse = await knex.raw(`select schema_name from tenant;`);
  const rows = dbResponse.rows;
  rows.map(async (r) => {
    await schemaMigration.down(knex, r.schema_name);
  });
  const promises = rows.map((r) => {
    console.log(r, "in map");
    return knex.raw(`drop schema ${r.schema_name}`);
  });
  return Promise.all(promises);
};
