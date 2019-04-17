const express = require('express')
const mongoose = require('mongoose')
var location = require('../models/Users');
const validator = require('../Validations/usersValidations')

// Create a new Location
exports.createLocation = async function (req,res){   
     try {
     const isValidated = validator.createLocationValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newLocation = await location.create(req.body)
     res.json({msg:'Co-Working Space was created successfully', data: newLocation})
    }
    catch(error) {
        console.log(error)
    }  
 }

 //Get Location by Id
 exports.findLocation = async function(req,res){
    try {
        const id = req.params.id
        const locationId = await location.findById(id)
        if(!locationId) return res.status(404).send({error: 'Location does not exist'})
        res.json({msg: 'Location Found', data: locationId })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
  }

//Get all Locations
exports.getAllLocations = async function(req,res){
    const location2 = await location.find({
        typeOfUser:"Co-working Space Owner"
    })
    res.json({data: location2})
}

// Update a Location
exports.updateLocation = async function(req,res){
    try {
        const id = req.params.id
        const Location = await location.findById(id)
        if(!Location) return res.status(404).send({error: 'Location does not exist'})
        const isValidated = validator.updateLocationValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedLocation = await location.findByIdAndUpdate(id,req.body)
        updatedLocation = await location.findById(id)
        res.json({msg: 'Location is updated successfully', data: updatedLocation})
       }
       catch(error) {
           console.log(error)
       }  
    }

 //Delete a Location
exports.deleteLocation = async function(req,res){
    try {
        const id = req.params.id
        const deletedLocation = await location.findByIdAndRemove(id)
        res.json({msg:'Location was deleted successfully', data: deletedLocation})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    }

    //find location on a date
 exports.findLocationDate = async function(req,res){
    try {
        const givenDate = req.params.date
        const locationDate = await location.findOne({'date':givenDate})
        if(!locationDate) return res.status(404).send({error: 'Location does not exist'})
        res.json({msg: 'Location Found', data: locationDate })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
  }
