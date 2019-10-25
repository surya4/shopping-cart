exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('user_role', function (table) {
      table.increments().primary();
      table.enum('role',['admin','customer', 'seller']);
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('user_role')
  ])
};
