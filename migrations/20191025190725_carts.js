exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('carts', function (table) {
      table.increments().primary();
      table.integer('product_id').unsigned().index().references('id').inTable('products').onDelete('restrict').onUpdate('cascade');
      table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('restrict').onUpdate('cascade');
      table.integer('quantity').unsigned()
      table.integer('sub_total').unsigned()
      table.enum('stage',['cart','later', 'ordered', 'cancelled']);
      table.integer('order_id').unsigned().index().references('id').inTable('orders').onDelete('restrict').onUpdate('cascade');
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('carts')
  ])
};