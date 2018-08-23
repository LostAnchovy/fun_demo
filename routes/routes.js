var express = require('express')
var router = express.Router()
var db = require('../config/db.config.js')
const user = require('../controllers/user.controller')
const event = require('../controllers/event.controllers')

router.post('/api/events', event.create)
router.get('/api/events', event.findAll)
router.get('/api/event/:eventId', event.findById)
router.put('/api/events/:eventId', event.update)
router.delete('api/event/:eventId', event.delete)

router.post('/api/users', user.create)
router.get('/api/users', user.findAll)
router.get('/api/user/:userId', user.findById)
router.put('/api/user/:userId', user.update)
router.delete('/api/user/:userId', user.delete)

module.exports = router;

