const express = require('express')

const router = express.Router()

const db = require('./db')

module.exports = router

// Gives homepage access to all haricuts

router.get('/', (req, res) => {
  db.getHaircuts()
    .then(haircuts => {
      res.render('home', { haircuts: haircuts })
    })
    .catch(err => {
      res.status(500).send('HAIRCUT DATABASE ERROR: ' + err.message)
    })
})

// Gives profile page access to one haircut

router.get('/profile/:id', (req, res) => {
  const haircutId = Number(req.params.id)
  db.getOneCut(haircutId)
    .then(onehaircut => {
      const cutdetails = {
        id: haircutId,
        name: onehaircut.name,
        image: onehaircut.image,
        cost: onehaircut.cost
      }

      res.render('profile', cutdetails)
    })
    .catch(err => {
      res.status(500).send('HAIRCUT DATABASE ERROR: ' + err.message)
    })
})

// Bookings page
// get gives booking page access to haircut information
// post puts booking info into bookings table

router.get('/booking/:id', (req, res) => {
  const haircutId = Number(req.params.id)

  db.getOneCut(haircutId)
    .then(onehaircut => {
      const cutdetails = {
        id: haircutId,
        name: onehaircut.name,
        image: onehaircut.image,
        cost: onehaircut.cost
      }

      res.render('booking', cutdetails)
    })
    .catch(err => {
      res.status(500).send('HAIRCUT DATABASE ERROR: ' + err.message)
    })

  // console.log('Hello World', id)
})

router.post('/booking/:id', (req, res) => {
  const { name, phone, preftime, recieveinfo } = req.body
  const formdetails = { name, phone, preftime, recieveinfo }
  const haircutId = Number(req.params.id)
  // console.log(formdetails)
  // console.log(id)
  db.addbooking(haircutId, formdetails)
    .then(([bookingId]) => {
      console.log(bookingId)
      res.redirect(`/confirmation/${bookingId}`)})
    .catch(err => {
      res.status(500).send('POST ERROR: ' + err.message)
    })
})

// Confirmation route
// user needs to have access to haircuts table and bookings details

router.get('/confirmation/:id', (req, res) => {
  const bookingId = Number(req.params.id)

  console.log('get route booking id: ', bookingId)

  db.getBookingInfo(bookingId)
    .then(joinedtables => {
      console.log(joinedtables)
    })
    .catch(err => {
      res.status(500).send('CONFIRMATION ERROR: ' + err.message)
    })
})
