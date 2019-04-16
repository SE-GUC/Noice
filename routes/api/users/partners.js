const express = require('express')
const router = express.Router()
const partnerController = require('../../../controllers/partnerController')
const locationController = require('../../../controllers/locationController')
const vacancyController = require('../../../controllers/vacancyController')
const memberController = require('../../../controllers/memberController')



router.get('/',partnerController.getAllPartners)

router.post('/',partnerController.createPartner)

router.put('/:id', partnerController.updatePartner)

router.delete('/:id',partnerController.deletePartner)

router.get('/:id',partnerController.findPartner)

router.get('/getalllocation/1',locationController.getAllLocations)

router.get('/getlocation/:id',locationController.findLocation)

router.get('/viewallvacancy',vacancyController.getAllVacancies)

router.get('/viewmyvacancy/:id/:iid',vacancyController.getMyVacancy)

router.get('/viewoldvacancy/:id',vacancyController.getOldVacancy)

router.post('/createvacancy',vacancyController.createVacancy)

router.put('/updatevacancy/:id',vacancyController.updateVacancy)

router.delete('/deletevacancy/:id',vacancyController.deleteVacancy)

router.get('findvacancy/:id',vacancyController.findVacancy)

router.get('findmember/:id',memberController.findMember)

router.get('getallmembers/', memberController.getAllMember)


module.exports = router