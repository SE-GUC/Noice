const express = require('express')
const router = express.Router()
const messageController = require('../../controllers/messageController')


router.get('/',messageController.getAllMessages)

router.post('/',messageController.createMessage)

router.delete('/:id',messageController.deleteMessage)

router.get('/:id',messageController.findMessage)

module.exports = router