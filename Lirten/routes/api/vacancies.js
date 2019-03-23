 // Dependencies
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Models
const Vacancy = require('../../models/Vacancy');
const validator = require('../../validations/VacancyValidations')


// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: vacancies }));


// Create a new Vacancy
router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newVacancy = await Vacancy.create(req.body)
     res.json({msg:'Vacancy was created successfully', data: newVacancy})
    }
    catch(error) {
        console.log(error)
    }  
 })

// Delete a Vacancy
 router.delete('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const deletedVacancy = await Vacancy.findByIdAndRemove(id)
     res.json({msg:'Vacancy was deleted successfully', data: deletedLocation})
    }
    catch(error) {

        console.log(error)
    }  
 })

// Update a Vacancy
router.put('/:id', async (req,res) => {
    try {
     const id = req.params.id
     const Vacancy = await Vacancy.findById(id)
     if(!Vacancy) return res.status(404).send({error: 'Vacancy does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedVacancy = await Vacancy.updateOne(req.body)
     res.json({msg: 'Vacancy is updated successfully'})
    }
    catch(error) {
        console.log(error)
    }  
 })


 // Get all Vacancy
 router.get('/', async (req,res) => {
    const Vacancy2 = await Vacancy2.find()
    res.json({data: Vacancy2})
})
module.exports = router;
