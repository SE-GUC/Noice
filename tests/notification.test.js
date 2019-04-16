
const funcs = require('./notificationFn');
let testId = ''
test('Post a new Notification', async () =>{
  const body= {
    "From": "FROMTEST",
    "To": "TOTEST",
    "Time": "1/2/2019",
    "Type": "TYPETEST",
    "Title": "TITLETEST"
  }
  const postedNotificiation =  await funcs.createNotification(body)
  const testerNotification = await funcs.viewNotificationByID(postedNotificiation.data.data._id)
  testId = postedNotificiation.data.data._id
  return expect(postedNotificiation.data.data._id).toEqual(testerNotification.data.data._id)
})
test('View All Notifications should return something', async () => {
  const response =  await funcs.viewNotification()
  expect(response.data.data.length).not.toBe(0)
})
test('View a single notification', async () => {
  const response =  await funcs.viewNotificationByID(testId)
  expect(response.data.data.From).toEqual("FROMTEST")
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
  expect(response.data.data._id).toEqual(id)
})
