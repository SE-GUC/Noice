const express = require('express')
const router = express.Router()
const vacancyController = require('../../controllers/vacancyController')

// search
router.post('/search',vacancyController.search)
//cruds
router.get('/',vacancyController.getAllVacancies)
router.get('/final/1',vacancyController.getAllFinalVacancies)
router.post('/',vacancyController.createVacancy)
router.put('/:id', vacancyController.updateVacancy)
router.delete('/:id',vacancyController.deleteVacancy)
router.get('/:id',vacancyController.findVacancy)
// handling applications
router.put('/apply/:id',vacancyController.apply)
router.put('/apply/cancelMyApplication/:id',vacancyController.cancelApplication)
router.put('/apply/closeVacancy/:id',vacancyController.closeVacancy)
router.get('/apply/viewNumberOfApplicants/:id',vacancyController.viewNumberOfApplicants)
router.get('/apply/viewAllApplicants/:id',vacancyController.viewAllApplicants)

module.exports = router
