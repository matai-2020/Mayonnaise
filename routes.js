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

router.get('/profile/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getOneCut(id)
    .then(onehaircut => {

      const cutdetails = {
        id: id,
        name: onehaircut.name,
        image: onehaircut.image,
        cost: onehaircut.cost
      }  

      res.render('/profile', cutdetails)
    }) 
    .catch(err => {
      res.status(500).send('HAIRCUT DATABASE ERROR: ' + err.message)
    })
})