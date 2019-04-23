const axios = require('axios');

const functions={
    createLocation: async(body)=>{
        const locations = await axios.post('http://localhost:5000/api/users/location/',body)
        return locations
    },
    createMember: async(body)=>{
        const locations = await axios.post('http://localhost:5000/api/users/member/',body)
        return locations
    },
    createpartner:async (body) => {
        const partners = await axios.post("http://localhost:5000/api/users/partners",body)
        return partners
        },
    deleteLocation : async (id)=>{
        const locations = await axios.delete(`http://localhost:5000/api/users/location/${id}`)
        return locations
        },
    deleteMember : async(id) =>{
        const member = await axios.delete(`http://localhost:5000/api/users/member/${id}`)
        return member
        },
    deletePartner: async (id) => {
        const partner = await axios.delete(`http://localhost:5000/api/users/partners/${id}`)
        return partner
        },  
    getUser: async (id) => {
        const user = await axios.get(`http://localhost:5000/api/users/${id}`)
        return user
        }, 
    
      

};
module.exports = functions;