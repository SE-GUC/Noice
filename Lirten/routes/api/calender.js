// Dependencies
const express = require('express');
const mongoose = require('mongoose')
const router = express.Router();

// Models
const calender = require('../../models/calender');
const validator = require('../../validations/calenderValidations')



// Get all users
router.get('/', async (req, res) => {
    const calenders = await calender.find()
    res.json({ data: calenders })
})
router.get('/:id', async (req, res) => {
    try {
        const id = req.params.id
        const Calenderid = await calender.findById(id)
        res.json({ data: Calenderid })
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  
})

router.post('/create',async(req,res) =>{

    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newCalender = await calender.create(req.body)
        res.json({msg:'Calender was created successfully', data: newCalender})
       }
       catch(error) {
           // We will be handling the error later
           console.log(error)
       }  

})


router.delete('/:id',async(req,res) => {

 try {
    const id = req.params.id
    const deletedCalender = await calender.findByIdAndRemove(id)
    res.json({msg:'Calender was deleted successfully', data: deletedCalender})
   }
   catch(error) {
       // We will be handling the error later
       console.log(error)
   }  

})

module.exports = router;
