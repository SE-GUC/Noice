const funcs = require('./fnevent');


test('view all events',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEvents()
    expect(response.data.data.length).toEqual(6)  
},10000)




test('view event by id',async()=>{
    id= "5ca7d7601e24263070bda6ce"
    const response =  await funcs.viewEventById(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe("Updated1")  
})


test('Update an Event',async ()=>{
    id= "5ca7d7601e24263070bda6ce"
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        Type:"el Updated",
        Participants : 500,
    }
    expect.assertions(1)
    const response = await funcs.updateEventById(id,body)
    console.log(response.data.data)
    expect(response.data.data.Name).toBe(body.Name)

},10000)


test('Delete an event',async()=>{
    id= "5ca7d74b1e24263070bda6cd"
    expect.assertions(1)
    const response = await funcs.deleteEvent(id)
    expect(response.data.data.Name).toBe("event")
},10000)



test('create event',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid",
        Type:"lastName",
        Location:"alby",
        startDate:"ahmed"
    }
    expect.assertions(1)
    const response = await funcs.createEvent(body)
    gid= response.data.data.id;
    expect(response.data.data.Owner).toBe("mid")

})



    





