/**
 * @jest-environment node
 */
const funcs = require('./patnerfn');

let partid=''
test('Number of ad should be 1', async () => {
  const id="5c93e8b88c10dc71806b8132"
  const idd="5c9d533817bb2542d4c87621"
  const response =  await funcs.viewstatusVacancyad(id,idd)
  expect.assertions(1)
  expect(response.data.data.length).toBe(1)
})

test('update vacancy ad', async () => {
  const id="5c9d5afeccc119349099df17"
  const body={
    startdate:"12/12/2012"
  }
  const response =  await funcs.editVacancyad(id,body)
  expect(response.data.data.startdate).toEqual("12/12/2012")
})

  test('Post my informations as a partner', async () =>{
    expect.assertions(1)
    const body={
      partners: [{id:"ytguyhk"},{id:"hghjiyv"}],
      events: [{name:"stupid lawyer",id:"2354",startDate:"12/12/2012",endDate:"02/12/2022"}],
      vacancies: [{id:"String"}],
      projects: [{id:"String",name:"String",startDate: "12/12/1014",endDate: "12/03/2050"}],
      companyName: "Vodafone",
      companyLocation: "Mohandeseen",
      field: "stupidggghh"
  }
    const user =  await funcs.createpartner(body)
    const user1 = await funcs.viewPartnerid(user.data.data._id)
    partid=user.data.data._id
    expect(user.data.data._id).toEqual(user1.data.data._id)
  })

  test('view partner', async () => {
    const response =  await funcs.viewPartnerid(partid)
    expect(response.data.data._id).toEqual(partid)
  })

  test('update partner', async () => {
    const body={
      companyName: "Orange"
    }
    const response =  await funcs.updatePartner(partid,body)
    expect(response.data.data.companyName).toEqual("Orange")
  })

  test('delete partner', async () => {
    const user = await funcs.viewPartnerid(partid)
    const user2 =  await funcs.deletePartner(partid)
    expect(user.data.data._id).toEqual(user2.data.data._id)
});

  test('Post request as a partner', async () =>{
    const body={
      careerLvl: 22,
      jobDesc: "vcvbmd,cnm",
      jobTyp: "hbm ddffmh h khk ",
      educLvl: 20,
      empID: 10,
      time: "02/12/2011",
      skillsReq: "nndddknjkkjni",
      jobReq: "jnn,jn,nj"
  }
    const user =  await funcs.createrequest(body)
    expect.assertions(1)
    expect(user.data.data.jobDesc).toBe("vcvbmd,cnm")
  })

  test('Post ads as a partner', async () =>{
    const body={
        vacancyname: "good boy",
        description:"good",
        location:"city",
        email:"@hh.com",
        phonenumber: "0257",
        requirments:"good knowledge",
        duration:"kuli;ojk",
        salary:";ljkhgiuyg",
        ownername:"trtyuijk",
        ownerid:"5c93e8b88c10dc71806b8132",
        startdate:"1/1/2019",
        enddate:"13/13/2019",
        statue: "true",
        applied:0
    }
    
    const user =  await funcs.createvacancyad(body)
    expect.assertions(1)
    expect(user.data.data.vacancyname).toBe("good boy")
  })


  