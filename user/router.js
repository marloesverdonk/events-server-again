const { Router } = require("express")
const User = require('./model')
const bcrypt = require("bcrypt")

const router = new Router()

router.post('/users', (req, res, next) => {
  User.create({
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10) ///10 is the salt, can be any number
  })
      .then(() => res.status(201).send({message: "User created succesfully"}))
      .catch(next)
})

module.exports = router

