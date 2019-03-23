const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')

//Models
const vacancy = require('../../models/Vacancy')
const validator = require('../../validations/vacancyValidations')


// Create a new Vacancy
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newVacancy = await vacancy.create(req.body)
     res.json({msg:'Co-Working Space was created successfully', data: newVacancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

vacancy2

 // Get all Vacancies
router.get('/', async (req,res) => {
    const vacancy2 = await vacancy.find()
    res.json({data: vacancy2})
})


deletedVacancy
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedVacancy = await vacancy.findByIdAndRemove(id)
     res.json({msg:'Vacancy was deleted successfully', data: deletedVacancy})
    }
    catch(error) {

        console.log(error)
    }  
 })


 module.exports = router
 
