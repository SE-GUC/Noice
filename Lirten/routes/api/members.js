const express = require('express');
const router = express.Router();

const memberController = require('../../controllers/memberController')
const event_controller = require('../../controllers/eventController')


//router.get('/:date', memberController.findLocationWithDate)

router.get('/', memberController.getAllMember)

router.post('/', memberController.createMember)

router.put('/:id', memberController.updateMember)

router.delete('/:id', memberController.deleteMember)

router.get('/:id',memberController.findMember)


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