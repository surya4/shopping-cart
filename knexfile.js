exports.envConfig = {
  client: 'mysql',
  connection: {
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASS,
    database : process.env.DB_NAME
  },
  pool: {
    max: (process.env.DB_MAX_POOL)?parseInt(process.env.DB_MAX_POOL):50,
    min: 1
  },
};
