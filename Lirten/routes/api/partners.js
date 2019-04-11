
const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')


router.get('/',partner_controller.getAllPartners)

router.post('/',partner_controller.createPartner)

router.put('/:id', partner_controller.updatePartner)

router.delete('/:id',partner_controller.deletePartner)

router.delete('/deleterequest/:id',partner_controller.deleterequest)

router.get('/:id',partner_controller.findPartner)

router.post('/requestvacancyad', partner_controller.requestVacancyad)

router.get('/getstatus/:id',partner_controller.getstatus)

router.put('/updaterequest/:id',partner_controller.updatestatus)

router.post('/createvacancyad', partner_controller.createVacancyad)

router.put('/editvacancyad/:id', partner_controller.editVacancyad)

router.delete('/deletevacancyad/:id', partner_controller.deleteVacancyad)

router.get('/:id/viewads', partner_controller.getOldvacancyads)

router.get('/:id/viewads/:iid', partner_controller.getMyvacancyad)



module.exports = router

