const funcs = require('./vacancyFn');
mongoose = require("mongoose");
var id =''

// IF YOU CHANGE the jobDescription or tags in the body, reflect them in the search test under this
test('create vacancy',async()=>{
  const body={
    careerLevel:"create testing",
    jobDescription:"teset",
    educationLevel:"master phd",
    skillsRequired:"yeb2a shaba7",
    partnerId:"dummy id",
    tags:["tag1","tag2"]
}
expect.assertions(1)
const response = await funcs.createVacancy(body)
id= response.data.data._id;
expect(response.data.data.careerLevel).toEqual("create testing")
})

// Depends on the create vacancy
test('Search for a vacancy', async()=>{

  const body={
     "attribute" : "tags" ,
     "value" : "tag1" // if you change the create vacancy tags, reflect the change here
  }
  const response = await funcs.searchVacancy(body)
  expect(response.data.data[0].jobDescription).toEqual("teset")

})


test('apply on a vacancy',async()=>{
  body={
    "id":"1",
    "name":"ammar"
  }
  expect.assertions(1)
  const response = await funcs.applyOnVacancy(id,body)  
  console.log(response.data.data)
  expect(response.data.data.applicants[0].id).toEqual("1")
})
test('apply on a vacancy again',async()=>{
  body={
    "id":"2",
    "name":"ammar"
  }
  expect.assertions(1)
  const response = await funcs.applyOnVacancy(id,body)  
  console.log(response.data.data)
  expect(response.data.data.applicants[0].id).toEqual("1")
})

test('cancel my application',async()=>{
  body={
    "id":"1",
    "name":"ammar bardo"
  }
  expect.assertions(1)
  const response = await funcs.cancelMyApplication(id,body)
  expect(response.data.data.applicants.length).toEqual(1)
},50000)

test('close vacancy',async()=>{
  expect.assertions(1)
  const response = await funcs.cancelMyApplication(id)
  expect(response.data.data.closed).toEqual(true)
  
},50000)
/*test ('delete vacancy',async()=>{
  expect.assertions(1)
  const response = await funcs.deleteVacancy(id)
  expect(response.data.data.careerLevel).toEqual("create testing")
})*/



