const express = require('express');
const router = express.Router();

const memberController = require('../../controllers/memberController')
const vacancyController = require('../../controllers/vacancyController')
const locationController = require('../../controllers/locationControllers')
const requestController = require('../../controllers/requestController')

// find location by date
router.get('/location/:date',locationController.findLocationDate)
//get all vacancies
router.get('/vacancy',vacancyController.getAllVacancies)
//request a larger location when needed
router.post('/request',requestController.createRequest)

router.get('/', memberController.getAllMember)

router.post('/', memberController.createMember)

router.put('/:id', memberController.updateMember)

router.delete('/:id', memberController.deleteMember)

router.get('/:id',memberController.findMember)

module.exports = router