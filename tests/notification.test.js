// This file is commented as notifications is a deleted entity
// This code is from an old commit where the branch was deleted
// and the commit is lost
/*************************************************************/

/*
const funcs = require('./fn');
let testId = ''


test('Post a new Notification', async () =>{
  const body= {
    "From": "ThisIsTheFromTest2222222222222",
    "To": "ThisIsTheTo",
    "Time": "1/2/2019",
    "Type": "TypeNo1",
    "Title": "ThisIsATitle"
  }
  const postedNotificiation =  await funcs.createNotification(body)
  const testerNotification = await funcs.viewNotificationByID(postedNotificiation.data.id)
  testId = postedNotificiation.data.data._id
  return expect(postedNotificiation.data.id).toEqual(testerNotification.data.id)
})

test('View All Notifications should return something', async () => {
  const response =  await funcs.viewNotification()
  expect(response.data).not.toEqual(null)
})


test('View a single notification (Length of returned data should be 1)', async () => {
  const response =  await funcs.viewNotificationByID(id)
  expect(response.data.data.length).toBe(1)
})

test('View a single notification', async () => {
  const response =  await funcs.viewNotificationByID(testId)
  expect(response.data.data.Title).toEqual("ThisIsATitle")
})

test('Update a Notification', async () => {
  const id=testId
  const body={
    "From":"UPDATED FROM"
  }
  const response =  await funcs.updateNotification(id,body)
  expect(response.data.data.From).toEqual("UPDATED FROM")
})


test('Delete a Notification', async () => {
  const id=testId
  const response =  await funcs.deleteNotification(id)
  expect(response.data.data.id).toEqual(id)
})

*/