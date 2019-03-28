const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/locationControllers')

//Get all locations
router.get('/',partner_controller.getAllLocations)

// Create a Location
router.post('/',partner_controller.createLocation)

// Update a Location
router.put('/', partner_controller.updateLocation)

// Delete a Location
router.delete('/',partner_controller.deleteLocation)

//Find a Location by ID
router.get('/',partner_controller.findLocation)


 module.exports = router
