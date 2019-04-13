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

//event filter
router.post('/searchEvent',event_controller.search)
//event controls
router.get('/event/',event_controller.getAllEvents)
router.post('/event/',event_controller.createEvent)
router.put('/event/:id', event_controller.updateEvent)
router.get('/event/:id',event_controller.findEvent)
router.delete('/event/:id',event_controller.deleteEvent)

module.exports = router