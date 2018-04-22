import * as next from 'next'
import * as cookiesMiddleware from 'universal-cookie-express'
import * as compression from 'compression'
import * as express from 'express'
import routes from './routes'
const dotenv = require('dotenv')

dotenv.config()
const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })

const handler = routes.getRequestHandler(app)

app.prepare().then(() => {
    const server = express()
    server.use(cookiesMiddleware())
    server.use(compression())
    server.use(handler)
    server.listen(port)
})
