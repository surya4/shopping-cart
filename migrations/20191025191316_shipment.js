exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('shipment', function (table) {
      table.increments().primary();
      table.integer('user_id').unsigned().index().references('id').inTable('users').onDelete('restrict').onUpdate('cascade');
      table.integer('order_id').unsigned().index().references('id').inTable('orders').onDelete('restrict').onUpdate('cascade');
      table.string('carier_company');
      table.integer('carier_id').unsigned();
      table.integer('tracking_id').unsigned();
      table.enum('status',['preparing','shipped', 'delivered']);
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('shipment')
  ])
};