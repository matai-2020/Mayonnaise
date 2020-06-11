const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const database = require('knex')(config)

module.exports = {
    getHaircuts
}

function getHaircuts (db = database) {
    return db('haircuts').select()
}