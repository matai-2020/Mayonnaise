const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getHaircuts,
  getOneCut,
  addbooking
}

function getHaircuts (db = database) {
  return db('haircuts').select()
}

function getOneCut (id, db = database) {
  return db('haircuts').where('id', id).first()
}

function addbooking (id, formdetails, db = database) {
  return db('bookings')
    .insert({
      name: formdetails.name,
      phone: formdetails.phone,
      preftime: formdetails.preftime,
      recieveinfo: formdetails.recieveinfo
    })
}
