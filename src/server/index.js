import express from 'express'
import path from 'path'
import bodyParser from 'body-parser'
import routes from './routes/index'
import login from './routes/login'

const app = express()

app.set('view engine', 'jade')
app.set('views', path.join(__dirname, 'views'))
app.use(express.static(path.join(__dirname, '..', '..', 'dist')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

if (app.get('env') === 'development') {
  app.locals.pretty = true
}

app.use('/', routes)
app.use('/login', login)

export default app
