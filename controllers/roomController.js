var room= require('../models/Room')
const axios = require('axios')
const validator = require('../Validations/roomValidations')
const resValidator = require('../Validations/roomResValidation')
const stringify = require('json-stringify-safe')
// GET ALL ROOMS
exports.getAllRooms = async function(req,res){
    const rooms= await room.find()
    console.log(JSON.stringify({data: rooms}))
    return res.json({data: rooms})
}
//GET ALL ROOMS FOR A SPECIFIED LOCATION
exports.getRoomsForLoc = async function(req,res){
    axios.get('http://localhost:3000/api/users/location/get_location/'+req.params.id)   
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
    .catch(error=>{
        console.log({Config:error.config});
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return res.json({error:'Error getting location with status code: '+ error.response.status,
            serverResponse:error.response.data,
            responseHaeders: error.response.headers})
        } else if (error.request) {
            console.log(error.request);
            return res.json(stringify({Error:'The server did not respond for this request.',request:error.request}))
        } else {
            console.log('Error', error.message);
            return res.json({Error:'Unkonw error has happened',message: error.message})
        }
    })
}
// CREATE ROOM FOR A SPEC LOCATION
exports.createRoom = async function(req,res){
   
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var locationRes = null
         try {
             locationRes = await axios.get('http://localhost:3000/api/users/location/get_location/'+req.body.locationId)   
         }catch(error){
            console.log(error.config);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return res.json({error:'Error getting location with status code: '+ error.response.status,
                serverResponse:error.response.data,
                responseHaeders: error.response.headers})
            } else if (error.request) {
                // console.log(error.request);
                return res.json({Error:'The server did not respond for this request.',message:error.message})
            } else {
                console.log('Error', error.message);
                return res.json({Error:'Unkonw error has happened',message: error.message})
            }
         }
        var location  = locationRes.data.data
        console.log(JSON.stringify({location:location}))
        if(!location) {
            console.log(JSON.stringify({error: 'Cannot get the specified location'}))
            return res.json({error: 'Cannot get the specified location'})
        }
        var newRoom = null
        try
        {newRoom = await room.create(req.body)}
        catch(error){
            console.log(error.config);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return res.json({error:'Error creating room with status code: '+ error.response.status,
                serverResponse:error.response.data,
                responseHaeders: error.response.headers})
            } else if (error.request) {
                console.log(error.request);
                return res.json({Error:'The server did not respond for this request.',request:error.request})
            } else {
                console.log('Error', error.message);
                return res.json({Error:'Unkonw error has happened',message: error.message})
            }
        }
        console.log(JSON.stringify({msg:'Room was created successfully', data: newRoom}))
        return res.json({msg:'Room was created successfully', data: newRoom})
       
}
// UPDATE ROOM
exports.updateRoom = async function(req,res){
        if(!req.params.id) return res.json({Error:'You must specify the id of the room'})
        const isValidated = validator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        var locationRes = null
        try {
            locationRes = await axios.get('http://localhost:3000/api/users/location/get_location/'+req.body.locationId)  
        }
        catch(error) {
            console.log(error.config);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return res.json({error:'Error getting location with status code: '+ error.response.status,
                serverResponse:error.response.data,
                responseHaeders: error.response.headers})
            } else if (error.request) {
                console.log(error.request);
                return res.json({Error:'The server did not respond for this request.',message:error.message})
            } else {
                console.log('Error', error.message);
                return res.json({Error:'Unkonw error has happened',message: error.message})
            }
        }
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
        room.findOneAndUpdate({_id:req.params.id},req.body,function(err,docs){
            if(!docs){
                return res.json({Error: "Error updating the specified room",msg:err})
            }
            console.log(JSON.stringify({msg: 'Room updated successfully', data: docs}))
            return res.json({msg: 'Room updated successfully', data: docs})
        })
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
        console.log(error.config);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return res.json({error:'Error deleting room with status code: '+ error.response.status,
                serverResponse:error.response.data,
                responseHaeders: error.response.headers})
            } else if (error.request) {
                console.log(error.request);
                return res.json({Error:'The server did not respond for this request.',request:error.request})
            } else {
                console.log('Error', error.message);
                return res.json({Error:'Unkonw error has happened',message: error.message})
            }
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
        console.log(error)
        if(error.response){
            return res.json({error:'Error getting room with status code'+ error.status})
        }else{
            return res.status(500).json({Error: "Unkown error has happened",message:error.message})
        }
       } 
}
// CREATE ROOM RESERVATION
exports.createRoomResReq = async function(req,res){
    var roomRes = null
    try {
        roomRes = await axios.get('http://localhost:3000/api/users/location/get_room/'+req.params.id)   
     } catch(error) {
            console.log(error.config);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return res.json({error:'Error getting room with status code: '+ error.response.status,
                serverResponse:error.response.data,
                responseHaeders: error.response.headers})
            } else if (error.request) {
                console.log(error.request);
                return res.json({Error:'The server did not respond for this request.',request:error.request})
            } else {
                console.log('Error', error.message);
                return res.json({Error:'Unkonw error has happened',message: error.message})
            }
        }
        var roomRead  = roomRes.data.data
        console.log(JSON.stringify({room:roomRead}))
        if(!roomRead) {
            console.log(JSON.stringify({error: 'Cannot get the specified room'}))
            return  res.status(404).json({error: 'Cannot get the specified room'})
        }
        const isValidated = resValidator.createValidation(req.body)
        if (isValidated.error) return res.status(400).send({ error: isValidated.error.details[0].message })
        const newRoomRes = req.body
        roomRead.reservations.forEach(element => {
            if(!compareDates(element.startDate,element.endDate,req.body.startDate,element.state)){
                return  res.json({Error: 'Cannot reserve that room at this time. It is reserved'})
            }
        });
        roomRead['reservations'].push(newRoomRes)
        delete roomRead.__v
        delete roomRead._id
        console.log({roomReadKey:roomRead})
        var newRoom = null;
        try{
            newRoom = await axios.post('http://localhost:3000/api/users/location/update_room/'+req.params.id,roomRead)
    }
    catch(error) {
        console.log(error.config);
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return res.json({error:'Error updating room with status code: '+ error.response.status,
            serverResponse:error.response.data,
            responseHaeders: error.response.headers})
        } else if (error.request) {
            console.log(error.request);
            return res.json({Error:'The server did not respond for this request.',request:error.request})
        } else {
            console.log('Error', error.message);
            return res.json({Error:'Unkonw error has happened',message: error.message})
        }
    }
        return  res.json({msg:'Room Reservation was created successfully', data: newRoom.data})
}
//DELETE ROOM RES
exports.deleteRoomResReq = async function(req,res){
    if(!req.params.id) return res.json({Error:'You must specify the id of the room that has this reservation.'})
    var roomRes = null
    try {
        roomRes = await axios.get('http://localhost:3000/api/users/location/get_room/'+req.params.id)   
     } catch(error) {
            console.log(error.config);
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
                return res.json({error:'Error getting room with status code: '+ error.response.status,
                serverResponse:error.response.data,
                responseHaeders: error.response.headers})
            } else if (error.request) {
                console.log(error.request);
                return res.json({Error:'The server did not respond for this request.',request:error.request})
            } else {
                console.log('Error', error.message);
                return res.json({Error:'Unkonw error has happened',message: error.message})
            }
        }
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
        var newRoom = null;
        try{
         newRoom = await axios.post('http://localhost:3000/api/users/location/update_room/'+req.params.id,roomRead)
        }
       catch(error) {
        console.log(error.config);
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return res.json({error:'Error updating room with status code: '+ error.response.status,
            serverResponse:error.response.data,
            responseHaeders: error.response.headers})
        } else if (error.request) {
            console.log(error.request);
            return res.json({Error:'The server did not respond for this request.',request:error.request})
        } else {
            console.log('Error', error.message);
            return res.json({Error:'Unkonw error has happened',message: error.message})
        }
       }
       return res.json({msg:'Room Reservation was deleted successfully', data: newRoom.data})
       
}
//UPDATE ROOM RES
exports.updateRoomRes = async function(req,res){
    try {
        if(!req.params.id) return res.json({Error:'You must specify the id of the room that has this reservation.'})
            var roomRes = await axios.get('http://localhost:3000/api/users/location/get_room/'+req.params.id)   
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
            const newRoom = await axios.post('http://localhost:3000/api/users/location/update_room/'+req.params.id,roomRead)
            return  res.json({msg:'Room Reservation was updated successfully', data: newRoom.data})
       }
        catch(error) {
            console.log(error)
            if(error.response){
    
                return  res.json({error:'Error getting data with status code'+ error.status})
            }
           }
}
//GET ROOM RES
exports.getRoomRes = async function(req,res){
    try {
        if(!req.params.id) res.json({Error:'You must specify the id of the room that has this reservation.'})
        var roomRes = await axios.get('http://localhost:3000/api/users/location/get_room/'+req.params.id)   
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
        if(error.response){
            return res.json({error:'Error getting room with status code'+ error.status})
        }
       }
       i}
//View a specified room in a specified location
exports.viewResRequestsForRoom = async function(req,res){
    if(!req.params.id) return res.json({Eror: "You must specify which room to show th reservations!"})
    var roomRes;
    var roomRead;
    try{
        roomRes = await axios.get('http://localhost:3000/api/users/location/get_room/'+req.params.id)   
        roomRead  = roomRes.data.data
    }catch(error){
        console.log(error)
        if(error.response){
            return res.json({error:'Error getting room with status code'+ error.status,serverResponse:error.response})
        }
    
    }
    if(!roomRead) {
        console.log(JSON.stringify({error: 'Cannot get the specified room'}))
        return res.json({error: 'Cannot get the specified room'})
    }
    return res.json({Msg: "Room reservations requests is read successfully",data:roomRead.reservations})

}

exports.rejectRoomRes = async function(req,res){
    if(!req.params.id) return res.json({Eror: "You must specify which room to show th reservations!"})
    if(!req.body.startDate) return res.json({Error:"You must specify the reservation to be rejected by sending its <startDate>"})
    try{
        roomRes = await axios.get('http://localhost:3000/api/users/location/get_room/'+req.params.id)   
        roomRead  = roomRes.data.data
    }catch(error){
        console.log(error.config);
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return res.json({error:'Error getting room with status code: '+ error.response.status,
            serverResponse:error.response.data,
            responseHaeders: error.response.headers})
        } else if (error.request) {
            console.log(error.request);
            return res.json({Error:'The server did not respond for this request.',request:error.request})
        } else {
            console.log('Error', error.message);
            return res.json({Error:'Unkonw error has happened',message: error.message})
        }
    }
    if(!roomRead) {
        console.log(JSON.stringify({error: 'Cannot get the specified room'}))
        return res.json({error: 'Cannot get the specified room'})
    }
    var selectedReservation = null
    roomRead.reservations.forEach(element => {
                delete element._id
                if(compareStartDates(element.startDate,req.body.startDate)){
                  selectedReservation = element
                }
            })
    if(!selectedReservation){
        return res.status(404).json({Error:'The reservation was not found.'})
    }
    console.log({selectedReservation:selectedReservation})
    var newRoom = null
    try{
        delete selectedReservation._id
        selectedReservation.state = 'REJECTED'
        console.log({selectedReservation:selectedReservation})
        selectedReservation.startDateID = selectedReservation.startDate
        newRoom = await axios.post('http://localhost:3000/api/users/location/update_room_res/'+req.params.id,selectedReservation)
    }catch(error){
        console.log(error.config);
        if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            return res.json({error:'Error updating room with status code: '+ error.response.status,
            serverResponse:error.response.data,
            responseHaeders: error.response.headers})
        } else if (error.request) {
            console.log(error.request);
            return res.json({Error:'The server did not respond for this request.',request:error.request})
        } else {
            console.log('Error', error.message);
            return res.json({Error:'Unkonw error has happened',message: error.message})
        }
    }
    return  res.json({msg:'Room Reservation was rejected successfully', data: newRoom.data})
    }
//COMPARE DATES
function compareDates (startDate1,endDate1,startDate2,state){
    var d1 = new Date(startDate1)
    var d2 = new Date(endDate1)
    var d3 = new Date(startDate2)
    if(d1.getTime()<=d3.getTime()&&d3.getTime()<=d2.getTime()){
        if(state === 'RESERVED')
        return false
    } 
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