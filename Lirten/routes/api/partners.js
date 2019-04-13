
const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')
const roomController = require('../../controllers/roomController')

router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.get('/:id',partner_controller.findPartner)

// room filter
router.post('/searchroom',roomController.search)

module.exports = router

