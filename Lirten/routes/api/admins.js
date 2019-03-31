
const express = require('express')
const router = express.Router()
const admin_controller = require('../../controllers/adminController')


router.get('/',admin_controller.getAllAdmins)

// Create a admin
router.post('/',admin_controller.createAdmin)

// Update a admin
router.put('/', admin_controller.updateAdmin)

// Delete a admin
router.delete('/',admin_controller.deleteAdmin)

//Find a admin by ID
router.get('/',admin_controller.findAdmin)



module.exports = router

