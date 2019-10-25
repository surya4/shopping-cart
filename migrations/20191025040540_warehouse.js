exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('warehouse', function (table) {
      table.increments().primary();
      table.integer('seller_id').unsigned().index().references('id').inTable('seller').onDelete('restrict').onUpdate('cascade');
      table.mediumtext('about_us').collate('utf8mb4_unicode_ci');
      table.string('pictures');
      table.string('name',254).collate('utf8mb4_unicode_ci');
      table.string('email',254).unique();
      table.string('phone',32);
      table.string('street',255).collate('utf8mb4_unicode_ci');
      table.string('city',200).collate('utf8mb4_unicode_ci');
      table.string('zipcode',16).collate('utf8mb4_unicode_ci');
      table.string('state',200).collate('utf8mb4_unicode_ci');
      table.string('country',200).collate('utf8mb4_unicode_ci');
      table.string('latitude',200).collate('utf8mb4_unicode_ci');
      table.string('longitude',200).collate('utf8mb4_unicode_ci');
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('warehouse')
  ])
};