const { Router } = require('express')
const { toJWT, toData } = require('./jwt')

const router = new Router()

router.post('/login', (req, res, next) => {

  req.body.email && req.body.password ? 
  res.send({
    jwt: toJWT({ userId: 1 })
  }) :
  res.status(400).send({
    message: 'Please supply a valid email and password'
  })
})

router.get('/secret-endpoint', (req, res) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    const data = toData(auth[1])
    res.send({
      message: 'Thanks for visiting the secret endpoint.',
      data
    })
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
})

module.exports = router