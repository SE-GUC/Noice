const express = require('express')
const Joi = require('joi');
const uuid = require('uuid');
const router = express.Router();

const Admin = require('../../models/Admin');

const admins = [
    new Admin('muhammad','muhammad','sharaf',['bachelor','masters','phd','kappaproud'],20),
    new Admin('hima','loves','abo trika',['bachelor','masters','phd','kappaproud'],20)

];
//show all admins
router.get('/', (req, res) => res.json({ data: admins }));

router.post('/create',(req,res) =>{
    
    const firstName= req.body.firstName
    const middleName = req.body.middleName
    const lastName = req.body.lastName
    const education = req.body.education
    const age = req.body.age
    const active = true;
    const schema = {
		firstName: Joi.string().min(2).required(),
        middleName: Joi.string().min(1).required(),
        lastName: Joi.string().min(1).required(),
        age: Joi.number().required(),
        education: Joi.array()
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    const newAdmin =  {
        firstName,
        middleName,
        lastName,
        education,
        age,
        id : uuid.v4(),
        active

    };
    admins.push(newAdmin)
    return res.json({ data: newAdmin });

}
);

router.delete('/delete',(req,res) => {
    var location = -1
    var flag = false
 const id = req.body.id
 const schema = {
     id: Joi.required()

 }
 const result = Joi.validate(req.body,schema)
 if(result.error) return res.status(400).send({ error: result.error.details[0].message });
 for (let index = 0; index < admins.length; index++) {
     const element = admins[index];
     if(element.id ===id){
         location = index
         flag = true
        }
 }
 if(!flag){
      return res.status(400).send({ err: 'couldnt find admin with that id' }); 
 }
 else {
    admins.splice(location,1)
    return res.send({message: 'admin deleted succesfully'})
 }
 

})

router.get('/ViewById', (req,res)=>{
    var location = -1
    var flag = false
 const id = req.body.id
 const schema = {
     id: Joi.required()

 }
 const result = Joi.validate(req.body,schema)
 if(result.error) return res.status(400).send({ error: result.error.details[0].message });
 for (let index = 0; index < admins.length; index++) {
     const element = admins[index];
     if(element.id ===id){
         location = index
         flag = true
        }
 }
 if(!flag){
      return res.status(400).send({ err: 'couldnt find admin with that id' }); 
 }
 else {
    return res.json({data:admins[location]})
 }

})

router.post('/Update', (req,res) => {

    const id= req.body.id
    const firstName= req.body.firstName
    const middleName = req.body.middleName
    const lastName = req.body.lastName
    const education = req.body.education
    const age = req.body.age
    const active = true;
    const schema = {
        id: Joi.required(),
		firstName: Joi.string().min(2),
        middleName: Joi.string().min(1),
        lastName: Joi.string().min(1),
        age: Joi.number(),
        education: Joi.array()
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
        
    
        for (let index = 0; index < admins.length; index++) {
           if (admins[index].id===id){
            if(firstName!=null) admins[index].firstName=firstName
            if(middleName!=null) admins[index].middleName=middleName
            if(lastName!=null) admins[index].lastName=lastName
            if(education!=null) admins[index].education=education
            if(age!=null) admins[index].age=age;
        return   
        }  
        }
        return res.send({err: "Couldn't find admin with that id"})
    
         }
           )



module.exports = router;
