const express = require('express')
const router = express.Router()
const admin_controller = require('../../controllers/adminController')
const event_controller = require('../../controllers/eventController')



router.get('/',admin_controller.getAllAdmins)
router.post('/',admin_controller.createAdmin)
router.put('/:id', admin_controller.updateAdmin)
router.delete('/:id',admin_controller.deleteAdmin)
router.get('/:id',admin_controller.findAdmin)

//event filter
router.post('/searchEvent',event_controller.search)
//event controls
router.get('/event/',event_controller.getAllEvents)
router.post('/event/',event_controller.createEvent)
router.put('/event/:id', event_controller.updateEvent)
router.get('/event/:id',event_controller.findEvent)
router.delete('/event/:id',event_controller.deleteEvent)






module.exports = router