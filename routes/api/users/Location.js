const express = require('express')
const router = express.Router()
const location_controller=require('../../../controllers/locationController')

const roomController = require('../../../controllers/roomController')

router.get('/',location_controller.getAllLocations)

router.post('/',location_controller.createLocation)

router.put('/:id', location_controller.updateLocation)

router.delete('/:id',location_controller.deleteLocation)

router.get('/:id',location_controller.findLocation)

router.put('/add_room/:id',roomController.createRoom)

router.get('/get_all_rooms/',roomController.getAllRooms)

router.get('/get_rooms_for_loc/:id',roomController.getRoomsForLoc)

router.delete('/delete_room/:id',roomController.deleteRoom)

router.post('/update_room/:id',roomController.updateRoom)

router.get('/get_room/:id',roomController.findRoom)

router.put('/add_room_res/:id',roomController.createRoomResReq)

router.delete('/delete_room_res/:id',roomController.deleteRoomResReq)

router.get('/get_room_res/:id',roomController.getRoomRes) 

router.get('/view_room_res/:id',roomController.viewResRequestsForRoom)

router.post('/reject_req_res/:id',roomController.rejectRoomRes)

router.post('/update_room_res/:id',roomController.updateRoomRes)

// room filter
router.post('/searchroom',roomController.search)


module.exports = router
