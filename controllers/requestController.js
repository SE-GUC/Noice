const express = require('express')
const mongoose = require('mongoose')
var request = require('../models/request');
const validator = require('../Validations/requestValidations')

exports.createRequest = async function (req,res){
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
}
exports.updateRequest = async function(req,res){
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
} 
exports.getAllRequests = async function(req,res){
    const requests = await Request.find()
    res.json({data: requests})
}
exports.deleteRequest= async function(req,res){
    try {
        const id = req.params.id
        const deletedRequest = await request.findByIdAndRemove(id)
        res.json({msg:'Request was deleted successfully', data: deletedRequest})
       }
       catch(error) {
   
           console.log(error)
       }  
}
exports.findRequest = async function(req,res){
    try {
        const id = req.params.id
        const Request = await request.findById(id)
        if(!Request) return res.status(404).send({error: 'Request does not exist'})
        res.json({msg: 'Request found successfully', data: Request})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
