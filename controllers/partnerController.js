const express = require('express')
const mongoose = require('mongoose')
var Partner = require('../models/Users');
const validator = require('../Validations/usersValidations')

exports.createPartner = async function (req,res){
    try {
        const isValidated = validator.createPartnerValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newPartner = await Partner.create(req.body)
        res.json({msg:'Partner was created successfully', data: newPartner})
       }
       catch(error) {
           console.log(error)
       }  
}
exports.updatePartner = async function(req,res){
    try {
        const id = req.params.id
        const partner = await Partner.findById(id)
        if(!partner) return res.status(404).send({error: 'Partner does not exist'})
        const isValidated = validator.updatePartnerValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedPartner = await Partner.findByIdAndUpdate(id,req.body)
        res.json({msg: 'Partner updated successfully',data: updatedPartner})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
} 
exports.getAllPartners = async function(req,res){
    const partners = await Partner.find({
        typeOfUser:"Partner"
    })
    res.json({data: partners})
}
exports.deletePartner = async function(req,res){
    try {
        const id = req.params.id
        const partner = await Partner.findById(id)
        if(!partner) return res.status(404).send({error: 'Partner does not exist'})
        const deletedPartner = await Partner.findByIdAndRemove(id)
        res.json({msg:'Partner was deleted successfully', data: deletedPartner})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
exports.findPartner = async function(req,res){
    try {
        const id = req.params.id
        const partner = await Partner.findById(id)
        if(!partner) return res.status(404).send({error: 'Partner does not exist'})
        res.json({msg: 'Partner found successfully', data: partner})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
