
exports.up = function(knex) {
  return Promise.all([
      knex.schema.createTable('invalid_token', function (table) {
          table.increments();
          table.text('token');
          table.integer('expiry');
          table.timestamps();
      })
  ])
};
//Rollback migration
exports.down = function(knex) {
  return Promise.all([
      knex.schema.dropTable('invalid_token')
  ])
};
