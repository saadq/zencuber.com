import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/solve', (req, res) => {
  res.end()
})

export default router
