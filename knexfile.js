const env = require("./src/config");

const { dbUser, dbPassword, dbPort, dbHost, dbName, dbSsl, apiPort } = env;
const conString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const migration = {
  client: "postgresql",
  development: {
    client: "postgresql",
    connection: {
      user: 'postgres',
      password: 'postgres',
      port: '5432',
      host: 'localhost',
      database: 'testing'
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};

module.exports = migration;
