exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('products', function (table) {
      table.increments().primary();
      table.string('sku',254).collate('utf8mb4_unicode_ci');
      table.string('name',254).unique();
      table.integer('seller_id').unsigned().index().references('id').inTable('seller').onDelete('restrict').onUpdate('cascade');
      table.integer('warehouse_id').unsigned().index().references('id').inTable('warehouse').onDelete('restrict').onUpdate('cascade');
      table.string('picture');
      table.integer('quantity').unsigned()
      table.integer('price').unsigned()
      table.integer('one_time_limit').unsigned()
      table.string('currency');
      table.tinyint('available');
      table.mediumtext('description').collate('utf8mb4_unicode_ci');
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('products')
  ])
};