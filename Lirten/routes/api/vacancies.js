// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Vacancy = require('../../models/Vacancy');

// temporary data created as if it was pulled out of the database ...
const vacancies = [
	new Vacancy('ENTRY LEVEL', 'DESCRIPTION 1','JOB TYPE 1','EDUC LVL 1','1234','SKILLS 1','JOB REQ 1'),
	new Vacancy('INTERMEDIATE LEVEL', 'DESCRIPTION 2','JOB TYPE 2','EDUC LVL 2','12344','SKILLS 2','JOB REQ 2'),
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: vacancies }));

router.post('/create',(req,res) =>{
    const careerLvl= req.body.careerLvl
    const jobDesc = req.body.jobDesc
    const jobTyp = req.body.jobTyp
    const educLvl = req.body.educLvl
    const empID = req.body.empID
	const skillsReq =  req.body.skillsReq
	const jobReq =  req.body.jobReq
    const schema = {
		careerLvl: Joi.string().valid('ENRTY LEVEL','INTERMEDIATE LEVEL','PROFESSIONAL LEVEL').required(),
        jobDesc: Joi.string().min(20).required(),
        jobTyp: Joi.string().min(1).required(),
		skillsReq: Joi.array(),
		jobReq: Joi.string().min(20).required(),
		empID: Joi.string().required(),
		educLvl: Joi.string().required()
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    const newVacancy =  new Vacancy(careerLvl,jobDesc,jobTyp,educLvl,empID,skillsReq,jobReq);
    vacancies.push(newVacancy)
    return res.json({ data: vacancies });
});
router.delete('/delete',(req,res) => {
    var location = -1
 const id = req.body.id
 for (let index = 0; index < vacancies.length; index++) {
     const element = vacancies[index];
     if(element.id ===id){
         location = index
     }
 }
 if(location === -1){
      return res.status(400).send({ err: 'couldnt find vacancy with that id' }); 
 }
 else {
    vacancies.splice(location,1)
 }
 return res.json({data:vacancies});
});
router.post('/update',(req,res) => {
    var location = -1
 const id = req.body.id
 for (let index = 0; index < vacancies.length; index++) {
     const element = vacancies[index];
     if(element.id ===id){
         location = index
     }
 }
 if(location === -1){
      return res.status(400).send({ err: 'couldnt find vacancy with that id' }); 
 }
 else {
	const schema = {
		careerLvl: Joi.string().valid('ENRTY LEVEL','INTERMEDIATE LEVEL','PROFESSIONAL LEVEL').required(),
        jobDesc: Joi.string().min(20).required(),
        jobTyp: Joi.string().min(1).required(),
		skillsReq: Joi.array(),
		jobReq: Joi.string().min(20).required(),
		empID: Joi.string().required(),
		educLvl: Joi.string().required(),
		id: Joi.string().required()
	}
	const result = Joi.validate(req.body, schema);
	if (result.error) return res.status(400).send({ error: result.error.details[0].message });
	vacancies[location].careerLvl = req.body.careerLvl
	vacancies[location].jobDesc = req.body.jobDesc
	vacancies[location].jobTyp = req.body.jobTyp
	vacancies[location].skillsReq = req.body.skillsReq
	vacancies[location].jobReq = req.body.jobReq
	vacancies[location].empID = req.body.empID
	vacancies[location].educLvl = req.body.educLvl
 }
 return res.json({data:vacancies});
});
router.get('/get_vacancy',(req,res)=>{
	var location = -1
	const id = req.body.id
	for (let index = 0; index < vacancies.length; index++) {
		const element = vacancies[index];
		if(element.id ===id){
			location = index
		}
	}
	if(location === -1){
		 return res.status(400).send({ err: 'couldnt find vacancy with that id' }); 
	}
	else {
		return res.json({data:vacancies[location]})
}});
module.exports = router;
