const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getHaircuts,
  getOneCut,
  addbooking,
  getBookingInfo
}

function getHaircuts (db = database) {
  return db('haircuts').select()
}

function getOneCut (haircutId, db = database) {
  return db('haircuts').where('id', haircutId).first()
}

function addbooking (haircutId, formdetails, db = database) {
  return db('bookings')
    .insert({
      haircut_id: haircutId,
      name: formdetails.name,
      phone: formdetails.phone,
      preftime: formdetails.preftime,
      recieveinfo: formdetails.recieveinfo
    })
}

function getBookingInfo (bookingId, db = database) {
  return db('bookings')
    .join('haircuts', 'bookings.haircut_id', 'haircuts.id')
    .where('bookings.id', bookingId)
    .select('haircuts.name as cut', 'haircuts.cost', 'bookings.name', 'bookings.preftime')
}
