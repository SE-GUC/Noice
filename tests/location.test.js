const funcs = require('./locationAxios');

let ic=''
let ic1 =''
let icRoom =''
let icMember =''

test('Create a new location', async () =>{
    const body={
        NameOfPlace:"Costa",
        ownerName:"Coca",
        workingPlaceDepartments: [{
            nameOfDepartments: "Sherouk City",
            City: "Cairo",
            Region: "Madinty",
            startTime: "09:00",
            endTime: "15:00",
            rate: 4.4,
        }]
  }
    const user =  await funcs.createLocation(body)
    const user2 =  await funcs.viewLocationById(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    ic=user.data.data._id;
  });

  test('Create a new member', async () =>{
    const body={
      name: "kareem elshafey",
      age: 20,
      gender: "male",
      address: "Tagamoaa El Khamis",
      email: "kskakskda@gmail.com",
      phoneNumber: "01020302934",
      skills: "Programming",
      interests:"Tech news",
      pastEvents: [{
        name: "MCM",
        startDate: "10/10/10",
        endDate: "10/10/11",
      }],
      projectsCompleted: "Noice",
      reviewsReceived: "none",
      certificaesHeld: "Met Engineering",
  }
    const user =  await funcs.createMember(body)
    const user2 =  await funcs.viewMemberById(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    icMember=user.data.data._id;
  });

  test('update location', async () => {
    const body={
        NameOfPlace:"Costa",
        ownerName:"Coca Cola",
        workingPlaceDepartments: [{
            nameOfDepartments: "Nasr City",
            City: "Nasr City",
            Region: "Abbas El32ad",
            startTime: "09:00",
            endTime: "15:00",
            rate: 4.5
        }]
  }
    const response = await funcs.updateLocation(ic,body)
    const response2 = await funcs.updateLocation(ic,body)
    expect(response2.data.data.ownerName).toBe("Coca Cola")
});

  test('Create a new room', async () =>{
    const body={
        capacity:120,
        isAvailable:true,
        locationId: ic,
        reservations: [{
          type:"UNRESERVED",
          startDate:"10/05/18 10:10",
          endDate:"11/05/18 10:10",
          reserverId: icMember,
        }]
    }
    const user =  await funcs.createLocationRoom(body)
    const user2 =  await funcs.viewRoomById(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    icRoom=user.data.data._id;
  });

  test('First Location member should see is Costa', async () => {
    const response =  await funcs.membersViewAllLocations()
    expect(response.data.data[0].NameOfPlace).toEqual('Costa')
    });
  

  test('First Location should be Costa', async () => {
    const response =  await funcs.viewAllLocations()
    expect(response.data.data[0].NameOfPlace).toEqual('Costa')
    });

  test('First Location partners should see is Costa', async () => {
    const response =  await funcs.partnersViewAllLocations()
    expect(response.data.data[0].NameOfPlace).toEqual('Costa')
    });

  test('Location admin should see Costa as the name of place', async () => {
      const response =  await funcs.adminViewLocationById(ic)
      expect(response.data.data.NameOfPlace).toEqual('Costa')
      });

  test('delete location', async () => {
        const user =  await funcs.viewLocationById(ic)
        const user2 =  await funcs.deleteLocation(ic)
        expect(user.data.data._id).toEqual(user2.data.data._id)
    });

  test('Create a new location for admin to update/delete', async () =>{
        const body={
            NameOfPlace:"costaCoffee",
            ownerName:"Coca",
            workingPlaceDepartments: [{
                nameOfDepartments: "Sherouk City",
                City: "Cairo",
                Region: "Madinty",
                startTime: "09:00",
                endTime: "15:00",
                rate: 4.4,
            }]
      }
        const user =  await funcs.createLocation(body)
        const user2 =  await funcs.viewLocationById(user.data.data._id)
        expect(user.data.data._id).toEqual(user2.data.data._id)
        ic1=user.data.data._id;
      });

  test('as an admin update location', async () => {
        const body={
            NameOfPlace:"Costa",
            ownerName:"Pepsi",
            workingPlaceDepartments: [{
                nameOfDepartments: "Nasr City",
                City: "Nasr City",
                Region: "Abbas El32ad",
                startTime: "09:00",
                endTime: "15:00",
                rate: 4.5
            }]
      }
        const response = await funcs.adminUpdateLocation(ic1,body)
        const response2 = await funcs.adminUpdateLocation(ic1,body)
        expect(response2.data.data.ownerName).toBe("Pepsi")
    });
  
  test('as an admin delete location', async () => {
        const user =  await funcs.adminViewLocationById(ic1)
        const user2 =  await funcs.adminDeleteLocation(ic1)
        expect(user.data.data._id).toEqual(user2.data.data._id)
    });

  





