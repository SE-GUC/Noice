const express = require('express')
const router = express.Router()
const partner_controller = require('../../../controllers/partnerController')
const locationInPartnersController = require('../../../controllers/locationController')


router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.get('/:id',partner_controller.findPartner)

router.get('/partnerLocation/1',locationInPartnersController.getAllLocations)

router.get('/partnerGetLocation/:id',locationInPartnersController.findLocation)

module.exports = router