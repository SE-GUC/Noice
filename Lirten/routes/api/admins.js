const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')

const Admin = require('../../models/Admin')
const validator = require('../../validations/adminValidations')




//show all admins
router.get('/',async (req, res) =>{
    const admins = await Admin.find()
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
     const adminId =  req.params.id
     const admin = await Admin.findById(adminId);
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin updated successfully',data:updatedAdmin})
     
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


 //update an admin by ID
 router.put('/:id', async (req,res) => {
    try {
     const adminId =  req.params.id
     const admin = await Admin.findById(adminId);
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin updated successfully',data:updatedAdmin})
     
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


 /* WIP
 
 router.put('/deactivate', async (req,res) => {
    try {
     const adminId =  req.params.id
     const admin = await Admin.findOne(adminId);
     if(!admin) return res.status(404).send({error: 'Admin does not exist'})
     const isValidated = validator.deactivateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedAdmin = await Admin.updateOne(req.body)
     res.json({msg: 'Admin deactivated successfully'})
     
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })


/* router.delete('/deleteAdmin',async (req,res) => {
try{
    const adminId =  req.params.id
    const admin = await Admin.findById(adminId);
    if(!admin) return res.status(404).send({error: 'Admin does not exist'})
    if(admin.getID)

}
catch(error){
    console.log(error)
}


 })*/










module.exports = router;