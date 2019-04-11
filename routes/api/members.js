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

router.get('/memberLocationRooms/:id',roomController.getRoomsForLoc)

router.post('/memberApplyRoom/:id',roomController.updateRoomRes)

router.delete('/memberDeleteRoomRes/:id',roomController.deleteRoomResReq)

router.get('/memberGetRoomReserved/:id',roomController.getRoomRes) 

module.exports = router