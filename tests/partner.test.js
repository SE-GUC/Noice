/**
 * @jest-environment node
 */
const funcs = require('./partnerAxios');

let partid=''


  test('Post my informations as a partner', async () =>{
    expect.assertions(1)
    const body={
        email: "bala@hotmail.com",
        password: "whyudodis",
        firstName: "sddsdsfbas",
        middleName: "asdssfbdfs",
        lastName: "fvafvefve",
        birthDate: "21-10-2019",
        gender: "male",
        address: "starbucks",
        phoneNumber: "01223526878",
        typeOfUser: "Partner",
        events: [
            {
                id: "2222222",
                name: "djksq",
                startDate: "22-02-2012",
                endDate: "22-02-2012"
            }
        ],
        projects: [
            {
                id: "2222222",
                name: "djksq",
                startDate: "22-02-2012",
                endDate: "22-02-2013"
            }
        ],
        field: "ffffffffffffffff",
        companyName: "efasfa",
        companyLocation: "cded",
        vacancies: [
            {
                "id": "2222222"
            }
        ],
        partners: [
            {
                "id": "2222222"
            }
        ]
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

  


  