
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('haircuts').del()
    .then(function () {
      // Inserts seed entries
      return knex('haircuts').insert([
        {id: 1, name: 'mullet', image: 'mullet.jpg', cost: '$10'},
        {id: 2, name: 'number1', image: 'num1.jpg', cost: 'Free'},
        {id: 3, name: 'crew', image: 'crew.jpg', cost: '$50'}
      ]);
    });
};
