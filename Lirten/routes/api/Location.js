const express = require('express')
const router = express.Router()
const location_controller = require('../../controllers/locationControllers')

//Get all locations
router.get('/',location_controller.getAllLocations)

// Create a Location
router.post('/',location_controller.createLocation)

// Update a Location
router.put('/', location_controller.updateLocation)

// Delete a Location
router.delete('/',location_controller.deleteLocation)

//Find a Location by ID
router.get('/',location_controller.findLocation)


 module.exports = router
