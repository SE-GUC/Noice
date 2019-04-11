const axios = require('axios');

const functions={

viewAllEvents: async() =>{
const events =  await axios.get('http://localhost:5000/api/events/')
console.log(events.data.data)
return events
},
viewEventById:async(id)=>{
    console.log('im invoked')
    const events =  await axios.get(`http://localhost:5000/api/events/${id}`)
    console.log(events.data.data)
    return events
    
},
createEvent: async(body)=>{
    const event = await axios.post('http://localhost:5000/api/events/',body)
    console.log('event info is'+event.data.data)  
    return event
},
deleteEvent : async (id)=>{
 const event = await axios.delete(`http://localhost:5000/api/events/${id}`)
 return event
},
updateEventById: async(id,body) =>{
   console.log("i am called")
    const event = await axios.put(`http://localhost:5000/api/events/${id}`,body)
   console.log("data is"+event.data.data)
   return event
},

searchEvent:async (req) => {
    const event = await axios.post('http://localhost:5000/api/events/search',req)
    return event
},


viewAllEventsByAdmin: async() =>{
    const events =  await axios.get('http://localhost:5000/api/admins/events/')
    console.log(events.data.data)
    return events
    },
 viewEventByIdByAdmin:async(id)=>{
        console.log('im invoked')
        const events =  await axios.get(`http://localhost:5000/api/events/admins/${id}`)
        console.log(events.data.data)
        return events
        
    },
createEventByAdmin: async(body)=>{
        const event = await axios.post('http://localhost:5000/api/admins/events/',body)
        console.log('event info is'+event.data.data)  
        return event
    },
deleteEventByAdmin : async (id)=>{
     const event = await axios.delete(`http://localhost:5000/api/admins/events/${id}`)
     return event
    },
updateEventByIdByAdmin: async(id,body) =>{
       console.log("i am called")
        const event = await axios.put(`http://localhost:5000/api/admins/events/${id}`,body)
       console.log("data is"+event.data.data)
       return event
    },

viewAllEventsByLocation: async() =>{
        const events =  await axios.get('http://localhost:5000/api/Location/events/')
        console.log(events.data.data)
        return events
        },
 viewEventByIdByLocation:async(id)=>{
            console.log('im invoked')
            const events =  await axios.get(`http://localhost:5000/api/Location/admins/${id}`)
            console.log(events.data.data)
            return events
            
        },
 createEventByLocation: async(body)=>{
            const event = await axios.post('http://localhost:5000/api/Location/events/',body)
            console.log('event info is'+event.data.data)  
            return event
        },
 deleteEventByLocation : async (id)=>{
         const event = await axios.delete(`http://localhost:5000/api/Location/events/${id}`)
         return event
        },
updateEventByIdByLocation: async(id,body) =>{
           console.log("i am called")
            const event = await axios.put(`http://localhost:5000/api/Location/events/${id}`,body)
           console.log("data is"+event.data.data)
           return event
        },
viewAllEventsByMembers: async() =>{
            const events =  await axios.get('http://localhost:5000/api/members/events/')
            console.log(events.data.data)
            return events
            },
 viewEventByIdByMembers:async(id)=>{
                console.log('im invoked')
                const events =  await axios.get(`http://localhost:5000/api/members/admins/${id}`)
                console.log(events.data.data)
                return events
                
            },
 createEventByMembers: async(body)=>{
                const event = await axios.post('http://localhost:5000/api/members/events/',body)
                console.log('event info is'+event.data.data)  
                return event
            },
updateEventByIdByMembers: async(id,body) =>{
               console.log("i am called")
                const event = await axios.put(`http://localhost:5000/api/members/events/${id}`,body)
               console.log("data is"+event.data.data)
               return event
            },
deleteEventByMembers : async (id)=>{
                const event = await axios.delete(`http://localhost:5000/api/members/events/${id}`)
                return event
               },
    
    viewAllEventsByPartner: async() =>{
                const events =  await axios.get('http://localhost:5000/api/partners/events/')
                console.log(events.data.data)
                return events
                },
     viewEventByIdByPartner:async(id)=>{
                    console.log('im invoked')
                    const events =  await axios.get(`http://localhost:5000/api/partners/admins/${id}`)
                    console.log(events.data.data)
                    return events
                    
                },
     createEventByPartner: async(body)=>{
                    const event = await axios.post('http://localhost:5000/api/partners/events/',body)
                    console.log('event info is'+event.data.data)  
                    return event
                },
    updateEventByIdByPartner: async(id,body) =>{
                   console.log("i am called")
                    const event = await axios.put(`http://localhost:5000/api/partners/events/${id}`,body)
                   console.log("data is"+event.data.data)
                   return event
                },
    deleteEventByPartner : async (id)=>{
                    const event = await axios.delete(`http://localhost:5000/api/partners/events/${id}`)
                    return event
                   },
        

};
module.exports = functions;