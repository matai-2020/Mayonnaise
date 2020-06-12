const express = require('express')
const hbs = require('express-handlebars')
const routes = require('./routes')
const path = require('path')

const server = express()
const staticFolder = path.join(__dirname, 'public')
server.engine('hbs', hbs({ defaultLayout: 'main', extname: 'hbs' }))
server.set('view engine', 'hbs')
server.use(express.static(staticFolder))
server.use(express.urlencoded({ extended: false }))

server.use('/', routes)

module.exports = server
