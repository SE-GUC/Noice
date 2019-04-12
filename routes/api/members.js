const express = require('express');
const router = express.Router();

const locationInMemberController = require('../../controllers/locationControllers')
const roomController = require('../../controllers/roomController')
const memberController = require('../../controllers/memberController')

//router.get('/:date', memberController.findLocationWithDate)

router.get('/', memberController.getAllMember)

router.post('/', memberController.createMember)

router.put('/:id', memberController.updateMember)

router.delete('/:id', memberController.deleteMember)

router.get('/:id',memberController.findMember)

router.get('/memberGetLocations/1',locationInMemberController.getAllLocations)


module.exports = router
