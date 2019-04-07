
const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')
const event_controller = require('../../controllers/eventController')


//partner cruds
router.get('/',partner_controller.getAllPartners)
router.post('/',partner_controller.createPartner)
router.put('/:id', partner_controller.updatePartner)
router.delete('/:id',partner_controller.deletePartner)
router.get('/:id',partner_controller.findPartner)


//event controls
router.get('/event/',event_controller.getAllEvents)
router.post('/event/',event_controller.createEvent)
router.put('/event/:id', event_controller.updateEvent)
router.get('/event/:id',event_controller.findEvent)




module.exports = router

