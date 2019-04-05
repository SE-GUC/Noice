const express = require('express')
const router = express.Router()
const admin_controller = require('../../controllers/adminController')


router.get('/',admin_controller.getAllAdmins)

router.post('/',admin_controller.createAdmin)

router.put('/:id', admin_controller.updateAdmin)

router.delete('/:id',admin_controller.deleteAdmin)

router.get('/:id',admin_controller.findAdmin)






module.exports = router