const express = require('express')
const router = express.Router()
const location_controller = require('../../controllers/locationControllers')
const roomController = require('../../controllers/roomController')

router.get('/',location_controller.getAllLocations)

router.post('/',location_controller.createLocation)

router.put('/', location_controller.updateLocation)

router.delete('/',location_controller.deleteLocation)

router.get('/get_location/:id',location_controller.findLocation)

router.put('/add_room/',roomController.createRoom)

router.get('/get_all_rooms/',roomController.getAllRooms)

router.get('/get_rooms_for_loc/:id',roomController.getRoomsForLoc)

router.delete('/delete_room/:id',roomController.deleteRoom)

router.post('/update_room/:id',roomController.updateRoom)

router.get('/get_room/:id',roomController.findRoom)

router.put('/add_room_res/:id',roomController.createRoomResReq)

router.delete('/delete_room_res/:id',roomController.deleteRoomResReq)

router.get('/get_room_res/:id',roomController.getRoomRes) 

router.post('/update_room_res/:id',roomController.updateRoomRes)

// room filter
router.post('/searchroom',roomController.search)
 module.exports = router
