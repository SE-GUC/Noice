const express = require('express')
const router = express.Router()
const location_controller = require('../../controllers/locationControllers')
const event_controller = require('../../controllers/eventController')



router.get('/',location_controller.getAllLocations)

router.post('/',location_controller.createLocation)

router.put('/:id', location_controller.updateLocation)

router.delete('/:id',location_controller.deleteLocation)

router.get('/:id',location_controller.findLocation)

// Create a Event
router.post('/',event_controller.createEvent)

// Update a Event
router.put('/:id', event_controller.updateEvent)

// Delete a Event
router.delete('/:id',event_controller.deleteEvent)

//Find a Event by ID
router.get('/:id',event_controller.findEvent)

//Show all Events
router.get('/',event_controller.getAllEvents)




 module.exports = router
