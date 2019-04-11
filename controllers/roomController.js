var room= require('../models/Room.js')
const axios = require('axios')
const validator = require('../Validations/roomValidations')
const resValidator = require('../Validations/roomResValidation')

// GET ALL ROOMS
exports.getAllRooms = async function(req,res){
    const rooms= await room.find()
    console.log(JSON.stringify({data: rooms}))
    return res.json({data: rooms})
}
//GET ALL ROOMS FOR A SPECIFIED LOCATION
exports.getRoomsForLoc = async function(req,res){
    axios.get('http://localhost:3000/api/location/get_location/'+req.params.id)   
    .then(locationRes=>{
        var location = locationRes.data.data
       if(!location){
            console.log('Location not found to get that room')
            res.status(404).send('Location not found to get that room')
        } 
        room.find({locationId:location._id},function(err,docs){
            if(!docs){
                console.log(JSON.stringify({error: 'Error happened while retreiving the data',details: err}))
                return res.json({error: 'Error happened while retreiving the data',details: err})
            } 
            console.log(JSON.stringify({rooms: docs}))
            return res.json({rooms: docs})
        })
    })
    .catch(err=>{
        if(err.response){
            return res.json({error:'Error getting location with status code'+ err.status})
        }
        console.log(err)
        return res.json({error:'Error retreiving the location with the specified id',details:err})})
}
// CREATE ROOM FOR A SPEC LOCATION
exports.createRoom = async function(req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var locationRes = await axios.get('http://localhost:3000/api/location/get_location/'+req.body.locationId)   
        var location  = locationRes.data.data
        console.log(JSON.stringify({location:location}))
        if(!location) {
            console.log(JSON.stringify({error: 'Cannot get the specified location'}))
            return res.json({error: 'Cannot get the specified location'})
        }
        const newRoom = await room.create(req.body)
        console.log(JSON.stringify({msg:'Room was created successfully', data: newRoom}))
        return res.json({msg:'Room was created successfully', data: newRoom})
       }
       catch(error) {
        if(err.response){
            return res.json({error:'Error getting location with status code'+ err.status})
        }
           console.log(error)
           return res.json({error:'Error has happened while retreiving data',details:error.Error})
       }  
}
// UPDATE ROOM
exports.updateRoom = async function(req,res){
    try {
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var locationRes = await axios.get('http://localhost:3000/api/location/get_location/'+req.body.locationId)   
        var location  = locationRes.data.data
        if(!location) {
            console.log(JSON.stringify({error: 'Cannot get the specified location'}))
            return res.json({error: 'Cannot get the specified location'})
        }
        const Room = await room.findById(req.params.id)
        if(!Room){
            console.log(JSON.stringify({error:'Cannot find the specified room. Pleasew create one with this data.'}))
            return  res.json({error:'Cannot find the specified room. Pleasew create one with this data.'})
        }
        const newRoom = await room.updateOne(req.body)
        console.log(JSON.stringify({msg: 'Room updated successfully', data: newRoom}))
        return res.json({msg: 'Room updated successfully', data: newRoom})
       }
       catch(error) {
        console.log(error)
        if(error.response){

            return res.json({error:'Error getting location with status code'+ error.status})
        }
          
       }
}
// DELETE ROOM
exports.deleteRoom = async function(req,res){
    try {
        const id = req.params.id
        const deletedRoom = await room.findByIdAndDelete(id)
        console.log(JSON.stringify({msg:'Room was deleted successfully', data: deletedRoom}))
        return res.json({msg:'Room was deleted successfully', data: deletedRoom})
       }
       catch(error) {
        return res.json({error:error})
           console.log(error)
       }  
}
// FIND SINGLE ROOM
exports.findRoom = async function(req,res){
    try {
        const id = req.params.id
        const Room = await room.findById(id)
        if(!Room) {
            console.log(JSON.stringify({error: 'Room does not exist'}))
            return res.status(404).send({error: 'Room does not exist'})
        }
        console.log(JSON.stringify({msg: 'Room found successfully', data: Room}))
        return res.json({msg: 'Room found successfully', data: Room})
    }catch(error) {
           // We will be handling the error later
           console.log(error)
       } 
}
// CREATE ROOM RESERVATION
exports.createRoomResReq = async function(req,res){
    try {
        var roomRes = await axios.get('http://localhost:3000/api/location/get_room/'+req.params.id)   
        var roomRead  = roomRes.data.data
        console.log(JSON.stringify({room:roomRead}))
        if(!roomRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified room'}))
            return  res.json({error: 'Cannot get the specified room'})
        }
        const isValidated = resValidator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newRoomRes = req.body
        roomRead.reservations.forEach(element => {
            if(!compareDates(element.startDate,element.endDate,req.body.startDate)){
                return  res.json({Error: 'Cannot reserve that room at this time. It is reserved'})
            }
        });
        roomRead['reservations'].push(newRoomRes)
        delete roomRead.__v
        delete roomRead._id
        console.log({roomReadKey:roomRead})
        const newRoom = await axios.post('http://localhost:3000/api/location/update_room/'+req.params.id,roomRead)
        return  res.json({msg:'Room Reservation was created successfully', data: newRoom.data})
       }
       catch(error) {
        console.log(error)
        if(error.response){

            return res.json({error:'Error getting location with status code'+ error.status})
        }
    }
}
//DELETE ROOM RES
exports.deleteRoomResReq = async function(req,res){
    try {
    if(!req.params.id) return res.json({Error:'You must specify the id of the room that has this reservation.'})
        var roomRes = await axios.get('http://localhost:3000/api/location/get_room/'+req.params.id)   
        var roomRead  = roomRes.data.data
        console.log(JSON.stringify({room:roomRead}))
        if(!roomRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified room'}))
            return res.json({error: 'Cannot get the specified room'})
        }
        const deletRoomRes = req.body
        console.log({Reservayions:roomRead.reservations})
        console.log({deletedReservation:deletRoomRes})
        roomRead.reservations.splice(roomRead.reservations.indexOf(deletRoomRes),1)
        delete roomRead.__v
        delete roomRead._id
        console.log({roomReadKey:roomRead})
        const newRoom = await axios.post('http://localhost:3000/api/location/update_room/'+req.params.id,roomRead)
        return res.json({msg:'Room Reservation was deleted successfully', data: newRoom.data})
       }
       catch(error) {
        console.log(error)
        if(error.response){

            return  res.json({error:'Error getting location with status code'+ error.status})
        }
       }
}
//UPDATE ROOM RES
exports.updateRoomRes = async function(req,res){
    try {
        if(!req.params.id) return res.json({Error:'You must specify the id of the room that has this reservation.'})
            var roomRes = await axios.get('http://localhost:3000/api/location/get_room/'+req.params.id)   
            var roomRead  = roomRes.data.data
            console.log(JSON.stringify({room:roomRead}))
            if(!roomRead) {
                console.log(JSON.stringify({error: 'Cannot get the specified room'}))
                return res.json({error: 'Cannot get the specified room'})
            }
            if(!req.body.startDateID){
                return res.json({error:'Please send the start date for the reservation wou want to update with attribute \"startDateID\"'})
            }
            const defStatedRes = {err:'No reservation with that start Date was found'}
            var statedRes = defStatedRes
            roomRead.reservations.forEach(element => {
                if(compareStartDates(element.startDate,req.body.startDateID)){
                    statedRes = element
                }
            });
            if(statedRes==defStatedRes){
                return res.json(statedRes)
            }
            roomRead.reservations.splice(roomRead.reservations.indexOf(statedRes),1)
            const newRoomRes = req.body
            delete newRoomRes.startDateID
            const isValidated = resValidator.createValidation(req.body)
            if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
            roomRead['reservations'].push(newRoomRes)
            delete roomRead._id
            delete roomRead.__v
            const newRoom = await axios.post('http://localhost:3000/api/location/update_room/'+req.params.id,roomRead)
            return  res.json({msg:'Room Reservation was updated successfully', data: newRoom.data})
       }
        catch(error) {
            console.log(error)
            if(error.response){
    
                return  res.json({error:'Error getting location with status code'+ error.status})
            }
           }
}
//GET ROOM RES
exports.getRoomRes = async function(req,res){
    try {
        if(!req.params.id) res.json({Error:'You must specify the id of the room that has this reservation.'})
        var roomRes = await axios.get('http://localhost:3000/api/location/get_room/'+req.params.id)   
        var roomRead  = roomRes.data.data
        console.log(JSON.stringify({room:roomRead}))
        if(!roomRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified room'}))
            return res.json({error: 'Cannot get the specified room'})
        }
        roomRead.reservations.forEach(element => {
            if(compareStartDates(element.startDate,req.body.startDate)){
                return res.json({Msg: 'Reservation found successfully', data: element})
            }
        });
        return res.json({Error:'No reservation with the start date'})
       }
       catch(error) {
        console.log(error)
        if(error.response){

            return res.json({error:'Error getting location with status code'+ error.status})
        }
       }
}
//COMPARE DATES
function compareDates (startDate1,endDate1,startDate2){
    var d1 = new Date(startDate1)
    var d2 = new Date(endDate1)
    var d3 = new Date(startDate2)
    if(d1.getTime()<=d3.getTime()&&d3.getTime()<=d2.getTime()) return false
    return true
}
//COMPARE START DATES
function compareStartDates (startDate1,startDate2){
    var d1 = new Date(startDate1)
    var d3 = new Date(startDate2)
    var bool = d1.getTime()==d3.getTime()
    console.log({Date1:d1.getTime(),Date2:d3.getTime(),Result: bool})
    return bool
}