const express = require('express')
const router = express.Router()
const location_controller = require('../../controllers/locationControllers')
const memberController = require('../../controllers/memberController')

//view members by id
router.get('/member/:id',memberController.findMember)
//view members
router.get('/member', memberController.getAllMember)

router.get('/',location_controller.getAllLocations)

router.post('/',location_controller.createLocation)

router.put('/:id', location_controller.updateLocation)

router.delete('/:id',location_controller.deleteLocation)

router.get('/:id',location_controller.findLocation)


 module.exports = router
