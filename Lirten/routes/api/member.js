const express=require('express');
const Joi= require('joi');
const uuid= require('uuid');
const router=express.Router();
//Models
const member=require('../../models/member');

const members =[new member('omar',12,'male','10 el adib adham','andrew.ashraf@ymail.com','01223526878','programmer','art','Lirten','lirten',5,5)]
           
// Get all users

router.get('/',(req,res)=> res.json({data:members}));


router.post('/',(req,res)=> {

        const name=req.body.name
        const age =req.body.age
        const gender=req.body.gender
        const address=req.body.address
        const email=req.body.email
        const phone_number =req.body.phone_number
        const skills =req.body.skills
        const interests =req.body.interests
        const past_events =req.body.past_events
        const projects_completed =req.body.projects_completed
        const reviews_received =req.body.reviews_received
        const certificaes_held =req.body.certificaes_held
        
        const
            schema
                = {

                name:
                    Joi.string().min(3).required(),

                age:
                    Joi.number().required(),

                email:
                    Joi.string().required(),

                phone_number:
                    Joi.number().required(),

                address:
                    Joi.required(),
                
                skills:Joi.required(),

                interests:Joi.required(),
                past_events:Joi.required(),
                projects_completed:Joi.required(),
                reviews_received:Joi.required(),
                certificaes_held:Joi.required()

            }



    const result = Joi.validate(req.body, schema);



    if (result.error) return res.status(400).send({ error: result.error.details[0].message });



        const
            newMember
                = {
             id: uuid.v4(),
             
                name,

                age,

                gender,

                address,

                email,

                phone_number,

                skills,

                interests,

                past_events,

                projects_completed,

                reviews_received,

                certificaes_held,

            };

            members.push(newMember)
            res.send(member)

    });
    router.put('/:id', (req, res) => {
        const id = req.params.id 
        const Upname=req.body.name
        const Upage=req.body.age
        const Upgender=req.body.gender
        const Upaddress=req.body.address
        const Upemail=req.body.email
        const Upphone=req.body.phone_number
        const Upskills=req.body.skills
        const Upinterests=req.body.interests
        const Uppast_events=req.body.past_events
        const Upprojects_completed=req.body.projects_completed
        const Upreviews_received=req.body.reviews_received
        const Upcertificaes_held=req.body.certificaes_held

        const member = members.find(member => member.id === id)
        const
            schema
                = {

                name:
                    Joi.string().min(3).required(),

                age:
                    Joi.number().required(),

                email:
                    Joi.string().required(),

                phone_number:
                    Joi.number().required(),

                address:
                    Joi.required(),
                skills:Joi.required(),

                interests :Joi.required(),
                past_events:Joi.required(),
                projects_completed:Joi.required(),
                reviews_received:Joi.required(),
                certificaes_held:Joi.required()

            }



        const
            result
                =
                Joi.validate(req.body,
                    schema);



        if (result.error) return res.status(400).send({error:result.error.details[0].message});
        member.name=Upname
        member.age=Upage
        member.gender= Upgender
        member.addressUpaddress
        member.address = Upaddress
        member.email=Upemail
        member.phone_number=Upphone
        if(Upskills!==""){member.skills=Upskills}
        else{member.skills=member.skills}
        if(Upinterests!==""){member.interests=Upinterests}
        else{member.interests=member.interests}
        if(Uppast_events!==""){member.past_events=Uppast_events}
        else{member.past_events=member.past_events}
        if(Upprojects_completed!==""){member.projects_completed=Upprojects_completed}
        else{member.projects_completed=member.projects_completed}
        if(Upreviews_received!==""){member.reviews_received=Upreviews_received}
        else{member.reviews_received=member.reviews_received}
        if(Upcertificaes_held!==""){member.certificaes_held=Upcertificaes_held}
        else{member.certificaes_held=member.certificaes_held}
        res.send(member)
    })
    router.delete('/:id', (req, res) => {
        const memid = req.params.id 
        const member = members.find(member => member.id === memid)
        const index = members.indexOf(member)
        members.splice(index,1)
        res.send(member)
    })
    
router.use(express.json())
module.exports=router;