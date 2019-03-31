const funcs = require('./fn');


    test('Post my informations as a location', async () =>{
        const body={
            "NameOfPlace": "Costa Coffee",
            "ownerName": "Coca-Cola Company",
            "workingPlaceDepartments": [{ 
                "nameOfDepartments": "Nasr City Branch",
                "City": "Nasr City",
                "Region": "Abbas El AAkad",
                "startTime": "10:00 AM",
                "endTime": "11:00 PM",
                "rate": "node4.3",
                "isDepartmentAvailable": [{
                    "nameOfSubdepartment": "Second Floor Room 1",
                    "isAvailable": "0",
                    "Capacity": "15",
            }]
        }]
    }    
    expect.assertions(1)
    const UserLocation =  await funcs.createLocation(body)
   const id = UserLocation.data.data.id
   console.log("Id is"+ id)
    const newone = await funcs.findLocation(userLocation.data.data.id)
    expect(UserLocation.data.data.id).toEqual(newone.data.data.id)
    })





