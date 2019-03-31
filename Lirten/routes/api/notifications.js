const express = require('express')
const router = express.Router()
const notificationController = require('../../controllers/notificationController')

// Get all notifications
router.get('/',notificationController.getAllNotifications)

// Create a Notification
router.post('/',notificationController.createNotification)

// Update a Notification
router.put('/:id', notificationController.updateNotification)

// Delete a Notification
router.delete('/:id',notificationController.deleteNotification)

//Find a Notification by ID
router.get('/:id',notificationController.findNotification)



module.exports = router



// /************ Get All Notifications ************/
// router.get('/', async (req,res) => {
//     const not2 = await notification.find()
//     res.json({data: not2})
// })


// /************ Get Notification by ID ************/
// router.get('/:id', async (req, res) => {
//     try {
//         const id = req.params.id
//         const notificationID = await notification.findById(id)
//         res.json({ data: notificationID })
//        }
//        catch(error) {
//            console.log(error)
//        }
//   })

// /************ Create Notification ************/
// router.post('/', async (req,res) => {
//     try {
//      const isValidated = validator.createValidation(req.body)
//      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//      const newNotification = await notification.create(req.body)
//      res.json({msg:'Notification was created successfully', data: newNotification})
//     }
//     catch(error) {
//         console.log(error)
//     }  
//  })


// /************ Delete Notification ************/
// router.delete('/:id', async (req,res) => {
//     try {
//      const id = req.params.id
//      const deletedNotification = await notification.findByIdAndRemove(id)
//      res.json({msg:'Notification was deleted successfully', data: deletedNotification})
//     }
//     catch(error) {

//         console.log(error)
//     }  
//  })


// /************ Update Notification ************/
// router.put('/:id', async (req,res) => {
//     try {
//      const id = req.params.id
//      const Notification = await notification.findById(id)
//      if(!Notification) return res.status(404).send({error: 'Notification does not exist'})
//      const isValidated = validator.updateValidation(req.body)
//      if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
//      const updatedNotification = await notification.updateOne(req.body)
//      res.json({msg: 'Notification is updated successfully', data: updatedNotification})
//     }
//     catch(error) {
//         console.log(error)
//     }  
//  })
// module.exports = router;