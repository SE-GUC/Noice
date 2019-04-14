const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const admin_controller = require('../../controllers/adminController')
const locationInAdminsController = require('../../controllers/locationController')
const memberController = require('../../controllers/memberController')

router.get('/member/', memberController.getAllMember)

router.post('/member/', memberController.createMember)

router.put('/member/:id', memberController.updateMember)

router.delete('/member/:id', memberController.deleteMember)

router.get('/member/:id',memberController.findMember)

//Admins controllers
router.get('/',admin_controller.getAllAdmins)

router.post('/',admin_controller.createAdmin)
	
router.put('/:id', admin_controller.updateAdmin)

router.delete('/:id',admin_controller.deleteAdmin)

router.get('/:id',admin_controller.findAdmin)

//Location controllers in Admins
router.get('/viewLocation/:id',locationInAdminsController.findLocation)

router.put('/updateLocation/:id',locationInAdminsController.updateLocation)

router.delete('/deleteLocation/:id',locationInAdminsController.deleteLocation)

module.exports = router
