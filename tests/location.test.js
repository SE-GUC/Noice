var funcs = require('./locationAxios');

let ic=''
let ic1 =''
let icMember =''
let icRoom =''

test('Create a new location', async () =>{
    const body={
      email: "kareemkimo39@gmail.com",
      password: "whyusfqavvdodis",
      firstName: "Kareem",
      middleName: "Esam Eldin",
      lastName: "Elshafey",
      birthDate: "17-10-1998",
      gender: "male",
      address: "starbuqdvqqvcks",
      phoneNumber: "01223526878",
      typeOfUser: "Co-working Space Owner",
      NameOfPlace: "Costa",
      workingPlaceDepartments: [
          {
              nameOfDepartments: "Sherouk City",
              City: "Cairo",
              Region: "Madinty",
              startTime: "09:00",
              endTime: "15:00",
              rate: 4.4,
          }
      ],
  }
    const user =  await funcs.createLocation(body)
    const user2 =  await funcs.viewLocationById(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    ic=user.data.data._id;
  });

  test('Create a new member', async () =>{
    const body={
      email: "kskamr@gmail.com",
      password: "whyusfqavvdodis",
      firstName: "Kareem",
      middleName: "Mohamed",
      lastName: "Ayman",
      birthDate: "17-10-1998",
      gender: "male",
      address: "starbuqdvqqvcks",
      phoneNumber: "01223526878",
      typeOfUser: "Member",
      skills: "Programming",
      interests:"Tech news",
      pastEvents: [{
        name: "MCM",
        startDate: "10-10-2010",
        endDate: "10-10-2011",
      }],
      projectsCompleted: "Noice",
      reviewsReceived: "none",
      certificatesHeld: "Met Engineering",
  }
    const user =  await funcs.createMember(body)
    const user2 =  await funcs.viewMemberById(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    icMember=user.data.data._id;
  });

   test('update location', async () => {
    const body={
      email: "kareemkimo39@gmail.com",
      password: "whyusfqavvdodis",
      firstName: "Andrew",
      middleName: "Ashraf",
      lastName: "Zekry",
      birthDate: "17-10-1998",
      gender: "male",
      address: "starbuqdvqqvcks",
      phoneNumber: "01223526878",
      typeOfUser: "Co-working Space Owner",
      NameOfPlace: "Costa",
      workingPlaceDepartments: [
          {
              nameOfDepartments: "Sherouk City",
              City: "Cairo",
              Region: "Madinty",
              startTime: "09:00",
              endTime: "15:00",
              rate: 4.4,
          }
      ],
  }
    const response = await funcs.updateLocation(ic,body)
    const response2 = await funcs.updateLocation(ic,body)
    expect(response2.data.data.firstName).toBe("Andrew")
});

// IF YOU CHANGE the capacity or locationId in the body, reflect them in the search test under this
/*  test('Create a new room', async () =>{
    jest.setTimeout(10000)
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
    const user =  await funcs.createLocationRoom(ic,body)
    const user2 =  await funcs.viewRoomById(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    icRoom=user.data.data._id;
  }); */

    /* // Depends on the create room
  test('Search for a room', async()=>{
    const body={
      "attribute" : "capacity" ,
      "value" : "120" // if you change the create room attributes/values, reflect the change here
    }
    const response = await funcs.searchRoom(body)
    expect(response.data.data[0].locationId).toEqual("ic") // if you change the create room attributes/values, reflect the change here
  })*/

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
          email: "mohamed@gmail.com",
          password: "whyusfqavvdodis",
          firstName: "Mohamed",
          middleName: "Salah Eldin",
          lastName: "Ali",
          birthDate: "15-10-1998",
          gender: "male",
          address: "starbuqdvqqvcks",
          phoneNumber: "01223526878",
          typeOfUser: "Co-working Space Owner",
          NameOfPlace: "Coffee Shop",
          workingPlaceDepartments: [
              {
                  nameOfDepartments: "Sherouk City",
                  City: "Cairo",
                  Region: "Madinty",
                  startTime: "09:00",
                  endTime: "15:00",
                  rate: 4.4,
              }
          ],
      }
        const user =  await funcs.createLocation(body)
        const user2 =  await funcs.viewLocationById(user.data.data._id)
        expect(user.data.data._id).toEqual(user2.data.data._id)
        ic1=user.data.data._id;
      });

  test('as an admin update location', async () => {
       jest.setTimeout(10000)
        const body={
          email: "mohamed@gmail.com",
          password: "whyusfqavvdodis",
          firstName: "Mohamed",
          middleName: "Salah Eldin",
          lastName: "Ali",
          birthDate: "15-10-1998",
          gender: "male",
          address: "El Rehab",
          phoneNumber: "01223526878",
          typeOfUser: "Co-working Space Owner",
          NameOfPlace: "Coffee Shop",
          workingPlaceDepartments: [
              {
                  nameOfDepartments: "Sherouk City",
                  City: "Cairo",
                  Region: "Madinty",
                  startTime: "09:00",
                  endTime: "15:00",
                  rate: 4.4,
              }
          ],
      }
        const response = await funcs.adminUpdateLocation(ic1,body)
        const response2 = await funcs.adminUpdateLocation(ic1,body)
        expect(response2.data.data.address).toBe("El Rehab")
    });
  
  test('as an admin delete location', async () => {
        const user =  await funcs.adminViewLocationById(ic1)
        const user2 =  await funcs.adminDeleteLocation(ic1)
        expect(user.data.data._id).toEqual(user2.data.data._id)
    });
    
  





