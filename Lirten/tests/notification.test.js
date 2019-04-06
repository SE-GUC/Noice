const funcs = require('./notificationFn');


test('View Notifications', async () => {
  jest.setTimeout(30000000);
  const response =  await funcs.viewNotification()
  expect(response.data.data).not.toEqual(null)
})

test('Post a new Notification', async () =>{
  
  const body= {
    From: "ThisIsTheFromTest2222222222222",
    To: "ThisIsTheTo",
    Time: "1/2/2019",
    Type: "TypeNo1",
    Title: "ThisIsATitle"
  }
  const postedNotificiation =  await funcs.createNotification(body)
  
 // const testerNotification = await funcs.viewNotificationByID(postedNotificiation.data.data.id)
  return expect(postedNotificiation.data.data.Title).toEqual("ThisIsATitle")
})

test('View a single notification', async () => {
  const id="5ca0fa0b0351b42650a46824"
  const response =  await funcs.viewNotificationByID(id)
  expect(response.data.data.Title).toBe("ThisIsATitle")
})


test('Update a Notification - Should FAIL (updates with value, checks if value is not the same)', async () => {
  
  const id="5ca0f9f526bb552b6409fa4d"
  const body={
    From:"UPDATED",
    To: "UPDATED",
    Time: "1/2/2019",
    Type: "UPDATED",
    Title: "UPDATED"
}
  const response =  await funcs.updateNotification(id,body)
  expect(response.data.data.From).toBe("UPDATED")
})