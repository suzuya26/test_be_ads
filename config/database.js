const {
  DB_USERNAME = '',
  DB_PASSWORD = '',
  DB_HOST = '',
  DB_NAME = '',
} = process.env;

module.exports = {
  development: {
    username: 'postgres',
    password: 'password',
    database: `test_be_ads_development`,
    host: DB_HOST,
    dialect: "postgres",
  },
  test: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_test`,
    host: DB_HOST,
    dialect: "postgres",
  },
  production: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: `${DB_NAME}_production`,
    host: DB_HOST,
    dialect: "postgres",
  },
};
