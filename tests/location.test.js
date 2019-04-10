const funcs = require('./locationAxios');

let ic=''

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
            isDepartmentAvailable: [{
                nameOfSubdepartment: "Room1",
                isAvailable: true,
                capacity: 120
            }]
        }]
  }
    const user =  await funcs.createLocation(body)
    const user2 =  await funcs.viewLocationById(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    ic=user.data.data._id;
  });

  test('First Location should be Costa', async () => {
    const response =  await funcs.viewAllLocations()
    expect(response.data.data[0].NameOfPlace).toEqual('Costa')
    });

  test('delete location', async () => {
    const user =  await funcs.viewLocationById(ic)
    const user2 =  await funcs.deleteLocation(ic)
    expect(user.data.data._id).toEqual(user2.data.data._id)
});