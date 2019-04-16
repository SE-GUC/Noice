const axios = require('axios');
const functions={
    viewAllLocations: async() =>{
        const locations =  await axios.get('http://localhost:5000/api/users/location/')
        return locations
    },
    viewLocationById:async(id)=>{
        const locations =  await axios.get(`http://localhost:5000/api/users/location/${id}`)
        console.log(locations.data.data)
        return locations
    },
    updateLocation : async (id,body) =>{
        const locations = await axios.put(`http://localhost:5000/api/users/location/${id}`,body)
        console.log(locations.data.data)
        return locations
    },
    createLocation: async(body)=>{
        const locations = await axios.post('http://localhost:5000/api/users/location/',body)
        console.log('location info is'+ locations.data.data)  
        return locations
    },
    deleteLocation : async (id)=>{
        const locations = await axios.delete(`http://localhost:5000/api/users/location/${id}`)
        return locations
       },
    createMember: async(body)=>{
        const locations = await axios.post('http://localhost:5000/api/users/member/',body)
        console.log('Room info is'+ locations.data.data)  
        return locations
    },
    viewMemberById:async(id)=>{
        const locations =  await axios.get(`http://localhost:5000/api/users/member/${id}`)
        console.log(locations.data.data)
        return locations
    },
    createLocationRoom: async(id,body)=>{
        const locations = await axios.put(`http://localhost:5000/api/users/location/add_room/${id}`,body)
        console.log('Room info is'+ locations.data.data)  
        return locations
    },
    viewRoomById:async(id)=>{
        const locations =  await axios.get(`http://localhost:5000/api/users/location/get_room/${id}`)
        console.log(locations.data.data)
        return locations
    },    
    membersViewAllLocations: async() =>{
        const locations =  await axios.get('http://localhost:5000/api/users/member/getLocations/1/')
        return locations
    },
    membersViewLocationRooms:async(id)=>{
        const locations =  await axios.get(`http://localhost:5000/api/users/member/memberLocationRooms/${id}`)
        console.log(locations.data.data)
        return locations
    },
    membersApplyRoom: async(id)=>{
        const locations = await axios.post(`http://localhost:5000/api/users/member/memberApplyRoom/${id}`,body)
        console.log('room info is'+ locations.data.data)  
        return locations
    },
    membersViewreservedRooms:async(id)=>{
        const locations =  await axios.get(`http://localhost:5000/api/users/member/memberGetRoomReserved/${id}`)
        console.log(locations.data.data)
        return locations
    },
    memberDeleteRoom : async (id)=>{
        const locations = await axios.delete(`http://localhost:5000/api/users/member/memberDeleteRoomRes/${id}`)
        return locations
       },
    adminViewLocationById:async(id)=>{
        const locations =  await axios.get(`http://localhost:5000/api/admins/viewLocation/${id}`)
        console.log(locations.data.data)
        return locations
    },
    adminDeleteLocation : async (id)=>{
        const locations = await axios.delete(`http://localhost:5000/api/admins/deleteLocation/${id}`)
        return locations
       },
    adminUpdateLocation : async (id,body) =>{
        const locations = await axios.put(`http://localhost:5000/api/admins/updateLocation/${id}`,body)
        console.log(locations.data.data)
        return locations
    },
    partnersViewAllLocations: async() =>{
        const locations =  await axios.get('http://localhost:5000/api/users/partners/partnerLocation/1')
        return locations
    },
    }
module.exports = functions;