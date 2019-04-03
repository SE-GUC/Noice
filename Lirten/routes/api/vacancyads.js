const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Vacancyad = require('../../models/Vacancyad');
const vvalidator = require('../../validations/vacancyadValidations')



///////////////////////create vacancyad//////////////////////////////////

router.post('/', async (req,res) => {
    try {
     const isValidated = vvalidator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newVacancyad = await Vacancyad.create(req.body)
     res.json({msg:'Vacancy ad was created successfully', data: newVacancyad})
     
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

 ///////////////////////Edit vacancyad//////////////////////////////////

 router.put('/:id', async (req,res) => {
    try {
     const mid = req.params.id
     const vacancyad = await Vacancyad.findById(mid);
     if(!vacancyad) return res.status(404).send({error: 'Vacancy ad does not exist'})
     const isValidated = vvalidator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedVacancyad = await Vacancyad.findByIdAndUpdate(mid,req.body,function (err) {
        if (err) return next(err);
        res.json({msg: 'Vacancyad updated successfully', data:updatedVacancyad});
    });
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

  ///////////////////////Delete vacancyad//////////////////////////////////

  router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedVacancyad = await Vacancyad.findByIdAndRemove(id)
     res.json({msg:'Vacancyad was deleted successfully', data: deletedVacancyad})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

///////////////////////Delete vacancyad//////////////////////////////////


 router.get('/', async (req,res) => {
    const vacancyad = await Vacancyad.find()
    res.json({data: vacancyad})
})

router.get('/:idd', async (req,res) => {
    const id =req.params.idd
    const partners = await Vacancyad.findById(id)
    if(!partners) return res.status(404).send({error: 'Vacancyad does not exist'})
    res.json({data: partners})
})



module.exports = router;
