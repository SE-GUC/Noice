// Dependencies
const express = require('express');
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

// Models
const Request = require('../../models/Request');

// temporary data created as if it was pulled out of the database ...
const requests = [
	new Request('LOCATION', '123123123','','46464564654','3242354','324324324','FDSFSDF'),
	new Request('location 3', '46464564654','123123123','654654654','12344','65465465','SDFSDFDSF'),
];

// Instead of app use route
// No need to write the full route
// res.json() Automatically sends a status of 200

// Get all users
router.get('/', (req, res) => res.json({ data: requests }));

router.post('/create',(req,res) =>{
    const type= req.body.type
    const recID = req.body.recID
    const sndID = req.body.sndID
    const schedTime = req.body.schedTime
    const vacID = req.body.vacID
	const adID =  req.body.adID
    const schema = {
		type: Joi.string().required(),
        recID: Joi.string().required(),
        sndID: Joi.string().required(),
		schedTime: Joi.string().required(),
		vacID: Joi.string().required(),
		adID: Joi.string().required(),
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    const newRequest =  new Request(type,recID,sndID,schedTime,vacID,adID);
    requests.push(newRequest)
    return res.json({ data: requests });
});
router.delete('/delete',(req,res) => {
    var location = -1
 const id = req.body.id
 for (let index = 0; index < requests.length; index++) {
     const element = requests[index];
     if(element.id ===id){
         location = index
     }
 }
 if(location === -1){
      return res.status(400).send({ err: 'couldnt find request with that id' }); 
 }
 else {
    requests.splice(location,1)
 }
 return res.json({data:requests});
});

router.post('/update',(req,res) => {
    var location = -1
 const id = req.body.id
 for (let index = 0; index < requests.length; index++) {
     const element = requests[index];
     if(element.id ===id){
         location = index
     }
 }
 if(location === -1){
      return res.status(400).send({ err: 'couldnt find request with that id' }); 
 }
 else {
	const schema = {
		type: Joi.string().required(),
        recID: Joi.string().required(),
        sndID: Joi.string().required(),
		schedTime: Joi.string().required(),
		vacID: Joi.string().required(),
		adID: Joi.string().required(),
		id: jJoi.string().required()
	}
	const result = Joi.validate(req.body, schema);
	if (result.error) return res.status(400).send({ error: result.error.details[0].message });
	requests[location].type = req.body.type
	requests[location].recID = req.body.recID
	requests[location].sndID = req.body.sndID
	requests[location].schedTime = req.body.schedTime
	requests[location].vacID = req.body.vacID
	requests[location].adID = req.body.adID
 }
 return res.json({data:requests});
});
router.get('/get_request',(req,res)=>{
	var location = -1
	const id = req.body.id
	for (let index = 0; index < requests.length; index++) {
		const element = requests[index];
		if(element.id ===id){
			location = index
		}
	}
	if(location === -1){
		 return res.status(400).send({ err: 'couldnt find request with that id' }); 
	}
	else {
		return res.json({data:requests[location]})
}});
module.exports = router;
