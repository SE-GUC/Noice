// Dependencies
const express = require('express');


const router = express.Router();

// Models
const calenders = require('../../model/calender');

// temporary data created as if it was pulled out of the database ...
const calenderss = [
	new calenders('01/03/2019', '1:00>3:00','Starbucks','paid'),
	
];


// Get all users
router.get('/', (req, res) => res.json({ data: calenders }));


module.exports = router;