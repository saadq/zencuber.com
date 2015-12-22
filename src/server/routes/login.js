import express from 'express'
const router = express.Router()

router.get('/register', (req, res) => {
  res.render('register')
})

router.get('/sign-in', (req, res) => {
  res.render('sign-in')
})

export default router
