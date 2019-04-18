const express = require('express')
const router = express.Router()
const partner_controller = require('../../../controllers/partnerController')
const locationInPartnersController = require('../../../controllers/locationController')
const roomController = require('../../../controllers/roomController')
const memberController = require('../../../controllers/memberController')
const event_controller = require('../../../controllers/eventController')

router.get('/member/', memberController.getAllMember)

router.get('/member/:id',memberController.findMember)

router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.get('/:id',partner_controller.findPartner)

router.get('/partnerLocation/1',locationInPartnersController.getAllLocations)

router.get('/partnerGetLocation/:id',locationInPartnersController.findLocation)

router.get('/viewallvacancy',partner_controller.getAllvacancy)

router.get('/viewmyvacancy/:id/:iid',partner_controller.getMyvacancy)

router.get('/viewoldvacancy/:id',partner_controller.getOldvacancy)

router.post('/createvacancy',partner_controller.createVacancy)

router.put('/updatevacancy/:id',partner_controller.editVacancy)

router.delete('/deletevacancy/:id',partner_controller.deleteVacancy)

// room filter
router.post('/searchroom',roomController.search)

// search
router.post('/events/search',event_controller.search)

// View all Events
router.get('/events/',event_controller.getAllEvents)

// Create a Event
router.post('/events/',event_controller.createEvent)

// Update a Event
router.put('/events/:id', event_controller.updateEvent)

// Delete a Event
router.delete('/events/:id',event_controller.deleteEvent)

//Find a Event by ID
router.get('/events/:id',event_controller.findEvent)



module.exports = router