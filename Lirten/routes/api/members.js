const express = require('express');
const router = express.Router();

const memberController = require('../../controllers/memberController')
const event_controller = require('../../controllers/eventController')


//router.get('/:date', memberController.findLocationWithDate)

router.get('/', memberController.getAllMember)

router.post('/', memberController.createMember)

router.put('/:id', memberController.updateMember)

router.delete('/:id', memberController.deleteMember)

router.get('/:id',memberController.findMember)


module.exports = router