const express = require('express')
const questionController = require('./controllers/question-controller')
const roomController = require('./controllers/room-controller')

const route = express.Router()

route.get('/', (req, res) => res.render('index', {page: 'enter-room'}))
route.get('/create-room', (req, res) => res.render('index', {page: 'create-room'}))
route.get('/room/:room', (req, res) => res.render('room'))

// formato que o formulário da modal passa a info:
route.post('/question/:room/:question/:action', questionController.index)
route.post('/create-room', roomController.create)


module.exports = route