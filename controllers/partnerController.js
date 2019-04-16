const express = require('express')
const mongoose = require('mongoose')

var Partner = require('../models/Users');
const validator = require('../Validations/usersValidations')
const Vacancy = require('../models/Vacancy');
const vvalidator = require('../Validations/VacancyValidations')


exports.createPartner = async function (req,res){
    try {
        const isValidated = validator.createPartnerValidation(req.body)
        var error={
            error:400
        }
        if (isValidated.error) return res.json({msg:'Error 400: Bad Request', data:isValidated.error.details[0].message})
        const newPartner = await Partner.create(req.body)
        res.json({msg:'Partner was created successfully', data: newPartner})
       }
       catch(error) {
           console.log(error)
       }  
}
exports.updatePartner = async function(req,res){
    try {
        const mid = req.params.id
        const partner = await Partner.findById(mid);
        if(!partner) return res.status(404).send({error: 'Partner does not exist'})
        const isValidated = validator.updatePartnerValidation(req.body)
        var error={
            error:400
        }
        if (isValidated.error) return res.json({msg:'Error 400: Bad Request', data:isValidated.error.details[0].message})
        const updatedPartner = await Partner.findByIdAndUpdate(mid,req.body,function (err) {
           if (err) return next(err);
       });
       const after= await Partner.findById(mid);
       res.json({msg: 'Partner updated successfully',data: after});
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

exports.createVacancy = async function(req,res){
    try {
        const isValidated = vvalidator.createValidation(req.body)
        var error={
            error:400
        }
        if (isValidated.error) return res.json({msg:'Error 400: Bad Request', data:isValidated.error.details[0].message})
        const newVacancy = await Vacancy.create(req.body)
        res.json({msg:'Vacancy was created successfully', data: newVacancy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

exports.editVacancy = async function(req,res){
    try {
        const _id = req.params.id
        const partnerId =req.params.yourid
        const vacancyad = await Vacancy.find({_id,partnerId});
        if(!vacancyad) return res.status(404).send({error: 'Vacancy does not exist'})
        const isValidated = vvalidator.updateValidation(req.body)
        var error={
            error:400
        }
        if (isValidated.error) return res.json({msg:'Error 400: Bad Request', data:isValidated.error.details[0].message})
        const updatedVacancyad = await Vacancy.findByIdAndUpdate(_id,req.body,function (err) {
           if (err) return next(err);
       });
       const after= await Vacancy.findById(_id)
       res.json({msg: 'Vacancy updated successfully', data: after});
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
}

exports.deleteVacancy = async function(req,res){
    try {
        const partnerId= req.params.id
        const _id= req.params.iid
        const deletedVacancyad = await Vacancy.findByIdAndRemove({_id,partnerId})
        res.json({msg:'Vacancy was deleted successfully', data: deletedVacancyad})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

exports.getOldvacancy = async function(req,res){
    const partnerId= req.params.id
     const vacancyad = await Vacancy.find({partnerId})
     res.json({data: vacancyad})
}

exports.getAllvacancy = async function(req,res){
    const partners = await Vacancy.find({})
    res.json({data: partners})
}

exports.getMyvacancy = async function(req,res){
    const partnerId= req.params.id
    const _id= req.params.iid
    const vacancyad = await Vacancy.find({_id,partnerId})
    res.json({data: vacancyad})
}