const express = require('express')
const mongoose = require('mongoose')
var Member = require('../models/Users');
const validator = require('../validations/usersValidations')

exports.createMember = async function (req,res){
    try {
        const isValidated = validator.createMemberValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newMember = await Member.create(req.body)
        res.json({msg:'Member was created successfully', data: newMember})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    }

exports.updateMember= async function(req,res){
    try {
        const id = req.params.id
        const memberr = await Member.findById(id)
<<<<<<< HEAD
        if(!memberr) return res.status(404).send({error: 'Notification does not exist'})
        const isValidated = validator.updateValidation(req.body)
=======
        if(!memberr) return res.status(404).send({error: 'Member does not exist'})
        const isValidated = validator.updateMemberValidation(req.body)
>>>>>>> 845825d284e1c21126f852b0499871aa5dc94f7c
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedMember = await Member.findOneAndUpdate(req.body)
        res.json({msg: 'Member is updated successfully', data: updatedMember})
       }
       catch(error) {
           console.log(error)
       }  
    }
exports.getAllMember= async function(req,res){
    const members = await Member.find({
        typeOfUser:"Member"
    })
    res.json({data: members})
}
exports.deleteMember = async function(req,res){
    try {
        const id = req.params.id
        const deletedMember = await Member.findOneAndDelete(id)
        res.json({msg:'Member was deleted successfully', data: deletedMember})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    }
exports.findMember= async function(req,res){
    try {
        const id = req.params.id
        const member = await Member.findById(id)
        if(!member) return res.status(404).send({error: 'Member does not exist'})
        res.json({msg: 'Member found successfully', data: member})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}