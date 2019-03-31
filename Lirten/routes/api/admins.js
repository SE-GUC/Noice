const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Admin = require('../../models/Admin')
const validator = require('../../validations/adminValidations')
//require controllers
const Vacancy_Ad_Request_Controller = require('../../controllers/VacancyAdRequestController')
const partner_controller = require('../../controllers/partnerController')
const location_controller = require('../../controllers/locationControllers')
const message_controller = require('../../controllers/messageController')


//show all the good admins
router.get('/',async (req, res) =>{
    const admins = await Admin.find()
    res.json({ data: admins })
} )

router.post('/create', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newAdmin = await Admin.create(req.body)

     res.json({msg:'Admin was created ', data: newAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 
 //edit
 router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const admin = await Admin.findById(id);
     if(!admin) return res.status(404).send({error: 'admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.findByIdAndUpdate(id,req.body,function (err) {
        if (err) return next(err);
        res.json({msg: 'Admin updated'});
    });
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 
//delete an admin
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully.', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 //partner control

 //view all partners
router.get('/viewAllPartners',partner_controller.getAllPartners)
//Find a Partner by ID
router.get('/findPartnerById',partner_controller.findPartner)
// Delete a Partner
router.delete('/deletePartner',partner_controller.deletePartner)
//update a Partner
router.put('/updatePartner',partner_controller.updatePartner)


//partner location

 //Location controls
  //view all location
  router.get('/viewAllPartners',location_controller.getAllLocations)
  //Find a location by ID
  router.get('/findPartnerById',location_controller.findLocation)
  // Delete a location
  router.delete('/deletePartner',location_controller.deleteLocation)
  // Update a location
  router.put('/deletePartner',location_controller.updateLocation)

//messaging

 //view all location
 router.put('/createMessage',message_controller.createMessage)
 //Find a message by ID
 router.get('/findMessageById',message_controller.findMessage)
 // Delete a Message
 router.delete('/deleteMessage',message_controller.deleteMessage)
 




//vacany ad Requst controller

  //View all request controller
  router.get('/viewAllVacancyAdRequest', Vacancy_Ad_Request_Controller.get )
  // Accept a vacancy ad request 
  router.put('/acceptVacancyAdRequest', Vacancy_Ad_Request_Controller.update)
  // Delete a Request
  router.delete('/deleteVacancyAdRequest',Vacancy_Ad_Request_Controller.delete)
  //creating a vacancy ad request
  router.put('/createVacancyAd',Vacancy_Ad_Request_Controller.create)
 
 
 








module.exports = router;