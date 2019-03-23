const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Request = require('../../models/Request')
const validator = require('../../validations/requestValidations')

// Show all requests

router.get('/', async (req,res) => {
    const requests = await Request.find()
    res.json({data: requests})
})



// Create a request
router.post('/CreateRequest', async (req,res) => {
   try {
    const isValidated = validator.createValidation(req.body)
    if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
    const newRequest = await Request.create(req.body)
    res.json({msg:'Request was made successfully', data: newRequest})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  
})

// Update a Request
router.put('/:id', async (req,res) => {
    try {
     const mid = req.params.id
     const request = await Request.findById(mid);
     if(!request) return res.status(404).send({error: 'Request does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedRequest = await Request.findByIdAndUpdate(mid,req.body,function (err) {
        if (err) return next(err);
        res.json({msg: 'Request updated successfully'});
    });
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedRequest = await Request.findByIdAndRemove(id)
     res.json({msg:'Request was deleted successfully', data: deletedRequest})
    }
    catch(error) {

        console.log(error)
    }  
 })

 

module.exports = router