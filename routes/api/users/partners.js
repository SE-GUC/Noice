const express = require('express')
const passport = require('passport')
const router = express.Router()
const partner_controller = require('../../../controllers/partnerController')
const locationInPartnersController = require('../../../controllers/locationController')
const roomController = require('../../../controllers/roomController')
const memberController = require('../../../controllers/memberController')
const vacancyController = require('../../../controllers/vacancyController')

router.get('/member/', memberController.getAllMember)

router.get('/member/:id',memberController.findMember)

router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.get('/:id',partner_controller.findPartner)

router.get('/get_all/rooms',roomController.getAllRooms)

router.get('/get/room/:id',roomController.findRoom)

router.get('/partnerLocation/1',locationInPartnersController.getAllLocations)

router.get('/partnerGetLocation/:id',locationInPartnersController.findLocation)

router.get('/viewallvacancy/1', vacancyController.getAllVacancies)

router.get('/viewmyvacancy/:id/:iid',partner_controller.getMyvacancy)

router.get('/viewoldvacancy/:id',partner_controller.getOldvacancy)

router.post('/vacancy/createvacancy',vacancyController.createVacancy)

router.put('/vacancy/:yourid/:id',partner_controller.deleteVacancy)

router.delete('/vacancy/:id',vacancyController.deleteVacancy)

router.put('/updatevacancy/:id',partner_controller.editVacancy)


// room filter
router.post('/searchroom',roomController.search)

module.exports = router