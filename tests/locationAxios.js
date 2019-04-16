const axios = require('axios');
const functions = {
    getRoomsFromLoc: async (id) => {
        const room = await axios.get(`http://localhost:3000/api/users/location/room/get/rooms_for_loc/${id}`)
        return room
    },
    getAllRooms: async () => {
        const room = await axios.get(`http://localhost:3000/api/users/location/room/get/all_rooms/`)
        return room
    },
    findRoom: async (id) => {
        const room = await axios.get(`http://localhost:3000/api/users/location/room/get/curr_room/${id}`)
        return room
    },
    viewResRequestsForRoom: async (id) => {
        const room = await axios.get(`http://localhost:3000/api/users/location/roomRes/get/res_for_room/${id}`)
        return room
    },
    getRoomRes: async (id, body) => {
        const room = await axios.post('http://localhost:3000/api/users/location/roomRes/get/curr_room_res/'+id, body)
        return room
    },
    rejectRoomRes: async (id,body) => {
        const room = await axios.post('http://localhost:3000/api/users/location/roomRes/update/rej_room_res/'+id,body)
        return room
    },
    search: async (body) => {
        const room = await axios.post('http://localhost:3000/api/users/location/searchroom',body)
        return room
    },
    createRoomResReq: async (id,body) => {
        const room = await axios.put(`http://localhost:3000/api/users/location/roomRes/create/new_room_res/`+id,body)
        return room
    },
    deleteRoom: async (id) => {
        const room = await axios.delete(`http://localhost:3000/api/users/location/room/delete/curr_room/${id}`)
        return room
    },
    createRoom: async (id,body) => {
        const room = await axios.put(`http://localhost:3000/api/users/location/room/create/new_room/${id}`,body)
        return room
    },
    createLocation: async (body) => {
        const locations = await axios.put('http://localhost:3000/api/users/location/locationE/create/new_loc/', body)
        return locations
    },
    deleteLocation: async (id) => {
        const locations = await axios.delete(`http://localhost:3000/api/users/location/locationE/delete/curr_loc/${id}`)
        return locations
    },
    updateRoom: async (id, body) => {
        const room = await axios.post('http://localhost:3000/api/users/location/room/update/curr_room/'+id,body)
        return room
    },
    deleteRoomResReq: async (id,startDate) => {
        var room = await axios.post(`http://localhost:3000/api/users/location/roomRes/delete/curr_room_res/${id}`,startDate)
        return room
    },
    viewRoomById: async (id) => {
        const locations = await axios.get(`http://localhost:3000/api/users/location/room/get/curr_room/${id}`)
        return locations
    },
    findLocation: async (id) => {
        const locations = await axios.get(`http://localhost:3000/api/users/location/locationE/get/curr_loc/${id}`)
        return locations
    },
    updateRoomRes: async (id,body) => {
        const locations = await axios.post(`http://localhost:3000/api/users/location/roomRes/update/curr_room_res/`+id,body)
        return locations
    }
}
module.exports = functions;