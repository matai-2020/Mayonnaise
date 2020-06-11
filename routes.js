const express = require('express')

const router = express.Router()

const db = require('./db')

module.exports = router

router.get('/', (req, res) => {
  db.getHaircuts()
    .then(haircuts => {
      res.render('haircut/index', { haircuts: haircuts })
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

// Bookings page

router.get('/booking/:id', (req, res) => {
  const id = Number(req.params.id)

  db.getOneCut(id)
    .then(onehaircut => {
      const cutdetails = {
        id: id,
        name: onehaircut.name,
        image: onehaircut.image,
        cost: onehaircut.cost
      }

      res.render('/booking', cutdetails)
    })
    .catch(err => {
      res.status(500).send('HAIRCUT DATABASE ERROR: ' + err.message)
    })

  // console.log('Hello World', id)
})

router.post('/booking/:id', (req, res) => {
  const { name, phone, preftime, recieveinfo } = req.body
  const formdetails = { name, phone, preftime, recieveinfo }
  const id = Number(req.params.id)
  // console.log(formdetails)
  // console.log(id)
  db.addbooking(id, formdetails)

})
