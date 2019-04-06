const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Admin = require('../../models/Admin')
const validator = require('../../validations/adminValidations')
const locationInAdminsController = require('../../controllers/locationControllers')





//show all admins
router.get('/',async (req, res) =>{
    const admins = await Admin.find()
    res.json({ data: admins })
} )

router.get('/:id',async (req, res) =>{
    const aid = req.params.id
    const admins = await Admin.findById(aid)
    res.json({ data: admins })
} )

router.post('/create', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newAdmin = await Admin.create(req.body)

     res.json({msg:'Admin was created successfully', data: newAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })
 router.put('/:id', async (req,res) => {
    try {
        const id = req.params.id
        const admin = await Admin.findById(id)
        if(!admin) return res.status(404).send({error: 'Admin does not exist'})
        const isValidated = validator.updateValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const beforUpdate = await Admin.findByIdAndUpdate(id,req.body)
        updatedAdmin = await Admin.findById(id)
        res.json({msg: 'Admin updated',data: updatedAdmin})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
 })
 
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedAdmin = await Admin.findByIdAndRemove(id)
     res.json({msg:'Admin was deleted successfully', data: deletedAdmin})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

router.get('/viewLocation/:id',locationInAdminsController.findLocation)

router.put('/updateLocation/:id',locationInAdminsController.updateLocation)

router.delete('/deleteLocation/:id',locationInAdminsController.deleteLocation)

module.exports = router