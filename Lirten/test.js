const funcs = require('./fn');


test('View Notifications', async () => {
  const response =  await funcs.viewNotification()
  expect(response.data).not.toEqual(null)
})

test('View a single notification (Length of returned data should be 1)', async () => {
  const id="5c93e8b88c10dc71806b8132"
  const response =  await funcs.viewNotificationByID(id)
  expect(response.data.data.length).toBe(1)
})


test('Post a new Notification', async () =>{
  const body= {
    "From": "ThisIsTheFromTest",
    "To": "ThisIsTheTo",
    "Time": "1/2/2019",
    "Type": "TypeNo1",
    "Title": "ThisIsATitle"
  }
  const postedNotificiation =  await funcs.createNotification(body)
  const testerNotification = await funcs.viewNotificationByID(postedNotificiation.data.id)
  return expect(postedNotificiation.data.id).toEqual(testerNotification.data.id)
})


test('Update a Notification', async () => {
  const id="5ca0f88426bb552b6409fa4b"
  const body={
    "From":"UPDATED FROM"
  }
  const response =  await funcs.updateNotification(id,body)
  expect(response.data.data.From).toEqual("UPDATED FROM")
})


test('Delete a Notification', async () => {
  const id="5ca0f88426bb552b6409fa4b"
  const response =  await funcs.deleteNotification(id)
  expect(response.data.data.id).toEqual(id)
})

