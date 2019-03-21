const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

//Models
const location = require('../../models/Location')
const validator = require('../../validations/locationValidations')


// Create a new Location
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newLocation = await location.create(req.body)
     res.json({msg:'Co-Working Space was created successfully', data: newLocation})
    }
    catch(error) {
        console.log(error)
    }  
 })

 // Get all locations
router.get('/', async (req,res) => {
    const location2 = await location.find()
    res.json({data: location2})
})

// Update a Location
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const Location = await location.findById(id)
     if(!Location) return res.status(404).send({error: 'Location does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedLocation = await location.updateOne(req.body)
     res.json({msg: 'Location is updated successfully'})
    }
    catch(error) {
        console.log(error)
    }  
 })
 

 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedLocation = await location.findByIdAndRemove(id)
     res.json({msg:'Location was deleted successfully', data: deletedLocation})
    }
    catch(error) {

        console.log(error)
    }  
 })

 module.exports = router
 







