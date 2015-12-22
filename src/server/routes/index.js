import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index', { tabName: 'timer' })
})

router.get('/:tabName', (req, res) => {
  let tabName = req.params.tabName
  res.render(tabName, { tabName })
})

router.post('/solve', (req, res) => {
  res.end()
})

export default router
