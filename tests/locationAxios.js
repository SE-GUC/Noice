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
    updateLocation : async (id,body) =>{
        const locations = await axios.put(`http://localhost:3000/api/Location/${id}`,body)
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
       },
    createMember: async(body)=>{
        const locations = await axios.post('http://localhost:3000/api/member/',body)
        console.log('Room info is'+ locations.data.data)  
        return locations
    },
    viewMemberById:async(id)=>{
        const locations =  await axios.get(`http://localhost:3000/api/member/${id}`)
        console.log(locations.data.data)
        return locations
    },
    createLocationRoom: async(id,body)=>{
        const locations = await axios.put('http://localhost:3000/api/Location/add_room/',body)
        console.log('Room info is'+ locations.data.data)  
        return locations
    },
    viewRoomById:async(id)=>{
        const locations =  await axios.get(`http://localhost:3000/api/Location/get_room/${id}`)
        console.log(locations.data.data)
        return locations
    },    
    membersViewAllLocations: async() =>{
        const locations =  await axios.get('http://localhost:3000/api/member/memberGetLocations/1')
        return locations
    },
    membersViewLocationRooms:async(id)=>{
        const locations =  await axios.get(`http://localhost:3000/api/member/memberLocationRooms/${id}`)
        console.log(locations.data.data)
        return locations
    },
    membersApplyRoom: async(id)=>{
        const locations = await axios.post(`http://localhost:3000/api/member/memberApplyRoom/${id}`,body)
        console.log('room info is'+ locations.data.data)  
        return locations
    },
    membersViewreservedRooms:async(id)=>{
        const locations =  await axios.get(`http://localhost:3000/api/member/memberGetRoomReserved/${id}`)
        console.log(locations.data.data)
        return locations
    },
    memberDeleteRoom : async (id)=>{
        const locations = await axios.delete(`http://localhost:3000/api/member/memberDeleteRoomRes/${id}`)
        return locations
       },
    adminViewLocationById:async(id)=>{
        const locations =  await axios.get(`http://localhost:3000/api/admins/viewLocation/${id}`)
        console.log(locations.data.data)
        return locations
    },
    adminDeleteLocation : async (id)=>{
        const locations = await axios.delete(`http://localhost:3000/api/admins/deleteLocation/${id}`)
        return locations
       },
    adminUpdateLocation : async (id,body) =>{
        const locations = await axios.put(`http://localhost:3000/api/admins/updateLocation/${id}`,body)
        console.log(locations.data.data)
        return locations
    },
    partnersViewAllLocations: async() =>{
        const locations =  await axios.get('http://localhost:3000/api/partners/viewLocation/1')
        return locations
    },
    }
module.exports = functions;