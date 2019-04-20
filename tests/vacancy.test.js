const funcs = require('./vacancyFn');
const mfuncs = require('./membersfn');
mongoose = require("mongoose");
var ic ='';
var userId=''







// IF YOU CHANGE the jobDescription or tags in the body, reflect them in the search test under this
test('create vacancy',async()=>{
   jest.setTimeout(20000)
   const body={
     title: "hamada",
     careerLevel:"create testing",
     jobDescription:"teset",
     educationLevel:"master phd",
     skillsRequired:"yeb2a shaba7",
     tags:["tag1","tag2"]
 }
const response = await funcs.createVacancy(body)
ic= response.data.data._id;
expect(response.data.data._id).toEqual(ic)
});



// test('last vacancy educationLevel is master phd', async () => {
//   jest.setTimeout(100000)
//   const response =  await funcs.viewVacancy()
//   const length = response.data.length
//   expect(response.data.data[length-1].educationLevel).toEqual('master phd')
//   })



test('View vacancy by id', async () => {
    jest.setTimeout(20000)
    const response =  await funcs.viewVacancyByID(ic)
    expect(response.data.data._id).toEqual(ic)
    });

    
  

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

});

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
  const response = await mfuncs.createMember(body)
  userId=response.data.data._id
  expect(response.data.data._id).toBe(userId)
});

// test('apply on a vacancy',async()=>{
//   body={
//     "userId":""+userId
//   }
//   expect.assertions(1)
//   const res = await funcs.applyOnVacancy(ic,body)  
//   expect(res.data.data.applicants.length).toEqual(1)
// })

// test('apply on a vacancy again',async()=>{
//   body={
//     "id":"2",
//     "name":"ammar"
//   }
//   expect.assertions(1)
//   const response = await funcs.applyOnVacancy(ic,body)  
//   console.log(response.data.data)
//   expect(response.data.data.applicants[0].id).toEqual("1")
// })

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
  jest.setTimeout(10000)
  const response =  await funcs.viewVacancy()
  expect(response.data.data[0].status).toEqual(false)
  });

  test('admin View vacancy by id', async () => {
    const response =  await funcs.adminViewVacancyByID(ic)
    expect(response.data.data.jobDescription).toEqual('teset')
    });


    test('update vacancy', async () => {
      const body={
        title: "omar",
        careerLevel:"create testing",
        jobDescription:"teset",
        educationLevel:"master phd",
        skillsRequired:"yeb2a shaba7",
        tags:["tag1","tag2"]
    }
      const response = await funcs.updateVacancy(ic,body)
      const response2 = await funcs.updateVacancy(ic,body)
      expect(response2.data.data.title).toBe("omar")
  });



  test('delete vacancy', async () => {
    const user = await funcs.viewVacancyByID(ic)
    const user2 =  await funcs.deleteVacancy(ic)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    })


