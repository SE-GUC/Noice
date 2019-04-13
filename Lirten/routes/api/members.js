const express = require('express');
const router = express.Router();
const roomController = require('../../controllers/roomController')
const memberController = require('../../controllers/memberController')

//router.get('/:date', memberController.findLocationWithDate)

router.get('/', memberController.getAllMember)

router.post('/', memberController.createMember)

router.put('/:id', memberController.updateMember)

router.delete('/:id', memberController.deleteMember)

router.get('/:id',memberController.findMember)

router.post('/apply_vacc/:id',memberController.applyForVac)

router.delete('/deleteProp/:memberId',memberController.deleteProp)

router.delete('/delete_room_res/:id',roomController.deleteRoomResReq)

// room filter
router.post('/searchroom',roomController.search)


module.exports = router