/**
 * @jest-environment node
 */
const funcs = require('./fn');
const body2={
    senderID: "321",
    receiverID: "123",
    subject: "Kalboba",
    content: "enti kalbooba geedan",
    date: "12-02-2019"
}
let ic=''
test('First message from senderid should be 123', async () => {
    expect.assertions(1)
    const response =  await funcs.viewMessage()
    expect(response.data.data[0].senderID).toEqual('123')
});

test('Send a message', async () =>{
    expect.assertions(1)
    const body={
        senderID: "321",
        receiverID: "123",
        subject: "Esmi reda",
        content: "ana esmi Andrew ahlann wasahln bekomm gamy3an",
        date: "12-02-2019"
  }
    const user =  await funcs.createMessage(body)
    const user2 =  await funcs.viewMessageid(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    ic=user.data.data._id;
  });

  test('delete message', async () => {
    const user =  await funcs.viewMessageid(ic)
    const user2 =  await funcs.deleteMessage(ic)
    expect(user.data.data._id).toEqual(user2.data.data._id)
});



  