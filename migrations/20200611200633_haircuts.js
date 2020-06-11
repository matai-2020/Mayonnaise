
exports.up = function(knex) {
  return knex.schema.createTable('haircuts', table => {
      table.increments('id').primary()
      table.string('name')
      table.string('image')
      table.string('cost')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('haircuts')
};
