/**
 * @jest-environment node
 */

const funcs = require('./membersfn')

let xid_1='';
let xid_2='';


//creates member and tests
test('member should be created', async () =>{
    const body = {
            email: "kskamr@gmail.com",
            password: "whyusfqavvdodis",
            firstName: "dude1",
            middleName: "Mohamed",
            lastName: "Ayman",
            birthDate: "17-10-1998",
            gender: "male",
            address: "starbuqdvqqvcks",
            phoneNumber: "01223526878",
            typeOfUser: "Member",
            skills: "Programming",
            interests: "Tech news",
            pastEvents: [
                {
                    
                    name: "MCM",
                    startDate: "10/10/10",
                    endDate: "10/10/11"
                }
            ],
            projectsCompleted: "Noice",
            reviewsReceived: "none",
            certificatesHeld: "Met Engineering"
        }
    expect.assertions(1)
    const response = await funcs.createMember(body)
    xid_1=response.data.data._id
    expect(response.data.data.firstName).toBe("dude1")
})

//to test this first create 3 members
test('number of members should be more than 1', async () =>{
    const response = await funcs.viewMember()
    expect(response.data.data.length).not.toBe(0)
})

//////////////////////////partner stuff/////////////////////////
//view member through partner
test('number of members should not be 0', async () =>{
    expect.assertions(1)
    const response = await funcs.viewMemberByPartner()
    expect(response.data.data.length).not.toBe(0)
})
 ////////////////////end of partner stuff//////////////////////

//first create a member where the name is adam and put id in 'id' variable
test('member name should be dude1', async () =>{
    const id = xid_1
    expect.assertions(1)
    const response = await funcs.viewMemberId(id)
    expect(response.data.data.firstName).toBe("dude1")
})

//to test first create member with certificatesheld = lol then place id in id variable
test('member certificatesheld should be lol', async () =>{
    const id = xid_1
    const body = {
        certificatesHeld : "lol"
    }
    expect.assertions(1)
    const response = await funcs.updateMember(id,body)
    expect(response.data.data.certificatesHeld).toBe("lol")
})


test('member should be deleted', async () => {
    const user =  await funcs.viewMemberId(xid_1)
    const user2 =  await funcs.deleteMember(xid_1)
    expect(user.data.data._id).toEqual(user2.data.data._id)
});

//////////////////////////////admin tests/////////////////////////////////

//creates member and tests
test('member should be created', async () =>{
    const body = {
        email: "kskamr@gmail.com",
        password: "whyusfqavvdodis",
        firstName: "dude1",
        middleName: "Mohamed",
        lastName: "Ayman",
        birthDate: "17-10-1998",
        gender: "male",
        address: "starbuqdvqqvcks",
        phoneNumber: "01223526878",
        typeOfUser: "Member",
        skills: "Programming",
        interests: "Tech news",
        pastEvents: [
            {
                
                name: "MCM",
                startDate: "10/10/10",
                endDate: "10/10/11"
            }
        ],
        projectsCompleted: "Noice",
        reviewsReceived: "none",
        certificatesHeld: "Met Engineering"
    }
    expect.assertions(1)
    const response = await funcs.createMemberByAdmin(body)
    xid_2=response.data.data._id
    expect(response.data.data.firstName).toBe("dude1")
})

//to test this first create 3 members
test('number of members should not be 0', async () =>{
    expect.assertions(1)
    const response = await funcs.viewMemberByAdmin()
    expect(response.data.data.length).not.toBe(0)
})

//first create a member where the name is adam1 and put id in 'id' variable
test('member name should be dude1', async () =>{
    expect.assertions(1)
    const id = xid_2
    const response = await funcs.viewMemberIdByAdmin(id)
    expect(response.data.data.firstName).toBe("dude1")
})

//to test first create member with certificatesheld = lol then place id in id variable
test('member certificatesheld should be lol', async () =>{
    expect.assertions(1)
    const id = xid_2
    const body = {
        certificatesHeld : "lol"
    }
    const response = await funcs.updateMemberByAdmin(id,body)
    const response2 = await funcs.updateMemberByAdmin(id,body)
    expect(response2.data.data.certificatesHeld).toBe("lol")
})


test('member should be deleted', async () => {
    const user =  await funcs.viewMemberId(xid_2)
    const user2 =  await funcs.deleteMember(xid_2)
    expect(user.data.data._id).toEqual(user2.data.data._id)
});


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