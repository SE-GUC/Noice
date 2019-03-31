const axios = require('axios');
const functions = {
    getAllLocations: async () => {
        const Locationsss = await axios.post('http://localhost:3000/api/Location/')
        return Locationsss
    },
    createLocation:async (req) => { 
        const partners = await axios.post('http://localhost:3000/api/Location/',req)
        return partners
    },
    findLocation:async (req) => { 
        const partners = await axios.post('http://localhost:3000/api/Location/',req)
        return partners
    },
    updateLocation:async (req) => { 
        const partners = await axios.post('http://localhost:3000/api/Location/',req)
        return partners
    },
    deleteLocation:async (req) => { 
        const partners = await axios.post('http://localhost:3000/api/Location/',req)
        return partners
    }
}