const express = require('express')
const mongoose = require('mongoose')

const notification = require('../models/Notification')
const validator = require('../Validations/notificationValidations')


exports.getAllNotifications = async function(req,res){
    const not2 = await notification.find()
    res.json({data: not2})
}


exports.findNotification = async function(req,res){
    try {
        const id = req.params.id
        const notificationID = await notification.findById(id)
        res.json({ data: notificationID })
       }
       catch(error) {
           console.log(error)
       }
}

exports.deleteNotification = async function(req,res){
    try {
        const id = req.params.id
        const deletedNotification = await notification.findByIdAndRemove(id)
        res.json({msg:'Notification was deleted successfully', data: deletedNotification})
       }
       catch(error) {
   
           console.log(error)
       } 
}

exports.createNotification = async function (req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newNotification = await notification.create(req.body)
        res.json({msg:'Notification was created successfully', data: newNotification})
       }
       catch(error) {
           console.log(error)
       }  
}

exports.updateNotification = async function(req,res){
    try {
        const id = req.params.id
        const Notification = await notification.findById(id)
        if(!Notification) return res.status(404).send({error: 'Notification does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedNotification = await notification.updateOne(req.body)
        updatedNotification = await notification.findOne(req.body)
        res.json({msg: 'Notification is updated successfully', data: updatedNotification})
       }
       catch(error) {
           console.log(error)
       }  
} 