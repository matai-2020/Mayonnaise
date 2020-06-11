const express = require('express')

const router = express.Router()

const db = require('./db')

module.exports = router

router.get('/', (req, res) => {
  db.getHaircuts()
    .then(haircuts => {
      res.render('/', { haircuts: haircuts })
    }) 
    .catch(err => {
      res.status(500).send('HAIRCUT DATABASE ERROR: ' + err.message)
    })
})
