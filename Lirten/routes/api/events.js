
const express = require('express')
const router = express.Router()
const event_controller = require('../../controllers/eventController')


// search
router.post('/search',event_controller.search)

router.get('/',event_controller.getAllEvents)

// Create a Event
router.post('/',event_controller.createEvent)

// Update a Event
router.put('/:id', event_controller.updateEvent)

// Delete a Event
router.delete('/:id',event_controller.deleteEvent)

//Find a Event by ID
router.get('/:id',event_controller.findEvent)



module.exports = router

