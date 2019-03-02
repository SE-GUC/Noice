// Dependencies
const express = require('express');


const router = express.Router();

// Models
const calender = require('../../model/calender');

// temporary data created as if it was pulled out of the database ...
const calenderss = [
	new calender('01/03/2019', '1:00>3:00','Starbucks','paid'),
	
];


// Get all users
router.get('/', (req, res) => res.json({ data: calender }));


router.post('/create',(req,res) =>{
    
    const Date= req.body.Date
    const timings = req.body.timings
    const Location = req.body.Location
    const status = req.body.status;
    const schema = {
		Date: Joi.Date().required(),
        timings: Joi.String().min(1).required(),
        Location: Joi.string().min(1).required(),
        status: Joi.number().required(),
    
    }
    const result = Joi.validate(req.body, schema);
    if (result.error) return res.status(400).send({ error: result.error.details[0].message });
    const newDate =  {
        Date,
        timings,
        Location,
        status,

    };
    calenderss.push(newDate)
    return res.json({ data: newDate });

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
 for (let index = 0; index < calenderss.length; index++) {
     const element = calenderss[index];
     if(element.id ===id){
         location = index
         flag = true
        }
 }
 if(!flag){
      return res.status(400).send({ err: "Couldn't find any items with that id" }); 
 }
 else {
    calenderss.splice(location,1)
    return res.send({message: 'Item deleted succesfully'})
 }
 

})



module.exports = router;
