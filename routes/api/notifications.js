const express = require('express')
const router = express.Router()
const notificationController = require('../../controllers/notificationController')


router.get('/',notificationController.getAllNotifications)

router.post('/',notificationController.createNotification)

router.put('/:id', notificationController.updateNotification)

router.delete('/:id',notificationController.deleteNotification)

router.get('/:id',notificationController.findNotification)

module.exports = router



