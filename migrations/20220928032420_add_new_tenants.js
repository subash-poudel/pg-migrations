/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.raw(
    `insert into tenant values(1, 'othello', 'othello tenant', 'oth'),(2, 'pgvp', 'pgvp tenant', 'pgvp');`
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.raw(`delete from tenant where id in (1, 2);`);
};
