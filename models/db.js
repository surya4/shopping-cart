const envConfig = require('../knexfile').development;;
console.info("db envConfig -->", envConfig)

const knex_read_config = envConfig;
const knex_write_config = envConfig;

const knex_read = require('knex')(knex_read_config);
const knex_write = require('knex')(knex_write_config);

if (process.env.RUN_MIGRATIONS) {
    console.log("inside migrate")
    knex_write.migrate.latest([envConfig]);
};

module.exports = {
    read: knex_read,
    write: knex_write
};
