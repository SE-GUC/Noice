const express = require('express')
const mongoose = require('mongoose')
var Message = require('../models/message');
const validator = require('../Validations/messageValidations')

exports.createMessage = async function (req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newMessage = await Message.create(req.body)
        res.json({msg:'Message was created successfully', data: newMessage})
       }
       catch(error) {
           console.log(error)
       }  
}
exports.getAllMessages = async function(req,res){
    const messages = await Message.find()
    res.json({data: messages})
}
exports.deleteMessage = async function(req,res){
    try {
        const id = req.params.id
        const message = await Message.findById(id)
        if(!message) return res.status(404).send({error: 'Message does not exist'})
        const deletedMessage = await Message.findByIdAndRemove(id)
        res.json({msg:'Message was deleted successfully', data: deletedMessage})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
exports.findMessage = async function(req,res){
    try {
        const id = req.params.id
        const message = await Message.findById(id)
        if(!message) return res.status(404).send({error: 'Message does not exist'})
        res.json({msg: 'Message found successfully', data: message})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
