/**
 * @jest-environment node
 */
let locid = ''
let roomid = ''
let roomrecid = ''
const functions = require('./locationAxios');

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
  const user =  await functions.createLocation(body);
  expect(user.data.data.firstName).toEqual("Kareem")
  locid=user.data.data._id;
});
test('Create Room' , async () => {
  const body = new Object({
    capacity:40,
    isAvailable:"true",
    locationId: locid,
    reservations:[{
    state:"RESERVED",
    startDate:"02-01-2019 02:55",
    endDate:"02-01-2020 02:55",
    reserverId:"omar"
    }]
  })
  const user =  await functions.createRoom(locid,body);
  roomid = user.data.data._id;
  expect(user.data.data.locationId).toEqual(locid);
})
test('create Room Request', async () => {
  const body = new Object({
    state: "RESERVED",
    startDate: "02-01-2021 02:55",
    endDate: "02-01-2021 03:55",
    reserverId: "omar1"
  })
  const user = await functions.createRoomResReq(roomid, body);
  expect(user.data.data.data.reservations[1].reserverId).toEqual('omar1');
  roomrecid = user.data.data.data.reservations[1]._id
})
test('get room from loacation', async () => {
  const user = await functions.getRoomsFromLoc(locid);
  expect(user.data.rooms[0].locationId).toEqual(locid);
})
test('get all rooms', async () => {
  
  const user = await functions.getAllRooms();
  expect(user.data.data.length).toBe(3)
})
test('get location', async () => {
  const user = await functions.findLocation(locid);
  expect(user.data.msg).toEqual('Location Found');
})
test('find room', async () => {
  const user = await functions.findRoom(roomid);
  expect(user.data.data._id).toEqual(roomid);
})
test('view Reservation Requests Form Room', async () => {
  const user = await functions.viewResRequestsForRoom(roomid);
  expect(user.data.data[0].reserverId).toEqual('omar');
})
test('get room reservation', async () => {
  const body = new Object({
    startDate: "02-01-2019 02:55"
  })
  const user = await functions.getRoomRes(roomid,body);
  expect(user.data.Msg).toEqual("Reservation found successfully");
})
test('view room request', async () => {
  const user = await functions.viewResRequestsForRoom(roomid);
  expect(user.data.data[0].reserverId).toEqual('omar');
})
test('Update Room', async () => {

  const body = new Object({
    capacity: 38,
    isAvailable: "true",
    locationId: locid,
    reservations: [{
      state: "RESERVED",
      startDate: "02-01-2019 02:55",
      endDate: "02-01-2020 02:55",
      reserverId: "omar2"
    }]
  })
  const user = await functions.updateRoom(roomid, body);
  expect(user.data.data.capacity).toEqual(38);
})
test('reject room request', async () => {
  const body = new Object({
    startDate: "02-01-2019 02:55"
  })
  const user = await functions.rejectRoomRes(roomid,body);
  expect(user.data.data.data.data.reservations[0].state).toEqual('REJECTED');
})
test('update room request', async () => {
  const body = new Object({
    state: "REQUESTED",
      startDate: "02-01-2019 02:55",
      endDate: "02-01-2020 02:55",
      reserverId: "omar2"
  })
  const user = await functions.updateRoomRes(roomid,body);
  expect(user.data.data.data.locationId).toEqual(locid);
})
test('delete room request', async () => {
  const body = new Object({
    startDate: "02-01-2019 02:55"
  })
  const user = await functions.deleteRoomResReq(roomid,body);
  expect(user.data.data.data.locationId).toEqual(locid);
})
test('delete room', async () => {
  const user = await functions.deleteRoom(roomid);
  expect(user.data.data._id).toEqual(roomid);
})
