const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const Partner = require('../../models/Partner');

const partnersss = [
    new Partner('ahmed',20,'computer science','intel','smart village,6 of october','programmer','el-limby,abosalah,atef,om-salah','tarabizat w bing bong','madraset ashour, eltahreer, guc, tal-aviv','game, concepts, database, os','ana 7omar w 3*aby yama'),
    new Partner('ahmed',20,'computer science','intel','smart village,6 of october','programmer','el-limby,abosalah,atef,om-salah','tarabizat w bing bong','madraset ashour, eltahreer, guc, tal-aviv','game, concepts, database, os','copy paste kaman aho')
];

router.get('/', (req, res) => res.json({ data: partnersss }));


///////////////create///////////////////////////////
router.post('/', (req, res) => {
	const name = req.body.name;
	const age = req.body.age;
	const field = req.body.field;
	const companyname = req.body.companyname;
	const companylocation = req.body.companylocation;
	const occupation = req.body.occupation;
	const partners = req.body.partners;
	const events = req.body.events;
	const vacancies = req.body.vacancies;
	const projects = req.body.projects;
    const feedbackform = req.body.feedbackform;
    
	if (!name) return res.status(400).send({ err: 'Name field is required' });
	if (typeof name !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
	if (!age) return res.status(400).send({ err: 'Age field is required' });
    if (typeof age !== 'number') return res.status(400).send({ err: 'Invalid value for age' });
    if (!field) return res.status(400).send({ err: 'Field field is required' });
    if (typeof field !== 'string') return res.status(400).send({ err: 'Invalid value for field' });
    if (!companyname) return res.status(400).send({ err: 'Company name field is required' });
    if (typeof companyname !== 'string') return res.status(400).send({ err: 'Invalid value for company name' });
    if (!companylocation) return res.status(400).send({ err: 'Company location field is required' });
    if (typeof companylocation !== 'string') return res.status(400).send({ err: 'Invalid value for company location' });
    if (!occupation) return res.status(400).send({ err: 'Cccupation field is required' });
	if (typeof occupation !== 'string') return res.status(400).send({ err: 'Invalid value for occupation' });
    

	const newUser = {
		name,
        age,
        field,
        companyname,
        companylocation,
        occupation,
        partners,
        events,
        vacancies,
        projects,
        feedbackform,
		id: uuid.v4(),
    };
    partnersss.push(newUser);
	return res.json({ data: newUser });
});

////////////////////search for a certain person////////////////////////////////////////
router.get('/:id', (req, res) => {
    const bookId = req.params.id
    const book = partnersss.find(book => book.id === bookId)
    return res.json({ data: book });
})


//////////////////////////update person///////////////////////////////////////////


router.put('/:id', (req, res) => {
    const bookId = req.params.id

    const updatedName = req.body.name;
    const updatedAge = req.body.age;
    const updatedfield = req.body.field;
    const updatedcompanyname = req.body.companyname;
    const updatedcompanylocation = req.body.companylocation;
    const updatedoccupation = req.body.occupation;
    const updatedpartners = req.body.partners;
    const updatedevents = req.body.events;
    const updatedvacancies = req.body.vacancies;
    const updatedprojects = req.body.projects;
    const updatedfeedbackform = req.body.feedbackform;

    const book = partnersss.find(book => book.id === bookId)

    if(updatedName) book.name=updatedName;
    if(updatedAge) book.age=updatedAge;
    if(updatedfield) book.field=updatedfield;
    if(updatedcompanyname) book.companyname=updatedcompanyname;
    if(updatedcompanylocation) book.companylocation=updatedcompanylocation;
    if(updatedoccupation) book.occupation=updatedoccupation;
    if(updatedpartners) book.partners=updatedpartners;
    if(updatedevents) book.events=updatedevents;
    if(updatedvacancies) book.vacancies=updatedvacancies;
    if(updatedprojects) book.projects=updatedprojects;
    if(updatedfeedbackform) book.feedbackform=updatedfeedbackform;
    
    return res.json({ data: book });
});


///////////////////////delete person//////////////////////////////////

router.delete('/:id', (req, res) => {
    const bookId = req.params.id
    const book = partnersss.find(book => book.id === bookId)
    const index = partnersss.indexOf(book)
    partnersss.splice(index,1)
    return res.json({ data: partnersss });
})

module.exports = router;