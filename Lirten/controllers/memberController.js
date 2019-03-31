const express = require('express')
const mongoose = require('mongoose')
var Partner = require('../models/member');
const validator = require('../validations/memberValidations')

exports.createMember = async function (req,res){
    try {
        const isValidated = validator.createValidation(req.body)
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
        const mid = req.params.id
        const member = await Member.findById(mid);
        if(!member) return res.status(404).send({error: 'Member does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const updatedMember = await Member.findByIdAndUpdate(mid,req.body,function (err) {
           if (err) return next(err);
           res.json({msg: 'Member updated successfully', data:updatedMember});
       });
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
    }
exports.getAllMember= async function(req,res){
    const members = await Member.find()
    res.json({data: members})
}
exports.deleteMember = async function(req,res){
    try {
        const id = req.params.id
        const deletedMember = await Member.findByIdAndRemove(id)
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
        const member = await Member.findOne({id})
        if(!member) return res.status(404).send({error: 'Member does not exist'})
        res.json({msg: 'Member found successfully', data: member})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}