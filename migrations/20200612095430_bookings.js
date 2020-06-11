exports.up = function (knex) {
  return knex.schema.createTable('bookings', table => {
    table.increments('id').primary()
    table.integer('haircut_id')
    table.string('name')
    table.string('phone')
    table.string('preftime')
    table.boolean('recieveinfo')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('bookings')
}
