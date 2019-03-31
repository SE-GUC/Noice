const express = require('express')
const router = express.Router()
const member_controller = require('../../controllers/memberController')


router.get('/',member_controller.getAllMember)

router.post('/',member_controller.createMember)


router.put('/:id', member_controller.updateMember)


router.delete('/:id',member_controller.deleteMember)


router.get('/:id',member_controller.findMember)

module.exports = router