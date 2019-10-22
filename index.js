const express = require('express')
const port = 4000
const db = require('./db')

const Event = require('./event/model')
//const User = require('./user/model')

//Routers
const loginRouter = require('./auth/router')
const eventRouter = require('./event/router')
const userRouter = require('./user/router')

const cors = require('cors')
const bodyParser = require('body-parser')
const corsMiddleware = cors()
const parserMiddleware = bodyParser.json()

const app = express()

// const loggingMiddleWare = (req, res, next) => {
//   console.log('I am a Middleware', Date.now())
//   next()
// }

// app.use(loggingMiddleWare)
app.use(corsMiddleware)
app.use(parserMiddleware)
app.use(eventRouter)
app.use(loginRouter)
app.use(userRouter)



app.listen(port, () => console.log(`listening on port ${port}`))