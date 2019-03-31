const express = require('express');
const router = express.Router();

const memberController = require('../../controllers/memberController')

router.get('/:date', memberController.findLocationWithDate)

router.get('/', memberController.getAllMembers)

router.post('/', memberController.createMember)

router.put('/:id', memberController.updateMember)

router.delete('/:id', memberController.deleteMember)

router.get('/:id',memberController.findMember)

module.exports = router