
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('haircuts').del()
    .then(function () {
      // Inserts seed entries
      return knex('haircuts').insert([
        {id: 1, name: 'mullet', image: '', cost: ''},
        {id: 2, name: 'kinna', image: '', cost: ''},
        {id: 3, name: 'crew', image: '', cost: ''}
      ]);
    });
};
