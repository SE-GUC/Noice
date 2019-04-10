const express = require('express')
const mongoose = require('mongoose')
var vacancy= require('../models/vacancy')
const validator = require('../Validations/vacancyValidations')

exports.getAllVacancies = async function(req,res){
    const vacancy= await Vacancy.find()
    res.json({data: vacancy})
}

exports.createVacancy = async function(req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newVacancy = await vacancy.create(req.body)
        res.json({msg:'Vacancy was created successfully', data: newVacancy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
}

exports.updateVacancy = async function(req,res){
    try {
        const id = req.params.id
        const updateVacancy = await vacancy.findById(id)
        if(!updateVacancy) return res.status(404).send({error: 'Vacancy does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const upVacancy = await vacancy.updateOne(req.body)
        res.json({msg: 'Vacancy updated successfully'})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
}

exports.deleteVacancy = async function(req,res){
    try {
        const id = req.params.id
        const deletedVacancy = await vacancy.findByIdAndDelete(id)
        res.json({msg:'Vacancy was deleted successfully', data: deletedVacancy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
}
exports.findVacancy = async function(req,res){
    try {
        const id = req.params.id
        const Vacancyy = await vacancy.findById(id)
        if(!Vacancyy) return res.status(404).send({error: 'Vacancy does not exist'})
        res.json({msg: 'Vacancy found successfully', data: Vacancyy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
