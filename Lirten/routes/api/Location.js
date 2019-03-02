const express = require('express');
const uuid = require('uuid');
const router = express.Router();

//Models
const location = require('../../models/Location')

// temporary data created
const Locations = [
    new location('302 Labs', 'Nasr City', 'El hay el sabea',300,8,8,4),
    new location('Xtreme Center', 'Nasr City', 'Mostafa el nahas',150,10,8,4.5),
    new location('Origin Center', 'Nasr City', 'Abbas el 3a2ad',60,6,5,3.8)
]

// Get all locations
router.get('/',(req,res) => res.json({ data: Locations }));

// Create a new Location
router.post('/',(req,res) =>{
    const NameOfPlace = req.body.NameOfPlace;
    const City = req.body.City;
    const Region = req.body.Region;
    const Capacity = req.body.Capacity;
    const startingHours = req.body.startingHours;
    const endingHours = req.body.endingHours;
    const rate = req.body.rate;

    if (!NameOfPlace) return res.status(400).send({ err: 'Name field is required' });
    if (typeof NameOfPlace !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    
    if (!City) return res.status(400).send({ err: 'City field is required' });
	if (typeof City !== 'string') return res.status(400).send({ err: 'Invalid value for City' });

    if (!Region) return res.status(400).send({ err: 'Region field is required' });
	if (typeof Region !== 'string') return res.status(400).send({ err: 'Invalid value for Region' });

    if (!Capacity) return res.status(400).send({ err: 'Capacity field is required' });
	if (typeof Capacity !== 'number') return res.status(400).send({ err: 'Invalid value for Capacity' });

    if (!startingHours) return res.status(400).send({ err: 'Starting Hours field is required' });
    if (typeof startingHours !== 'number') return res.status(400).send({ err: 'Invalid value for Starting Hours' });
    
    if (!endingHours) return res.status(400).send({ err: 'Ending Hours field is required' });
    if (typeof endingHours !== 'number') return res.status(400).send({ err: 'Invalid value for Ending Hours' });
    
    if (!rate) return res.status(400).send({ err: 'Rate field is required' });
    if (typeof rate !== 'number') return res.status(400).send({ err: 'Invalid value for Rate' });

    const newLocation = {
		NameOfPlace,
        City,
        Region,
        Capacity,
        startingHours,
        endingHours,
        rate,
         id :uuid.v4()}
    ;
    Locations.push(newLocation)
	res.send(newLocation)
})

// update location id
router.put('/:id',(req,res)=> {
    const locationId = req.params.id
    const updatedNameOfPlace = req.body.NameOfPlace;
    const updatedCity = req.body.City;
    const updatedRegion = req.body.Region;
    const updatedCapacity = req.body.Capacity;
    const updatedstartingHours = req.body.startingHours;
    const updatedendingHours = req.body.endingHours;
    const updatedrate = req.body.rate;
    const location = Locations.find(location => location.id === locationId)
    if (!updatedNameOfPlace) return res.status(400).send({ err: 'Name field is required' });
    if (typeof updatedNameOfPlace !== 'string') return res.status(400).send({ err: 'Invalid value for name' });
    
    if (!updatedCity) return res.status(400).send({ err: 'City field is required' });
	if (typeof updatedCity !== 'string') return res.status(400).send({ err: 'Invalid value for City' });

    if (!updatedRegion) return res.status(400).send({ err: 'Region field is required' });
	if (typeof updatedRegion !== 'string') return res.status(400).send({ err: 'Invalid value for Region' });

    if (!updatedCapacity) return res.status(400).send({ err: 'Capacity field is required' });
	if (typeof updatedCapacity !== 'number') return res.status(400).send({ err: 'Invalid value for Capacity' });

    if (!updatedstartingHours) return res.status(400).send({ err: 'Starting Hours field is required' });
    if (typeof updatedstartingHours !== 'number') return res.status(400).send({ err: 'Invalid value for Starting Hours' });
    
    if (!updatedendingHours) return res.status(400).send({ err: 'Ending Hours field is required' });
    if (typeof updatedendingHours !== 'number') return res.status(400).send({ err: 'Invalid value for Ending Hours' });
    
    if (!updatedrate) return res.status(400).send({ err: 'Rate field is required' });
    if (typeof updatedrate !== 'number') return res.status(400).send({ err: 'Invalid value for Rate' });


    location.NameOfPlace = updatedNameOfPlace
    location.City = updatedCity
    location.Region = updatedRegion
    location.Capacity = updatedCapacity
    location.startingHours = updatedstartingHours
    location.endingHours = updatedendingHours
    location.rate = updatedrate
     
    res.send(location)

})

// Delete a location
router.delete('/:id',(req,res) => {
    const locationId = req.params.id
    const location = Locations.find(location => location.id === locationId)
    const index = Locations.indexOf(location)
    Locations.splice(index,1)
    res.send(location)
})

router.use(express.json())

module.exports = router;




