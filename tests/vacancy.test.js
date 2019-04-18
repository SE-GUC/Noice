const funcs = require('./vacancyFn');
mongoose = require("mongoose");
var ic =''

// IF YOU CHANGE the jobDescription or tags in the body, reflect them in the search test under this
test('create vacancy',async()=>{
   jest.setTimeout(20000)
   const body={
     title: "hamada",
     careerLevel:"create testing",
     jobDescription:"teset",
     educationLevel:"master phd",
     partnerId: "dummy id",
     time: "09:00",
     skillsRequired:"yeb2a shaba7",
     applicants: [],
     status: false,
     closed: false,
     tags:["tag1","tag2"]
 }
 expect.assertions(1)
const response = await funcs.createVacancy(body)
ic= response.data.data._id;
expect(response.data.data._id).toEqual(ic)
})

/* 
// Depends on the create vacancy
// Any changes you do in create vacancy represent them here
// add these immediately after the create vacancy test
test('Search for a vacancy', async()=>{

    const body={
       "attribute" : "tags" ,
       "value" : "tag1" // if you change the create vacancy tags, reflect the change here
    }
    const response = await funcs.searchVacancy(body)
    expect(response.data.data[0].jobDescription).toEqual("teset")
  
  }) */

// Depends on the create vacancy
test('Search for a vacancy', async()=>{

  const body={
     "attribute" : "tags" ,
     "value" : "tag1" // if you change the create vacancy tags, reflect the change here
  }
  const response = await funcs.searchVacancy(body)
  expect(response.data.data[1].jobDescription).toEqual("teset")

})


test('apply on a vacancy',async()=>{
  body={
    "id":"1",
    "name":"ammar"
  }
  const response = await funcs.applyOnVacancy(ic,body)  
  console.log(response.data.data)
  expect(response.data.data.applicants[0].name).toEqual("ammar")
})

test('apply on a vacancy again',async()=>{
  body={
    "id":"2",
    "name":"ammar"
  }
  expect.assertions(1)
  const response = await funcs.applyOnVacancy(ic,body)  
  console.log(response.data.data)
  expect(response.data.data.applicants[0].id).toEqual("1")
})

/*test('cancel my application',async()=>{
  body={
    "id":"1",
    "name":"ammar bardo"
  }
  expect.assertions(1)
  const response = await funcs.cancelMyApplication(id,body)
  expect(response.data.data.applicants.length).toEqual(1)
},50000)*/


/*test('close vacancy',async()=>{
  const body={
    closed:true
  }
  const response = await funcs.closeVacancy(ic,body)
  expect(response.data.closed).toEqual(true) 
  
},500000) 
test ('delete vacancy',async()=>{
  const user =  await funcs.viewVacancyByID(ic)
  const user2 =  await funcs.deleteVacancy(ic)
  expect(user.data.data._id).toEqual(user2.data.data._id)
}) */

test('first vacancy status is false', async () => {
  jest.setTimeout(100000000)
  const response =  await funcs.membersViewAllLocations()
  expect(response.data.data[0].status).toEqual(false)
  });


test('delete vacancy', async () => {
  const user =  await funcs.viewVacancyByID(ic)
  const user2 =  await funcs.deleteVacancy(ic)
  expect(user.data.data._id).toEqual(user2.data.data._id)
})
