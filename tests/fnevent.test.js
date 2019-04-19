const funcs = require('./fnevent');

let ic=''

// if you change any values here reflect them in the search test under this one
test('create event',async () =>{
    const body={
        Name:"create testing",
        Owner:"mid",
        Type:"lastName",
        Location:"alby",
        startDate:"ahmed",
        Description:"Event ra2e3"
    }
    expect.assertions(1)
    const user = await funcs.createEvent(body)
    const user1 = await funcs.viewEventById(user.data.data._id)
    expect(user.data.data._id).toEqual(user1.data.data._id)
    ic=user.data.data._id;

})

// Depends on the create event test
// Any changes you do in create event represent them here
// add this immediately after the create event test
test('Search for an Event', async()=>{

    const body={
       "attribute" : "Owner" ,
       "value" : "mid" // if you change the create event values, reflect your changes here and in the expect
    }
    const response = await funcs.searchEvent(body)
    expect(response.data.data[0].Type).toEqual("lastName")
  
  })

test('view all events',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllEvents()
    expect(response.data.data.length).toEqual(4)  
},10000)




test('view event by id',async()=>{
    const response =  await funcs.viewEventById(ic)
    expect.assertions(1)
    expect(response.data.data.Name).toBe("create testing")  
})


test('Update an Event',async ()=>{
    const body={
        Name:"Updated1",
        Owner:"hamada updated",
        
    }
    expect.assertions(1)
    const response = await funcs.updateEventById(ic,body)
    expect(response.data.data.Name).toBe("Updated1")

},10000)


test('Delete an event',async()=>{
    expect.assertions(1)
    const response = await funcs.deleteEvent(ic)
    expect(response.data.data.Name).toBe("Updated1")
},10000)







    





