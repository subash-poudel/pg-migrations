const dotenv = require("dotenv");
dotenv.config();

const { DB_USER, DB_PASSWORD, DB_PORT, DB_HOST, DB_NAME, DB_SSL, API_PORT } =
  process.env;

const env = {
  dbUser: DB_USER,
  dbPassword: DB_PASSWORD,
  dbPort: DB_PORT,
  dbHost: DB_HOST,
  dbName: DB_NAME,
  dbSsl: DB_SSL,
  apiPort: API_PORT,
};

module.exports = env;
