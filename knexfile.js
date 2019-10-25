// const envConfig = {
//   client: 'mysql',
//   connection: {
//     host : process.env.DB_HOST,
//     user : process.env.DB_USER,
//     password : process.env.DB_PASS,
//     database : process.env.DB_NAME
//   },
//   pool: {
//     max: (process.env.DB_MAX_POOL)?parseInt(process.env.DB_MAX_POOL):50,
//     min: 1
//   },
// };

// module.exports = envConfig;


const envConfig = {
  client: 'mysql',
  connection: {
    host : '127.0.0.1',
    user : 'root',
    password : 'root',
    database : 'shop'
  },
  pool: {
    max: (process.env.DB_MAX_POOL)?parseInt(process.env.DB_MAX_POOL):50,
    min: 1
  },
};

console.log("envConfig", envConfig)

module.exports = { envConfig };