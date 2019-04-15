const express = require('express')
const router = express.Router()
const requestController = require('../../controllers/requestController')


router.get('/',requestController.getAllRequests)

router.post('/',requestController.createRequest)

router.put('/:id', requestController.updateRequest)

router.delete('/:id',requestController.deleteRequest)

router.get('/:id',requestController.findRequest)

module.exports = router
