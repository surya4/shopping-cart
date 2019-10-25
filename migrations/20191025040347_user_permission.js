exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('user_permission', function (table) {
      table.increments().primary();
      table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('restrict').onUpdate('cascade');
      table.integer('role_id').unsigned().index().references('id').inTable('users').onDelete('restrict').onUpdate('cascade');
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('user_permission')
  ])
};
