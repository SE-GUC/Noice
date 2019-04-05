const express = require('express')
const mongoose = require('mongoose')
var Event = require('../models/Event');
const validator = require('../validations/EventValidations')

exports.createEvent = async function (req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newEvent = await Event.create(req.body)
        res.json({msg:'Event was created successfully', data: newEvent})
       }
       catch(error) {
           console.log(error)
       }  
}
exports.updateEvent = async function(req,res){
    try {
        const id = req.params.id
        const event = await Event.findById(id)
        if(!event) return res.status(404).send({error: 'Event does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedEvent = await Event.findByIdAndUpdate(req.body)
        res.json({msg: 'Event is updated successfully', data: updatedEvent})
       }
       catch(error) {
           console.log(error)
       }
} 
exports.getAllEvents = async function(req,res){
    const events = await Event.find()
    res.json({data: events})
}
exports.deleteEvent = async function(req,res){
    try {
        const id = req.params.id
        const deletedEvent = await Event.findOneAndDelete(id)
        res.json({msg:'Event was deleted successfully', data: deletedEvent})
       }
       catch(error) {
           console.log(error)
       } 
}
exports.findEvent = async function(req,res){
    try {
        const id = req.params.id
        const event = await Event.findById(id)
        if(!event) return res.status(404).send({error: 'Event does not exist'})
        res.json({msg: 'Event found successfully', data: event})
       }
       catch(error) {
           console.log(error)
       } 
}
