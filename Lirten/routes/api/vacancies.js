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



 // Get ALL Vacancies
router.get('/', async (req,res) => {
    const vacancy2 = await vacancy.find()
    res.json({data: vacancy2})
})



// Delete Vacancy
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


 
// Filter Vacancy by ID
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const vacancyId = await vacancy.findById(id)
        res.json({ data: vacancyId })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
})


 
// Filter Vacancy by location
router.get('/:location2', async (req, res) => {
    try {
        const location2 = req.params.location2
        var query = { location: location2 };
        const vacancyLocation = await vacancy.find(query)
        res.json({ data: vacancyLocation })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
})


// Filter Vacancy by salary
router.get('/:salary2', async (req, res) => {
    try {
        const salary2 = req.params.salary2
        var query = { salary: salary2 };
        const vacancySalary = await vacancy.find(query)
        res.json({ data: vacancySalary })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
})

// Filter Vacancy by daily working hours
router.get('/:dailyHours2', async (req, res) => {
    try {
        const dailyHours2 = req.params.dailyHours2
        var query = { dailyHours: dailyHours2 };
        const vacancyDailyHours = await vacancy.find(query)
        res.json({ data: vacancyDailyHours })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
})

// Filter Vacancy by time
router.get('/:time2', async (req, res) => {
    try {
        const time2 = req.params.time2
        var query = { time: time2 };
        const vacancyTime = await vacancy.find(query)
        res.json({ data: vacancyTime })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
})


// Filter Vacancy by owner
router.get('/:owner2', async (req, res) => {
    try {
        const owner2 = req.params.owner2
        var query = { owner: owner2 };
        const vacancyOwner = await vacancy.find(query)
        res.json({ data: vacancyOwner })
       }
       catch(error) {
        // We will be handling the error later
           console.log(error)
       }
})



 module.exports = router
 
