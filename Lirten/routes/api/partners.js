
const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')
const event_controller = require('../../controllers/eventController')



router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.get('/:id',partner_controller.findPartner)

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

