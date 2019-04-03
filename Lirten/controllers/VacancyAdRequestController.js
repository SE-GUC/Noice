const express = require('express')
const mongoose = require('mongoose')
var VacancyAdRequest = require('../models/VacancyAdRequest')
const validator = require('../validations/VacancyAdRequestValidations')

exports.get = async function(req,res){
    const vacancyAdRequest = await VacancyAdRequest.find()
    res.json({data: vacancyAdRequest})
}

exports.getbyid = async function(req,res){
    const idd =req.params.id
    const partners = await Vacancyrequest.findById(idd)
    if(!partners) return res.status(404).send({error: 'Vacancy request does not exist'})
    res.json({data: partners})
}

exports.create = async function(req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newVacancyAdRequest = await VacancyAdRequest.create(req.body)
        res.json({msg:'Vacancy ad request was created successfully', data: newVacancyAdRequest})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
}

exports.update = async function(req,res){
    try {
        const id = req.params.id
        const vacancyAdRequest = await VacancyAdRequest.findOne({id})
        if(!vacancyAdRequest) return res.status(404).send({error: 'vacancy Ad Request does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedVacancyAdRequest = await VacancyAdRequest.updateOne(req.body)
        res.json({msg: 'vacancy Ad Request updated successfully'})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
}

exports.delete = async function(req,res){
    try {
        const id = req.params.id
        const deletedVacancyAdRequest = await VacancyAdRequest.findOneAndDelete(id)
        res.json({msg:'Vacancy Ad Request was deleted successfully', data: deletedVacancyAdRequest})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
}
