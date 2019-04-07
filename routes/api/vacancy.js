const express = require('express')
const router = express.Router()
const vacancyController = require('../../controllers/vacancyController')


router.get('/',vacancyController.getAllVacancies)

router.post('/',vacancyController.createVacancy)

router.put('/:id', vacancyController.updateVacancy)

router.delete('/:id',vacancyController.deleteVacancy)

router.get('/:id',vacancyController.findVacancy)

module.exports = router
