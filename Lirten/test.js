const funcs = require('./fn');

test('Post my informations as a member', async () =>{
    const body={
        "name" : "dude",
        "age": "50",
        "gender": "male",
        "address": "123 nowhere street",
        " email": "dude@gmail.com",
        "phoneNumber": "123456789",
        "skills": ["none"],
        "interests": "none",
        "pastEvents": 
        [
        {
            "id": "1",
            "name": "random",
            "startDate": "3/3/2018",
            "endDate": "3/4/2018"
        }
        ],
        "projectsCompleted": "none",
        "reviewsReceived":"none",
        "certificaesHeld": "some"
  }
    expect.assertions(1)
    const user =  await funcs.postMember(body)
    const newone= await funcs.findMember(user.data.data.id)
    expect(user.data.data.id).toEqual(newone.data.data.id)
})

test('update member', async () => {
    const idd="5c9d5afeccc119349099df17"
    const body={
      "name":"Ned Stark"
    }
    expect.assertions(1)
    const response =  await funcs.updateMember(id,body)
    expect(response.data.data.name).toEqual("Ned Stark")
})

test('view vacancies', async () => {
    expect.assertions(1)
    const response =  await funcs.viewVacancy()
    expect(response.data).not.toEqual(null)
})

test('view locations on a certain date', async () => {
    expect.assertions(1)
    const response =  await funcs.viewLocationDate()
    expect(response.data).not.toEqual(null)
})