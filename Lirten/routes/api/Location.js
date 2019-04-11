const express = require('express')
const router = express.Router()
const location_controller = require('../../controllers/locationControllers')
const event_controller = require('../../controllers/eventController')



router.get('/',location_controller.getAllLocations)

router.post('/',location_controller.createLocation)

router.put('/:id', location_controller.updateLocation)

router.delete('/:id',location_controller.deleteLocation)
router.get('/:id',location_controller.findLocation)


//event controls
router.get('/event/',event_controller.getAllEvents)
router.post('/event/',event_controller.createEvent)
router.put('/event/:id', event_controller.updateEvent)
router.get('/event/:id',event_controller.findEvent)
router.delete('/event/:id',event_controller.deleteEvent)



 module.exports = router
