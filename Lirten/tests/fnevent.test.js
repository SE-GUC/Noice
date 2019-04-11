const funcs = require('./fnevent');
let gid = ''
jest.setTimeout(200000);

test('create event',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid", // if you change this, change it in the search function too
        Type:"lastName",
        Location:"alby", // if you change this, change it in the search function too
        startDate:"ahmed",
        Description:"description"
    }
    expect.assertions(1)
    const response = await funcs.createEvent(body)
    gid= response.data.data.id;
    expect(response.data.data.Owner).toBe("mid")

})





test('view all events',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEvents()
    expect(response.data.data.length).toEqual(1)  
},10000)




test('view event by id',async()=>{
    const id= gid
    const response =  await funcs.viewEventById(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe("create testing")  
},10000)


// Depends on the create Event
test('Search for a Event', async()=>{

    const body={
       "attribute" : "Owner" ,
       "value" : "mid" // if you change the create Event body, reflect the change here
    }
    const response = await funcs.searchEvent(body)
    expect(response.data.data[0].Location).toEqual("alby")
  
  })

test('Update an Event',async ()=>{
    const id= gid
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        
    }
    expect.assertions(1)
    const response = await funcs.updateEventById(id,body)
    console.log("test return"+response.data.data)
    expect(response.data.data.Name).toBe(body.Name)

},200000)



  test('Delete an event',async()=>{
    const id= gid
    expect.assertions(1)
    const response = await funcs.deleteEvent(id)
    expect(response.data.data.Description).toBe("description")
},10000)





test('create event by admin',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid",
        Type:"lastName",
        Location:"alby",
        startDate:"ahmed",
        Description:"description"
    }
    expect.assertions(1)
    const response = await funcs.createEventByAdmin(body)
    gid= response.data.data.id;
    expect(response.data.data.Owner).toBe("mid")

})





test('view all events by admin',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEventsByAdmin()
    expect(response.data.data.length).toEqual(1)  
},10000)




test('view event by id by admin',async()=>{
    const id= gid
    const response =  await funcs.viewEventByIdByAdmin(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe("create testing")  
},10000)



test('Update an Event by admin',async ()=>{
    const id= gid
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        
    }
    expect.assertions(1)
    const response = await funcs.updateEventByIdByAdmin(id,body)
    console.log("test return"+response.data.data)
    expect(response.data.data.Name).toBe(body.Name)

},200000)



  test('Delete an event by admin',async()=>{
    const id= gid
    expect.assertions(1)
    const response = await funcs.deleteEventByAdmin(id)
    expect(response.data.data.Description).toBe("description")
},10000)




test('create event by location',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid",
        Type:"lastName",
        Location:"alby",
        startDate:"ahmed",
        Description:"description"
    }
    expect.assertions(1)
    const response = await funcs.createEventByLocation(body)
    gid= response.data.data.id;
    expect(response.data.data.Owner).toBe("mid")

})





test('view all events by location',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEventsByLocation()
    expect(response.data.data.length).toEqual(1)  
},10000)




test('view event by id by location',async()=>{
    const id= gid
    const response =  await funcs.viewEventByIdByLocation(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe("create testing")  
},10000)



test('Update an Event by location',async ()=>{
    const id= gid
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        
    }
    expect.assertions(1)
    const response = await funcs.updateEventByIdLocation(id,body)
    console.log("test return"+response.data.data)
    expect(response.data.data.Name).toBe(body.Name)

},200000)



  test('Delete an event by location',async()=>{
    const id= gid
    expect.assertions(1)
    const response = await funcs.deleteEventByLocation(id)
    expect(response.data.data.Description).toBe("description")
},10000)



test('create event by member',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid",
        Type:"lastName",
        Location:"alby",
        startDate:"ahmed",
        Description:"description"
    }
    expect.assertions(1)
    const response = await funcs.createEventByMembers(body)
    gid= response.data.data.id;
    expect(response.data.data.Owner).toBe("mid")

})





test('view all events by member',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEventsByMembers()
    expect(response.data.data.length).toEqual(1)  
},10000)




test('view event by id by member',async()=>{
    const id= gid
    const response =  await funcs.viewEventByIdByMembers(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe("create testing")  
},10000)



test('Update an Event by member',async ()=>{
    const id= gid
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        
    }
    expect.assertions(1)
    const response = await funcs.updateEventByIdByMembers(id,body)
    console.log("test return"+response.data.data)
    expect(response.data.data.Name).toBe(body.Name)

},200000)

test('Delete an event by member',async()=>{
    const id= gid
    expect.assertions(1)
    const response = await funcs.deleteEventByMembers(id)
    expect(response.data.data.Description).toBe("description")
},10000)



test('create event by partner',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid",
        Type:"lastName",
        Location:"alby",
        startDate:"ahmed",
        Description:"description"
    }
    expect.assertions(1)
    const response = await funcs.createEventByPartner(body)
    gid= response.data.data.id;
    expect(response.data.data.Owner).toBe("mid")

})





test('view all events by partner',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEventsByPartner()
    expect(response.data.data.length).toEqual(1)  
},10000)




test('view event by id by partner',async()=>{
    const id= gid
    const response =  await funcs.viewEventByIdByPartner(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe("create testing")  
},10000)



test('Update an Event by partner',async ()=>{
    const id= gid
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        
    }
    expect.assertions(1)
    const response = await funcs.updateEventByIdByPartner(id,body)
    console.log("test return"+response.data.data)
    expect(response.data.data.Name).toBe(body.Name)

},200000)

test('Delete an event by partner',async()=>{
    const id= gid
    expect.assertions(1)
    const response = await funcs.deleteEventByPartner(id)
    expect(response.data.data.Description).toBe("description")
},10000)