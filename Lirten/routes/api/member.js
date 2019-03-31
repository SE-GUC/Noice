const express = require('express')
const router = express.Router()
const member_controller = require('../../controllers/memberController')


router.get('/',member_controller.getAllMember)

// Create a Partner
router.post('/',member_controller.createMember)

// Update a Partner
router.put('/:id', member_controller.updateMember)

// Delete a Partner
router.delete('/:id',member_controller.deleteMember)

//Find a Partner by ID
router.get('/:id',member_controller.findMember)



module.exports = router

