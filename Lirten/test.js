const funcs = require('./fn');
const functions = require('./functions');

test('deleting vacancy ad', async () => {
    const id="5c95c98dfcdb6317a0934a7c"
    const response =  await functions.adminDeleteVacancyad(id)
    expect(response).not.toContain(id)
  })
  
  
test ('find a certain partner as an admin',async ()=>{
  const id = "5c93e8b88c10dc71806b8132"  
  const response = await funcs.findPartnerByIdFromAdmin(id)
    expect(response.data.name).toBe("hghjh")

})
test('checking that admin views correctly', async () => {
  
  const response =  await funcs.viewAllAdmins()
  //ik i have only 1 entry in the db currently
  expect(response.data.data.length).toBe(1)
});

test('checking deleting admin', async () => {
  const id = "5c9547168c3de80d280bfcdb"
  const response =  await funcs.deleteAdmin(id)
  //ik i have only 1 entry in the db currently
  expect(response.data.firstName).toBe("ahmed")
});

test('checking creating admin', async () => {
const body ={
  "firstName":"ahmed",
	"middleName":"asd",
	"lastName":"asd",
	"education":["asd"],
	"age":50
}
  const response =  await funcs.createAdmin(body)
  //ik i have only 1 entry in the db currently
  expect(response.data.firstName).toBe("ahmed")
});




/*  test('Post my informations as a partner', async () =>{
    const body={
      "partners": [{"id":"dfjvnhbgfd"},{"id":"ionuij"}],
      "events": [{"name":"stupid lawyer party","id":"mnbv","startDate":"12/12/2012","endDate":"20/20/2022"}],
      "vacancies": [{"id":"String"}],
      "projects": [{"id":"String","name":"String","startDate": "12/12/1014","endDate": "12/03/2050"}],
      "companyName": "Vodafone",
      "companyLocation": "Mohandeseen",
      "field": "stupid",
      "email": "mohammedibahim904@gmail.com",
      "password": "fdsjfkljdsflkasdjfsd"
  }
    expect.assertions(1)
    const user =  await funcs.createpartner(body)
    const newone= await funcs.viewPartnerid(user.data.data.id)
    expect(user.data.data.id).toEqual(newone.data.data.id)
  })

  test('Post request as a partner', async () =>{
    const body={
      "careerLvl": "Joi",
      "jobDesc": "vcvbnm",
      "jobTyp": "hbm mh h khk ",
      "educLvl": 20,
      "empID": 10,
      "time": "20/12/2222",
      "skillsReq": "nnknjkkjni",
      "jobReq": "jnn,jn,nj",
  }
    
    expect.assertions(1)
    const user =  await funcs.createrequest(body)
    const newone= await funcs.viewRequest(user.data.data.id)
    expect(user.data.data.id).toEqual(newone.data.data.id)
  })

  test('Post ads as a partner', async () =>{
    const body={
      "vacancyname": "good boy",
        "description":"good",
        "location":"city",
        "email":"@hh.com",
        "phonenumber": "0257",
        "requirments":"good knowledge",
        "duration":"kuli;ojk",
        "salary":";ljkhgiuyg",
        "ownername":"trtyuijk",
        "ownerid":"5c93e8b88c10dc71806b8132",
        "startdate":"1/1/2019",
        "enddate":"13/13/2019",
        "statue": "true",
        "applied":0
    }
    
    expect.assertions(1)
    const user =  await funcs.createvacancyad(body)
    const newone= await funcs.viewVacancyad(user.data.data.id)
    expect(user.data.data.id).toEqual(newone.data.data.id)
  })

  test('Number of ad should be 1', async () => {
    const id="5c93e8b88c10dc71806b8132"
    const idd="5c9d5afeccc119349099df17"
    expect.assertions(1)
    const response =  await funcs.viewstatusVacancyad(id,idd)
    expect(response.data.data.length).toBe(1)
    expect(response.data.data.length).toBe(0)
  })

  test('update vacancy ad', async () => {
    const idd="5c9d5afeccc119349099df17"
    const body={
      "startdate":"12/12/2012"
    }
    expect.assertions(1)
    const response =  await funcs.editVacancyad(id,body)
    expect(response.data.data.startdate).toEqual("12/12/2012")
  })*/