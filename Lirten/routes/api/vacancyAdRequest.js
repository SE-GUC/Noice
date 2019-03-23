const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Vacancy_Ad_Request_Controller = require('../../controller/VacancyAdRequestController')


router.get('/', Vacancy_Ad_Request_Controller.get )

// Create a vacancy ad request 
router.post('/', Vacancy_Ad_Request_Controller.create)

// Update a vacancy ad request 
router.put('/', Vacancy_Ad_Request_Controller.update)

// delete a vacancy ad request 
router.delete('/', Vacancy_Ad_Request_Controller.delete)

module.exports = router