const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Member = require('../../models/Member');
const validator = require('../../validations/memberValidations')


///////////////create///////////////////////////////

router.post('/', async (req,res) => {
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
 })

////////////////////get////////////////////////////////////////

router.get('/', async (req,res) => {
    const members = await Member.find()
    res.json({data: members})
})

//////////////////////////update person///////////////////////////////////////////


router.put('/:id', async (req,res) => {
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
 })


///////////////////////delete person//////////////////////////////////

router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedMember = await Member.findByIdAndRemove(id)
     res.json({msg:'Member was deleted successfully', data: deletedMember})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

module.exports = router;