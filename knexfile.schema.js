const env = require("./src/config");
const parse = require("pg-connection-string").parse;

const { dbUser, dbPassword, dbPort, dbHost, dbName, dbSsl, apiPort } = env;
const conString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
const pgconfig = parse(conString);

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const migration = {
  client: "postgresql",
  development: {
    client: "postgresql",
    connection: {
      user: "postgres",
      password: "postgres",
      port: "5432",
      host: "localhost",
      database: "testing",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "schema_migration",
      schemaName: "pgvp",
    },
  },
};

function getSchemaMigration(schemaName) {
  const newMigration = { ...migration };
  newMigration.development.migrations.schemaName = schemaName;
  return newMigration;
}

module.exports = { getSchemaMigration };
// module.exports = migration;
