const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Admin = require('../../models/Admin')
const validator = require('../../validations/adminValidations')
const locationInAdminsController = require('../../controllers/locationControllers')



router.get('/viewLocation/:id',locationInAdminsController.findLocation)

router.put('/updateLocation/:id',locationInAdminsController.updateLocation)

router.delete('/deleteLocation/:id',locationInAdminsController.deleteLocation)

module.exports = router
