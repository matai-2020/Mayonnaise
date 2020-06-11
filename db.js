const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
  getHaircuts,
  getOneCut
}

function getHaircuts (db = database) {
  return db('haircuts').select()
}

function getOneCut (id, db = database) {
  return db('haircuts').where('id', id).first()
}
