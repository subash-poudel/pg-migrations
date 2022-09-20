/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.raw(
    `CREATE TABLE tenant (
      id serial PRIMARY KEY,
      name VARCHAR ( 50 ) UNIQUE NOT NULL,
      description VARCHAR ( 50 ) NOT NULL,
      schema_name VARCHAR ( 5 ) UNIQUE NOT NULL
    );`
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.raw(
    `
    drop table tenant;
    `
  );
};
