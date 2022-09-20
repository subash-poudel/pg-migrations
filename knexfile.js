// Update with your config settings.
const env = require("./src/config");
const parse = require("pg-connection-string").parse;

// console.log(env);

const { dbUser, dbPassword, dbPort, dbHost, dbName, dbSsl, apiPort } = env;
const conString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
console.log(conString);
const pgconfig = parse(conString);


/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const migration = {
  client: "postgresql",
  production: {
    client: "postgresql",
    connection: {
      host: '127.0.0.1',
      port: dbPort,
      user: dbUser,
      password: dbPassword,
      database: "testing",
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

console.log(migration);

module.exports = migration;
