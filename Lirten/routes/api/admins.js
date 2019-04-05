const express = require('express')
const router = express.Router()
const admin_controller = require('../../controllers/adminController')
const event_controller = require('../../controllers/eventController')



router.get('/',admin_controller.getAllAdmins)

router.post('/',admin_controller.createAdmin)

router.put('/:id', admin_controller.updateAdmin)

router.delete('/:id',admin_controller.deleteAdmin)

router.get('/:id',admin_controller.findAdmin)


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