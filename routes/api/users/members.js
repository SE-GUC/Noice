const express = require('express');
const router = express.Router();

const locationController = require('../../../controllers/locationController')
const memberController = require('../../../controllers/memberController')
const vacancyController = require('../../../controllers/vacancyController')
const roomController = require('../../../controllers/roomController')
const partnerController = require('../../../controllers/partnerController')

//view all locations
//router.get('/location/',memberController.getAllLocations)
// find location by date
//router.get('/location/:date',locationInMemberController.findLocationDate)

//get all vacancies
router.get('/vacancy/',vacancyController.getAllVacancies)

//router.get('/:date', memberController.findLocationWithDate)

router.get('/', memberController.getAllMember)

router.post('/', memberController.createMember)

router.put('/:id', memberController.updateMember)

router.delete('/:id', memberController.deleteMember)

router.get('/:id',memberController.findMember)

// get all locations 
router.get('/getLocations/1',locationController.getAllLocations)

//get a location profile
router.get('/getLocation/:id',locationController.findLocation)


router.get('/get_all/partners',partnerController.getAllPartners)

//get all rooms for a certain location
router.get('/get_all/rooms_for/:id',roomController.getRoomsForLoc)

//get all rooms for the location
/*router.get('/get_rooms_for_loc/:id',roomController.getRoomsForLoc)

//apply for a room
router.put('/add_room_res/:id',roomController.createRoomResReq)

//I want to view a co working space room
router.get('/get_room/:id',roomController.findRoom)

//I want to view the rooms that I reserved
router.get('/get_room_res/:id',roomController.getRoomRes) */

// room filter
router.post('/searchroom',roomController.search)

module.exports = router
