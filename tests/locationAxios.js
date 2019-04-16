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
    /* // COMMENTED because room create test is not yet created, when it is, this should be uncommented and should work
    searchRoom:async (req) => {
        const room = await axios.post('http://localhost:5000/api/users/location/search',req)
        return room
    },*/

    getRoomsFromLoc: async (id) => {
        const room = await axios.get(`http://localhost:5000/api/users/location/room/get/rooms_for_loc/${id}`)
        return room
    },
    getAllRooms: async () => {
        const room = await axios.get(`http://localhost:5000/api/users/location/room/get/all_rooms/`)
        return room
    },
    findRoom: async (id) => {
        const room = await axios.get(`http://localhost:5000/api/users/location/room/get/curr_room/${id}`)
        return room
    },
    viewResRequestsForRoom: async (id) => {
        const room = await axios.get(`http://localhost:5000/api/users/location/roomRes/get/res_for_room/${id}`)
        return room
    },
    getRoomRes: async (id, body) => {
        const room = await axios.post('http://localhost:5000/api/users/location/roomRes/get/curr_room_res/'+id, body)
        return room
    },
    rejectRoomRes: async (id,body) => {
        const room = await axios.post('http://localhost:5000/api/users/location/roomRes/update/rej_room_res/'+id,body)
        return room
    },
    search: async (body) => {
        const room = await axios.post('http://localhost:5000/api/users/location/searchroom',body)
        return room
    },
    createRoomResReq: async (id,body) => {
        const room = await axios.put(`http://localhost:5000/api/users/location/roomRes/create/new_room_res/`+id,body)
        return room
    },
    deleteRoom: async (id) => {
        const room = await axios.delete(`http://localhost:5000/api/users/location/room/delete/curr_room/${id}`)
        return room
    },
    createRoom: async (id,body) => {
        const room = await axios.put(`http://localhost:5000/api/users/location/room/create/new_room/${id}`,body)
        return room
    },
    createLocation: async (body) => {
        const locations = await axios.put('http://localhost:5000/api/users/location/locationE/create/new_loc/', body)
        return locations
    },
    deleteLocation: async (id) => {
        const locations = await axios.delete(`http://localhost:5000/api/users/location/locationE/delete/curr_loc/${id}`)
        return locations
    },
    updateRoom: async (id, body) => {
        const room = await axios.post('http://localhost:5000/api/users/location/room/update/curr_room/'+id,body)
        return room
    },
    deleteRoomResReq: async (id,startDate) => {
        var room = await axios.post(`http://localhost:5000/api/users/location/roomRes/delete/curr_room_res/${id}`,startDate)
        return room
    },
    viewRoomById: async (id) => {
        const locations = await axios.get(`http://localhost:5000/api/users/location/room/get/curr_room/${id}`)
        return locations
    },
    findLocation: async (id) => {
        const locations = await axios.get(`http://localhost:5000/api/users/location/locationE/get/curr_loc/${id}`)
        return locations
    },
    updateRoomRes: async (id,body) => {
        const locations = await axios.post(`http://localhost:5000/api/users/location/roomRes/update/curr_room_res/`+id,body)
        return locations

    }
}
module.exports = functions;