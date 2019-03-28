
const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')


router.get('/',partner_controller.getAllPartners)

// Create a Partner
router.post('/',partner_controller.createPartner)

// Update a Partner
router.put('/', partner_controller.updatePartner)

// Delete a Partner
router.delete('/',partner_controller.deletePartner)

//Find a Partner by ID
router.get('/',partner_controller.findPartner)



module.exports = router

