exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('orders', function (table) {
      table.increments().primary();
      table.integer('product_id').unsigned().index().references('id').inTable('products').onDelete('restrict').onUpdate('cascade');
      table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('restrict').onUpdate('cascade');
      table.integer('quantity').unsigned()
      table.integer('sub_total').unsigned()
      table.enum('stage',['cart','later', 'ordered']);
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('orders')
  ])
};
