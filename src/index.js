import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import dotenv from 'dotenv'
import routes from './routes/user'

dotenv.config()

const app = express();

app.set('port', process.env.APP_PORT)
app.set('host', process.env.APP_HOST)

app.locals.title = process.env.APP_NAME
app.locals.version = process.env.APP_VERSION

app.use(morgan('dev'))
app.use(bodyParser.json())

app.use('/api', routes)

app.get('/api', (_, response) => response.json({ message: 'You\'re Welcome' }))

app.listen(app.get('port'), app.get('host'), () => {
  console.info(`Server started at http://${app.get('host')}:${app.get('port')}/api`)
})