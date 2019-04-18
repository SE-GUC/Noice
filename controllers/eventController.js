const express = require('express')
const mongoose = require('mongoose')
var Event = require('../models/Event');
var User = require('../models/Users');
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
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const id = req.params.id
        const event = await Event.findById(id)
        if(!event) return res.status(404).send({error: 'Event does not exist'})
        var updatedEvent = await Event.findByIdAndUpdate(id,req.body)
        updatedEvent = await Event.findById(id)
        res.json({msg:'Event was updated successfully', data: updatedEvent})
        }
        catch(error) {
            console.log(error)
        } } 
exports.getAllEvents = async function(req,res){
    const events = await Event.find()
    res.json({data: events})
}
exports.deleteEvent = async function(req,res){
    try {
        const id = req.params.id
        const deletedEvent = await Event.findByIdAndDelete(id)
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

/*Join event
exports.joinEvent = async (req,res)=>{
    try{ 
     const userId = req.body.userId
     const eventId = req.params.id
     console.log('id is '+userId+'event id is' +eventId)
     const event = await Event.findById(eventId) 
     if(!event) return res.status(404).send({error: 'Event does not exist'})
     var member= await Member.findById(userId)
     if(event.joinedMembers.includes(userId)) return res.status(400).send({error: 'member already joined the events'})
     console.log('length is'+member.joinedEvents.length)
     if(member.joinedEvents.includes(eventId)) return res.status(400).send({error: 'member already joined the event'})
     event.joinedMembers.push(userId)
     member.joinedEvents.push(eventId)
     const updateBody={
     joinedMembers: event.joinedMembers
     }
     const updateBody2={
     joinedEvents: member.joinedEvents
     }
     await Event.findByIdAndUpdate(eventId,updateBody)
     await member.findByIdAndUpdate(userId,updateBody2)
     returningObject = await Event.findById(eventId) 
     res.json({msg:"YAAAY WE JOINED THE EVENT",data:returningObject})
 }
 catch(error){
     console.log(error)
 }
     }
    

//join events


exports.joinEvent = async function(req,res){
    try {
        userID= req.body.id
        eventID = req.params.id

        var event = await Event.findById(eventID)
        if(!event) return res.status(404).send({error: 'Event does not exist'})
        var user = await Member.findById(userID)
        if(!user) return res.status(404).send({error: 'User does not exist'})

       user = await user.joinedEvents.push(eventID)
       event = await event.joinedMembers.push(userID)
       if(event.joinedMembers.includes(userId)) return res.status(400).send({error: 'member already joined the events'})
       if(member.joinedEvents.includes(eventId)) return res.status(400).send({error: 'member already joined the event'})
       
        var eventBody = {
            joinedMembers : event.joinedMembers
        }
        var userBody = {
            joinedEvents : user.joinedEvents
        }

        await Event.findByIdAndUpdate(eventID, eventBody)
        await Member.findByIdAndUpdate(userID, userBody)
        
        event = Event.findById(eventID)

        res.json({msg:'please work', data:event })



    } catch (error) {
        console.log(error)
    }


}
*/
    

exports.search = async function(req,res){
    const bodyAttribute = req.body.attribute
    const bodyValue = req.body.value


    if(bodyAttribute === "Name")
    {
        var searchedEvent = await Event.find({
        Name : bodyValue
        })
    }
    else if(bodyAttribute === "Owner")
    {
        var searchedEvent = await Event.find({
        Owner : bodyValue
        })
    }
    else if(bodyAttribute === "Type")
    {
        var searchedEvent = await Event.find({
        Type : bodyValue
        })
    }
    else if(bodyAttribute === "Location")
    {
        var searchedEvent = await Event.find({
        Location : bodyValue
        })
    }
    else if(bodyAttribute === "Participants")
    {
        var searchedEvent = await Event.find({
        Participants : bodyValue
        })
    }
    else if(bodyAttribute === "startDate")
    {
        var searchedEvent = await Event.find({
        startDate : bodyValue
        })
    }
    else if(bodyAttribute === "endDate")
    {
        var searchedEvent = await Event.find({
            endDate : bodyValue
        })
    }
    else if(bodyAttribute === "tags")
    {
        var searchedEvent = await Event.find({
        tags : bodyValue
        })
    }
    res.json({data:searchedEvent})
}
