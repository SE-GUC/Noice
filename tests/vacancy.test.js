const funcs = require('./vacancyFn');
const ufuncs = require('./membersfn')
var Vacancy= require('../models/Vacancy')
var vacancyId =''
var userId=''
    // IF YOU CHANGE the jobDescription or tags in the body, reflect them in the search test under this
test('create vacancy',async()=>{
  const body={
    title:"test Title",
    careerLevel:"create testing",
    jobDescription:"teset" 
}
expect.assertions(1)
const response = await funcs.createVacancy(body)
vacancyId= response.data.data._id;
expect(response.data.data._id).toEqual(vacancyId)
})

/*test('create wrong vacancy',async()=>{
  const body={
    careerLevel:"create testing",
    jobDescription:"teset" 
}
expect.assertions(1)
const response = await funcs.createVacancy(body)
expect(response.data.status).toEqual(400)
})
*/

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
  const response = await ufuncs.createMember(body)
  userId=response.data.data._id
  expect(response.data.data._id).toBe(userId)
})
/*
// Depends on the create vacancy
test('Search for a vacancy', async()=>{

  const body={
     "attribute" : "tags" ,
     "value" : "tag1" // if you change the create vacancy tags, reflect the change here
  }
  const response = await funcs.searchVacancy(body)
  expect(response.data.data[0].jobDescription).toEqual("teset")

})
*/

test('apply on a vacancy',async()=>{
  body={
    "userId":""+userId
  }
  expect.assertions(1)
  const res = await funcs.applyOnVacancy(vacancyId,body)  
  expect(res.data.data.applicants.length).toEqual(1)
})

/*test('apply on a vacancy fail',async()=>{
  body={
    "id":"2",
    "name":"ammar"
  }
  
  response = await funcs.applyOnVacancy(vacancyId,body)  
  expect(response.data.status).toEqual(400)
})*/

test('cancel my application',async()=>{
  body={
    "userId":""+userId
  }
  expect.assertions(1)  
  const res = await funcs.cancelMyApplication(vacancyId,body)  
  expect(res.data.data.applicants.length).toEqual(0)
})


/*test('close vacancy',async()=>{
  expect.assertions(1)
  const response = await funcs.cancelMyApplication(vacancyId,body)
  expect(response.data.data.closed).toEqual(true)
  
},50000)*/
test('member should be deleted', async () => {
  const user =  await ufuncs.viewMemberId(userId)
  const user2 =  await ufuncs.deleteMember(userId)
  expect(user.data.data._id).toEqual(user2.data.data._id)
});

test ('delete vacancy',async()=>{
  expect.assertions(1)
  const response = await funcs.deleteVacancy(vacancyId)
  expect(response.data.data._id).toEqual(vacancyId)
})