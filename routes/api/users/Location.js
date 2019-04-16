const express = require('express')
const router = express.Router()
const location_controller = require('../../../controllers/locationController')

const roomController = require('../../../controllers/roomController')

router.get('/locationE/get/all_locs/',location_controller.getAllLocations)

router.put('/locationE/create/new_loc/',location_controller.createLocation)

router.post('/locationE/update/curr_loc/:id', location_controller.updateLocation) //This is the location ID that is being sent

router.delete('/locationE/delete/curr_loc/:id',location_controller.deleteLocation) //This is the location ID that is being sent

router.get('/locationE/get/curr_loc/:id',location_controller.findLocation) //This is the location ID that is being sent

router.put('/room/create/new_room/:id',roomController.createRoom)  //This is the location ID that is being sent

router.get('/room/get/all_rooms/',roomController.getAllRooms)

router.get('/room/get/rooms_for_loc/:id',roomController.getRoomsForLoc)   //This is the location ID that is being sent

router.delete('/room/delete/curr_room/:id',roomController.deleteRoom) //This is the room ID that is being sent

router.post('/room/update/curr_room/:id',roomController.updateRoom) //This is the room ID that is being sent

router.get('/room/get/curr_room/:id',roomController.findRoom) //This is the room ID that is being sent

router.put('/roomRes/create/new_room_res/:id',roomController.createRoomResReq)  //This is the room ID that is being sent

router.delete('/roomRes/delete/curr_room_res/:id',roomController.deleteRoomResReq)  //This is the room ID that is being sent

router.post('/roomRes/get/curr_room_res/:id',roomController.getRoomRes) //This is the room ID that is being sent

router.get('/roomRes/get/res_for_room/:id',roomController.viewResRequestsForRoom) //This is the room ID that is being sent

router.post('/roomRes/update/rej_room_res/:id',roomController.rejectRoomRes) //This is the room ID that is being sent

router.post('/roomRes/update/acc_room_res/:id',roomController.acceptRoomRes) //This is the room ID that is being sent

router.post('/roomRes/update/curr_room_res/:id',roomController.updateRoomRes) //This is the room ID that is being sent

// room filter
router.post('/searchroom',roomController.search)


module.exports = router
