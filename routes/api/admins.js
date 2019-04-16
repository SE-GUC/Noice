const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const adminController = require('../../controllers/adminController')
const locationController = require('../../controllers/locationController')
const vacancyController = require('../../controllers/vacancyController')

//Admins controllers
router.get('/',adminController.getAllAdmins)

router.post('/',adminController.createAdmin)
	
router.put('/:id', adminController.updateAdmin)

router.delete('/:id',adminController.deleteAdmin)

router.get('/:id',adminController.findAdmin)

//Location controllers in Admins
router.get('/viewLocation/:id',locationController.findLocation)

router.put('/updateLocation/:id',locationController.updateLocation)

router.delete('/deleteLocation/:id',locationController.deleteLocation)

//Vacancy
router.post('/CreateVacancy/',vacancyController.createVacancy)

router.put('/updateVacancy/:id', vacancyController.updateVacancy)

router.delete('/deleteVacancy/:id',vacancyController.deleteVacancy)

router.get('/getVacancy/:id',vacancyController.findVacancy)

router.get('/getAllVacancies/',vacancyController.getAllVacancies)

router.get('/getAllFinalVacancies/',vacancyController.getAllFinalVacancies)

router.post('/searchVacancy/',vacancyController.search)

router.put('/apply/:id',vacancyController.apply)

router.put('/apply/cancelMyApplication/:id',vacancyController.cancelApplication)

router.put('/apply/closeVacancy/:id',vacancyController.closeVacancy)

router.get('/apply/viewNumberOfApplicants/:id',vacancyController.viewNumberOfApplicants)

router.get('/apply/viewAllApplicants/:id',vacancyController.viewAllApplicants)

router.get('/getAllPendingVacancies/',vacancyController.getAllPendingVacancies)


module.exports = router
