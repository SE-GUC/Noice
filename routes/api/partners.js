const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')
const locationInPartnersController = require('../../controllers/locationControllers')


router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.get('/:id',partner_controller.findPartner)

router.get('/viewLocation/1',locationInPartnersController.getAllLocations)

module.exports = router