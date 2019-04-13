const express = require('express')
const router = express.Router()
const admin_controller = require('../../controllers/adminController')
const roomController = require('../../controllers/roomController')

router.get('/',admin_controller.getAllAdmins)

router.post('/',admin_controller.createAdmin)

router.put('/:id', admin_controller.updateAdmin)

router.delete('/:id',admin_controller.deleteAdmin)

router.get('/:id',admin_controller.findAdmin)

// room filter
router.post('/searchroom',roomController.search)




module.exports = router