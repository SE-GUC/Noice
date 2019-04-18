var funcs = require('./userAxios');

let locationic=''
let icMember =''
let partid=''

test('Create a new location ', async () =>{
    const body={
      email: "kareemkimo39@gmail.com",
      password: "whyusfqavvdodis",
      firstName: "Kareem",
      middleName: "Esam Eldin",
      lastName: "Elshafey",
      birthDate: "17-10-1998",
      gender: "male",
      address: "starbuqdvqqvcks",
      phoneNumber: "01223526878",
      typeOfUser: "Co-working Space Owner",
      NameOfPlace: "Costa",
      workingPlaceDepartments: [
          {
              nameOfDepartments: "Sherouk City",
              City: "Cairo",
              Region: "Madinty",
              startTime: "09:00",
              endTime: "15:00",
              rate: 4.4,
          }
      ],
  }
    const user =  await funcs.createLocation(body)
    const user2 =  await funcs.getUser(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    locationic=user.data.data._id;
  });

  test('Create a new member', async () =>{
    const body={
      email: "kskamr@gmail.com",
      password: "whyusfqavvdodis",
      firstName: "Kareem",
      middleName: "Mohamed",
      lastName: "Ayman",
      birthDate: "17-10-1998",
      gender: "male",
      address: "starbuqdvqqvcks",
      phoneNumber: "01223526878",
      typeOfUser: "Member",
      skills: "Programming",
      interests:"Tech news",
      pastEvents: [{
        name: "MCM",
        startDate: "10-10-2010",
        endDate: "10-10-2011",
      }],
      projectsCompleted: "Noice",
      reviewsReceived: "none",
      certificatesHeld: "Met Engineering",
  }
    const user =  await funcs.createMember(body)
    const user2 =  await funcs.getUser(user.data.data._id)
    expect(user.data.data._id).toEqual(user2.data.data._id)
    icMember=user.data.data._id;
  });

  test('Post my informations as a partner', async () =>{
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
    const user1 = await funcs.getUser(user.data.data._id)
    partid=user.data.data._id
    expect(user.data.data._id).toEqual(user1.data.data._id)
  })
  test('delete location', async () => {
        const user =  await funcs.getUser(locationic)
        const user2 =  await funcs.deleteLocation(locationic)
        expect(user.data.data._id).toEqual(user2.data.data._id)
    });
    test('delete Member', async () => {
        const user =  await funcs.getUser(icMember)
        const user2 =  await funcs.deleteMember(icMember)
        expect(user.data.data._id).toEqual(user2.data.data._id)
    });
    test('delete Partner', async () => {
        const user =  await funcs.getUser(partid)
        const user2 =  await funcs.deletePartner(partid)
        expect(user.data.data._id).toEqual(user2.data.data._id)
    });