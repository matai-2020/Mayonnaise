exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('haircuts').del()
    .then(function () {
      // Inserts seed entries
      return knex('haircuts').insert([
        { id: 1, name: 'mullet', image: '/images/mullet.jpg', cost: '$10' },
        { id: 2, name: 'number1', image: '/images/num1.jpg', cost: 'Free' },
        { id: 3, name: 'crew', image: '/images/crew.jpg', cost: '$50' }
      ])
    })
}
