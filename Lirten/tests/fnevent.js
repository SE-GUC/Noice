const axios = require('axios');

const functions={

viewAllEvents: async() =>{
const events =  await axios.get('http://localhost:3000/api/events/')
console.log(events.data.data)
return events
},
viewEventById:async(id)=>{
    console.log('im invoked')
    const events =  await axios.get(`http://localhost:3000/api/events/${id}`)
    console.log(events.data.data)
    return events
    
},
createEvent: async(body)=>{
    const event = await axios.post('http://localhost:3000/api/events/',body)
    console.log('event info is'+event.data.data)  
    return event
},
deleteEvent : async (id)=>{
 const event = await axios.delete(`http://localhost:3000/api/events/${id}`)
 return event
},
updateEventById: async(id,body) =>{
   console.log("i am cold")
    const event = await axios.put(`http://localhost:3000/api/events/${id}`,body)
   console.log("data is"+event.data.data)
   return event
},

searchEvent:async (req) => {
    const event = await axios.post('http://localhost:3000/api/events/search',req)
    return event
},

/*
viewAllEvents: async() =>{
    const events =  await axios.get('http://localhost:5000/api/members/event')
    console.log(events.data.data)
    return events
    },
*/

};
module.exports = functions;