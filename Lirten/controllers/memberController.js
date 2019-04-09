const express = require('express')
const mongoose = require('mongoose')
const axios = require('axios')
var Member = require('../models/member');
const validator = require('../validations/memberValidations')
const propValidator = require('../Validations/propsalValidations')
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
        const id = req.params.id
        const memberr = await Member.findById(id)
        if(!memberr) return res.status(404).send({error: 'Notification does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var updatedMember = await Member.findOneAndUpdate(req.body)
        res.json({msg: 'Member is updated successfully', data: updatedMember})
       }
       catch(error) {
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

exports.applyForVac = async function(req,res){
    try {
        var isVaccValidResponse = await axios.get('http://localhost:3000/api/vacancy/'+req.params.id)   
        var vaccRead  = isVaccValidResponse.data.data
        console.log(JSON.stringify({vaccancy:vaccRead}))
        if(!vaccRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified vaccany'}))
            return  res.status(404).json({error: 'Cannot get the specified vaccany'})
        }
        const isValidated = propValidator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message });
        var isMemValidResponse = await axios.get('http://localhost:3000/api/member/'+req.body.memberId)   
        var memRead  = isMemValidResponse.data.data
        console.log(JSON.stringify({member:memRead}))
        if(!memRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified member'}))
            return  res.status(404).json({error: 'Cannot get the specified member'})
        }
        const newProp = req.body
        vaccRead.proposals.forEach(element =>{
            if(element.memberId==req.body.memberId){
                return res.json({Err:'This member has applied already for that job'});
            }
        })
        vaccRead['proposals'].push(newProp)
        delete vaccRead.__v
        delete vaccRead._id
        delete vaccRead.time
        console.log({vaccReadKey:vaccRead})
        const newVacc = await axios.put('http://localhost:3000/api/vacancy/'+req.params.id,vaccRead)
        return  res.json({msg:'Propsoal was added successfully', data: newVacc.data})
       }
       catch(error) {
        console.log(error)
        if(error.response){
            return res.json({error:'Error applying for job with status code'+ error.status})
        }
    }
}

exports.deleteProp = async function(req,res){
    try {
        var isVaccValidResponse = await axios.get('http://localhost:3000/api/vacancy/'+req.body.id)   
        var vaccRead  = isVaccValidResponse.data.data
        console.log({vaccancy:vaccRead})
        if(!vaccRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified vaccany'}))
            return  res.status(404).json({error: 'Cannot get the specified vaccany'})
        }
        var isMemValidResponse = await axios.get('http://localhost:3000/api/member/'+req.params.memberId)   
        var memRead  = isMemValidResponse.data.data
        console.log(JSON.stringify({member:memRead}))
        if(!memRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified member'}))
            return  res.status(404).json({error: 'Cannot get the specified member'})
        }
        var propFnd = null
        console.log({vaccReadKey:vaccRead})
        vaccRead.proposals.forEach(element =>{
            if(element.memberId==req.params.memberId){
                propFnd = element
            }
        })
        if(!propFnd){
            return res.json({msg: "You deleted or never applied for this vacany."})
        }
        console.log({propFnd:propFnd, index: vaccRead.proposals.indexOf(propFnd)})

        vaccRead.proposals.splice(vaccRead.proposals.indexOf(propFnd),1)
        delete vaccRead.__v
        delete vaccRead._id
        delete vaccRead.time
        console.log({vaccReadKey:vaccRead})
        const newVacc = await axios.put('http://localhost:3000/api/vacancy/'+req.body.id,vaccRead)
        return  res.json({msg:'Propsoal was deleted successfully', data: newVacc.data})
       }
       catch(error) {
        console.log(error)
        if(error.response){
            return res.json({error:'Error deleteing proposal from job with status code'+ error.status})
        }
    }
}