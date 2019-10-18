const express = require('express')
const port = 4000
const db = require('./db')
const loginRouter = require('./auth/router')

const Event = require('./event/model')
const eventRouter = require('./event/router')

const cors = require('cors')
const bodyParser = require('body-parser')
const corsMiddleware = cors()
const parserMiddleware = bodyParser.json()

const app = express()

app.use(corsMiddleware)
app.use(parserMiddleware)
app.use(eventRouter)
app.use(loginRouter)



app.listen(port, () => console.log(`listening on port ${port}`))