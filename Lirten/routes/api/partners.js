
const express = require('express')
const router = express.Router()
const partner_controller = require('../../controllers/partnerController')


router.get('/',partner_controller.getAllPartners)

// Create a Partner
router.post('/',partner_controller.createPartner)

// Update a Partner
router.put('/', partner_controller.updatePartner)

// Delete a Partner
router.delete('/',partner_controller.deletePartner)

//Find a Partner by ID
router.get('/',partner_controller.findPartner)



module.exports = router

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Vacancyad = require('../../models/Vacancyad');
const Partner = require('../../models/Partner');
const validator = require('../../validations/partnerValidations')
const vvalidator = require('../../validations/vacancyadValidations')


///////////////create///////////////////////////////

router.post('/', async (req,res) => {
    try {
     const isValidated = validator.createValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const newPartner = await Partner.create(req.body)
     res.json({msg:'Partner was created successfully', data: newPartner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

////////////////////get////////////////////////////////////////

router.get('/', async (req,res) => {
    const partners = await Partner.find()
    res.json({data: partners})
})

//////////////////////////update person///////////////////////////////////////////


router.put('/:id', async (req,res) => {
    try {
     const mid = req.params.id
     const partner = await Partner.findById(mid);
     if(!partner) return res.status(404).send({error: 'Partner does not exist'})
     const isValidated = validator.updateValidation(req.body)
     if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
     const updatedPartner = await Partner.findByIdAndUpdate(mid,req.body,function (err) {
        if (err) return next(err);
        res.json({msg: 'Partner updated successfully'});
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
     const deletedPartner = await Partner.findByIdAndRemove(id)
     res.json({msg:'Partner was deleted successfully', data: deletedPartner})
    }
    catch(error) {
        // We will be handling the error later
        console.log(error)
    }  
 })

///////////////////////create vacancyad//////////////////////////////////

router.post('/createvacancyad', async (req,res) => {
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

 router.put('/editvacancyad/:id', async (req,res) => {
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

  router.delete('/deletevacancyad/:id', async (req,res) => {
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

 router.get('/view', async (req,res) => {
    const vacancyad = await Vacancyad.find()
    res.json({data: vacancyad})
})



module.exports = router;

