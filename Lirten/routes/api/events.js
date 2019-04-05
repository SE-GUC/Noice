
const express = require('express')
const router = express.Router()
const event_controller = require('../../controllers/eventController')


router.get('/',event_controller.getAllEvents)

// Create a Event
router.post('/',event_controller.createEvent)

// Update a Event
router.put('/', event_controller.updateEvent)

// Delete a Event
router.delete('/',event_controller.deleteEvent)

//Find a Event by ID
router.get('/',event_controller.findEvent)



module.exports = router

