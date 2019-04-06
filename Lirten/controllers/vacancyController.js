const express = require('express')
const mongoose = require('mongoose')
const axios = require("axios")
var vacancy= require('../models/vacancy')
const validator = require('../validations/vacancyValidations')

//var notification = require("../models/Notification")

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

        var acceptedMember = SeeIfMemberIsAcceptedInBody(req.body)
        if(!acceptedMember)
        {
             // If the update is to the vacancy itself, send a notification to everyone who applied
             NotifyAllApplicantsThatVacancyUpdated(updateVacancy)
        }
        else{
            // If the update is to accept a member, send a notification to that member only
            SendNotificationToAcceptedMember(acceptedMember,updateVacancy.empID)
        }

        //if(Object.keys(req.body.applicants).includes({"accepted" : "true"}))
         



        res.json({msg: 'Vacancy updated successfully', data:updateVacancy.applicants})
        
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }
}

function SeeIfMemberIsAcceptedInBody(reqbody)
{
    var applicants = reqbody.applicants
    if(applicants == null) return;
    for (var i = 0; i < applicants.length; i++) {
        // if a member is updated in the body of the request to be accepted 
        if(applicants[i].accepted === "true")
        {
            return applicants[i]
        }   
    } 
}

// Takes an accepted member and employer ID
async function SendNotificationToAcceptedMember(acceptedMember, employerID)
{
    //console.log(acceptedMember.memberID +"      " + employerID )

    var memberIDD = acceptedMember.memberID
    var notification =  {
        "From": employerID + "", // empID?
        "To": memberIDD + "",
        "Time": "1/2/2019",
        "Type": "Vacancy",
        "Title": "You have been accepted to our vacancy!"
    }

    try
    {
        // Send a notification to the accepted member (sends 1 notif)
        await axios.post('http://localhost:3000/api/notifications/',notification)
    }
    catch(error)
    { 
        console.log(error)
    }
}

async function NotifyAllApplicantsThatVacancyUpdated(vacancyy)
{
    var applicants = vacancyy.applicants
    var employerIDD = vacancyy.empID
    for (var i = 0; i < applicants.length; i++) {

        var memberIDD = applicants[i].memberID
        //create the notification
        var notification =  {
            "From": employerIDD + "", // empID?
            "To": memberIDD + "",
            "Time": "1/2/2019",
            "Type": "Vacancy",
            "Title": "A vacancy you've applied to has been updated"
        }
        try
        {
            // Post a notification for every applicant
            await axios.post('http://localhost:3000/api/notifications/',notification)
        }
catch(error)
        { 
            console.log(error)
        }
    } // end loop
    // applicants.filter(member => member.accepted === "false") // finds all not accepted members
    // applicants.find(member => member.accepted === "false") // finds only one
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

//handling applications
exports.viewAllApplicants = async(req,res)=>{
    try {
        const id = req.params.id
        const Vacancyy = await vacancy.findById(id)
        if(!Vacancyy) return res.status(404).send({error: 'Vacancy does not exist'})
        var query = await vacancy.find({
            _id:id
        }).select('applicants')
        res.json({msg: 'application successfully', data: query})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}


exports.viewNumberOfApplicants = async function(req,res){
    try {
        const id = req.params.id
        const Vacancyy = await vacancy.findById(id)
        if(!Vacancyy) return res.status(404).send({error: 'Vacancy does not exist'})
        console.log('im here '+Vacancyy.applicants.length)
        res.json({msg: 'no of applicants is', data: Vacancyy.applicants.length})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
exports.apply= async (req,res)=>{
    try {
        const id = req.params.id
        const body = req.body
        var Vacancyy = await vacancy.findById(id)
        if(!Vacancyy) return res.status(404).send({error: 'Vacancy does not exist'})
        console.log('im here '+Vacancyy.applicants.length)
        Vacancyy.applicants.push(body)
        console.log('now im pushed '+Vacancyy.applicants.length)
        console.log(Vacancyy.applicants)
        const updateBody={
         "applicants":Vacancyy.applicants
        }
        const placeholder = await vacancy.findByIdAndUpdate(id,updateBody)
        console.log('after update'+placeholder)
        Vacancyy = await vacancy.findById(id)
        res.json({msg: 'we applied to you', data: Vacancyy})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}

