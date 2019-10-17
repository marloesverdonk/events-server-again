const {Router} = require('express')
const Event = require('./model')

const eventRouter = new Router

eventRouter.post('/events', (req, res, next) => {
  Event.create(req.body)
        .then(event => res.send(event))
        .catch(next)
})

eventRouter.get('/events', (req, res, next) => {
  Event.findAll()
        .then(events => res.send(events))
        .catch(next)
})

eventRouter.get('/events/:id', (req, res, next) => {
  Event.findByPk(req.params.id)
        .then(event => res.send(event))
        .catch(next)
})

eventRouter.put('/events/:id', (req, res, next) => {
  Event.findByPk(req.params.id)
        .then(event => event.update(req.body))
        .then(event => res.send(event))
        .catch(next)
})

// eventRouter.delete('/events/:id', (req, res, next) => {
//   Event.destroy({where: {id: req.params.id}})
//         .then(number => res.send({number}))
//         .catch(next)
// })

eventRouter.delete('/events/:id', (req, res, next) => {
  Event.findByPk(req.params.id)
        .then(event => event.destroy())
        .then(res.send(req.params))
        .catch(next)
})
module.exports = eventRouter