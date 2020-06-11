exports.seed = function (knex, Promise) {
    const empty = table =>
      () => knex(table).del()
  
    return empty('haircuts')()
    // Chain calls to empty in
    // order as required, e.g.:
    // .then(empty('profiles'))
  }