
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bookings').del()
    .then(function () {
      // Inserts seed entries
      return knex('bookings').insert([
        {id: 1, haircut_id: 1, name: 'Bob', phone: 022545689, preftime: '11:00AM', recieveinfo: true },
        {id: 2, haircut_id: 2, name: 'Steve', phone: 02564549, preftime: '11:30AM', recieveinfo: true },
        {id: 3, haircut_id: 3, name: 'Sam', phone: 0274539889, preftime: '14:30AM', recieveinfo: false },
        {id: 4, haircut_id: 1, name: 'Sue', phone: 0227385689, preftime: '15:00AM', recieveinfo: true },
        {id: 5, haircut_id: 3, name: 'Joe', phone: 021467689, preftime: '15:30AM', recieveinfo: false }
      ]);
    });
};
