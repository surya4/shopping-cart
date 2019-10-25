exports.up = function (knex) {
  return Promise.all([
    knex.schema.createTable('users', function (table) {
      table.increments().primary();
      table.string('name',254).collate('utf8mb4_unicode_ci');
      table.string('email',254).unique();
      table.string('password');
      table.mediumtext('about_me').collate('utf8mb4_unicode_ci');
      table.string('phone',32);
      table.tinyint('verified_email').unsigned();
      table.tinyint('verified_phone').unsigned();
      table.date('DOB');
      table.string('street',255).collate('utf8mb4_unicode_ci');
      table.string('city',200).collate('utf8mb4_unicode_ci');
      table.string('zipcode',16).collate('utf8mb4_unicode_ci');
      table.string('state',200).collate('utf8mb4_unicode_ci');
      table.string('country',200).collate('utf8mb4_unicode_ci');
      table.string('picture');
      table.string('latitude',200).collate('utf8mb4_unicode_ci');
      table.string('longitude',200).collate('utf8mb4_unicode_ci');
      table.timestamps();
    })
  ])
};
//Rollback migration
exports.down = function (knex) {
  return Promise.all([
    knex.schema.dropTable('users')
  ])
};
