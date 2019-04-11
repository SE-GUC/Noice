const express = require('express')
const router = express.Router()
const location_controller = require('../../controllers/locationControllers')

router.get('/',location_controller.getAllLocations)

router.post('/',location_controller.createLocation)

router.put('/:id', location_controller.updateLocation)

router.delete('/:id',location_controller.deleteLocation)

router.get('/:id',location_controller.findLocation)

router.get('/get_location/:id',location_controller.findLocation)



module.exports = router
