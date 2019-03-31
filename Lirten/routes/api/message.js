const express = require('express')
const router = express.Router()
const messageController = require('../../controllers/messageController')


router.get('/',messageController.getAllMessages)

// Create a Message
router.post('/',messageController.createMessage)


// Delete a Message
router.delete('/:id',messageController.deleteMessage)

//Find a Message by ID
router.get('/:id',messageController.findMessage)


module.exports = router