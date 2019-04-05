
const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')
const event_controller = require('../../controllers/eventController')



router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.get('/:id',partner_controller.findPartner)





module.exports = router

