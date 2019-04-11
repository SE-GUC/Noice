const express = require('express')
const mongoose = require('mongoose')
var Partner = require('../models/partner');
const Vacancyad = require('../models/Vacancyad');
const Vacancyrequest = require('../models/VacancyAdRequest');
const validator = require('../validations/partnerValidations')
const vvalidator = require('../validations/vacancyadValidations')
const vvvalidator = require('../validations/VacancyAdRequestValidations')

exports.createPartner = async function (req,res){
    try {
        const isValidated = validator.createValidation(req.body)
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
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedPartner = await Partner.updateOne(req.body)
        updatedPartner = await Partner.findOne(req.body)
        res.json({msg: 'Partner updated successfully',data: updatedPartner})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
} 
exports.getAllPartners = async function(req,res){
    const partners = await Partner.find()
    res.json({data: partners})
}
exports.getstatus = async function(req,res){
    const id = req.params.id
    const partners = await Vacancyrequest.findById(id)
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

exports.requestVacancyad = async function(req,res){
    try {
        const isValidated = vvvalidator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newVacancyad = await Vacancyrequest.create(req.body)
        res.json({msg:'Request was created successfully', data: newVacancyad})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

exports.createVacancyad = async function(req,res){
    try {
        const isValidated = vvalidator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newVacancyad = await Vacancyad.create(req.body)
        res.json({msg:'Vacancyad was created successfully', data: newVacancyad})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

exports.editVacancyad = async function(req,res){
    try {
        const mid = req.params.id
        const vacancyad = await Vacancyad.findById(mid);
        if(!vacancyad) return res.status(404).send({error: 'Vacancy ad does not exist'})
        const isValidated = vvalidator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedVacancyad = await Vacancyad.findByIdAndUpdate(mid,req.body,function (err) {
           if (err) return next(err);
       });
       const after= await Vacancyad.findById(mid)
       res.json({msg: 'Vacancyad updated successfully', data: after});
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
}

exports.updatestatus = async function(req,res){
    try {
        const mid = req.params.id
        const vacancyad = await Vacancyrequest.findById(mid);
        if(!vacancyad) return res.status(404).send({error: 'Vacancy ad request does not exist'})
        const isValidated = vvvalidator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedVacancyad = await Vacancyrequest.findByIdAndUpdate(mid,req.body,function (err) {
           if (err) return next(err);
       });
       const after= await Vacancyrequest.findById(mid)
       res.json({msg: 'Vacancyad updated successfully', data: after});
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
}

exports.deleteVacancyad = async function(req,res){
    try {
        const id = req.params.id
        const deletedVacancyad = await Vacancyad.findByIdAndRemove(id)
        res.json({msg:'Vacancyad was deleted successfully', data: deletedVacancyad})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

exports.deleterequest = async function(req,res){
    try {
        const id = req.params.id
        const deletedVacancyad = await Vacancyrequest.findByIdAndRemove(id)
        res.json({msg:'Vacancyrequest was deleted successfully', data: deletedVacancyad})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

exports.getOldvacancyads = async function(req,res){
    const ownerid= req.params.id
     const vacancyad = await Vacancyad.find({ownerid})
     res.json({data: vacancyad})
}

exports.getMyvacancyad = async function(req,res){
    const ownerid= req.params.id
    const _id= req.params.iid
    const vacancyad = await Vacancyad.find({_id,ownerid})
    res.json({data: vacancyad})
}

