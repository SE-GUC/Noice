const axios = require('axios');
const functions={
    viewAllLocations: async() =>{
        const locations =  await axios.get('http://localhost:3000/api/Location/')
        return locations
    },
    viewLocationById:async(id)=>{
        const locations =  await axios.get(`http://localhost:3000/api/Location/${id}`)
        console.log(locations.data.data)
        return locations
    },
    createLocation: async(body)=>{
        const locations = await axios.post('http://localhost:3000/api/Location/',body)
        console.log('location info is'+ locations.data.data)  
        return locations
    },
    deleteLocation : async (id)=>{
        const locations = await axios.delete(`http://localhost:3000/api/Location/${id}`)
        return locations
       }
}
module.exports = functions;