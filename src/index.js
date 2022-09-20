const env = require("./config");
const knex = require("knex");
const parse = require("pg-connection-string").parse;

console.log(env);

const { dbUser, dbPassword, dbPort, dbHost, dbName, dbSsl, apiPort } = env;
const conString = `postgres://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`;
console.log(conString);
const pgconfig = parse(conString);

const db = knex({
  client: "pg",
  connection: pgconfig,
});

const response = db.raw(
  `select * from tenant_test;`
).then(d => console.log(d.rows));
// console.log(response);
