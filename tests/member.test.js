/**
 * @jest-environment node
 */

const funcs = require('./fn')

let xid='';


//creates member and tests
test('member should be created', async () =>{
    const body = {
            name: "adam1",
            age: 22,
            gender: "male",
            address: "312",
            email: "meme",
            phoneNumber: "123456",
            skills: "none",
            interests: "lil",
            pastEvents: [
                {
                    id: "5",
                    name: "smth",
                    startDate: "never",
                    endDate: "never"
                }
            ],
            projectsCompleted: "none",
            reviewsReceived: "some",
            certificatesHeld: "lol"
    }
    expect.assertions(1)
    const response = await funcs.createMember(body)
    xid=response.data.data._id
    expect(response.data.data.reviewsReceived).toBe("some")
})

//to test this first create 3 members
test('number of members should be more than 1', async () =>{
    expect.assertions(1)
    const response = await funcs.viewMember()
    expect(response.data.data.length).not.toBe(0)
})

//////////////////////////partner stuff/////////////////////////
//view member through partner
test('number of members should be 0', async () =>{
    expect.assertions(1)
    const response = await funcs.viewMemberByPartner()
    expect(response.data.data.length).not.toBe(0)
})
 ////////////////////end of partner stuff//////////////////////

//first create a member where the name is adam and put id in 'id' variable
test('member name should be adam1', async () =>{
    const id = xid
    expect.assertions(1)
    const response = await funcs.viewMemberId(id)
    expect(response.data.data.name).toBe("adam1")
})

//to test first create member with certificatesheld = lol then place id in id variable
test('member certificatesheld should be lol', async () =>{
    const id =xid
    const body = {
        certificatesHeld : "lol"
    }
    expect.assertions(1)
    const response = await funcs.updateMember(id,body)
    expect(response.data.data.certificatesHeld).toBe("lol")
})

//to test create a member then place id in id variable then check in postmnan to see if deleted
test('member should be deleted', async () =>{
    const id = xid
    expect.assertions(1)
    const response = await funcs.deleteMember(id)
    expect(response.data.data.name).toBe("adam1")
})



//////////////////////////////admin tests/////////////////////////////////

//creates member and tests
test('member should be created', async () =>{
    const body = {
            name: "adam1",
            age: 22,
            gender: "male",
            address: "312",
            email: "meme",
            phoneNumber: "123456",
            skills: "none",
            interests: "lil",
            pastEvents: [
                {
                    id: "5",
                    name: "smth",
                    startDate: "never",
                    endDate: "never"
                }
            ],
            projectsCompleted: "none",
            reviewsReceived: "some",
            certificatesHeld: "lol"
    }
    expect.assertions(1)
    const response = await funcs.createMemberByAdmin(body)
    xid=response.data.data._id
    expect(response.data.data.reviewsReceived).toBe("some")
})

//to test this first create 3 members
test('number of members should not be 0', async () =>{
    expect.assertions(1)
    const response = await funcs.viewMemberByAdmin()
    expect(response.data.data.length).not.toBe(0)
})

//first create a member where the name is adam1 and put id in 'id' variable
test('member name should be adam1', async () =>{
    expect.assertions(1)
    const id = xid
    const response = await funcs.viewMemberIdByAdmin(id)
    expect(response.data.data.name).toBe("adam1")
})

//to test first create member with certificatesheld = lol then place id in id variable
test('member certificatesheld should be lol', async () =>{
    expect.assertions(1)
    const id = xid
    const body = {
        certificatesHeld : "lol"
    }
    const response = await funcs.updateMemberByAdmin(id,body)
    expect(response.data.data.certificatesHeld).toBe("lol")
})


//to test create a member then place id in id variable then check in postmnan to see if deleted
test('member should be deleted', async () =>{
    const id = xid
    expect.assertions(1)
    const response = await funcs.deleteMemberByAdmin(id)
    expect(response.data.data.name).toBe("adam1")
})


/*
///////////////////////////view locations///////////////////////
test('number of members should be 3', async () =>{
    expect.assertions(1)
    const response = await funcs.viewLocationByMember()
    expect(response.data.data.length).not.toBe(0)
})

/////////////////////////view members by location////////////////////
test('number of locations should be 3', async () =>{
    expect.assertions(1)
    const response = await funcs.viewMemberByLocation()
    expect(response.data.data.length).not.toBe(0)
})
*/