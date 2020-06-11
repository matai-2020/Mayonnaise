
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {id: 1, haircut_id: 1, name: 'Bob', phone: 0225689, preftime: '11:30AM', recieveinfo: true }

      ]);
    });
};
