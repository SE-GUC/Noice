const express = require('express')
const mongoose = require('mongoose')
var Admin = require('../models/admin');
const validator = require('../Validations/adminValidations')

exports.createAdmin = async function (req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newAdmin = await Admin.create(req.body)
        res.json({msg:'Admin was created successfully', data: newAdmin})
       }
       catch(error) {
           console.log(error)
       }  
}
exports.updateAdmin = async function(req,res){
    try {
        const id = req.params.id
        const admin = await Admin.findById(id)
        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedAdmin = await Admin.findOneAndUpdate(req.body)
        res.json({msg: 'Admin is updated successfully', data: updatedAdmin})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
} 
exports.getAllAdmins = async function(req,res){
    const admins = await Admin.find()
    res.json({data: admins})
}
exports.deleteAdmin = async function(req,res){
    try {
        const id = req.params.id
        const deletedAdmin = await Admin.findOneAndDelete(id)
        res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
}
exports.findAdmin = async function(req,res){
    try {
        const id = req.params.id
        const admin = await Admin.findById(id)
        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        res.json({msg: 'Admin found successfully', data: admin})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

