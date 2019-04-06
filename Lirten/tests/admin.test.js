const funcs = require('./adminsfn');

test('view all admins',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllAdmins()
    expect(response.data.data.length).toEqual(1)  
},10000)
test('view admin by id',async()=>{
    id= "5ca7b2a355cbdd2af8ce7aff"
    const response =  await funcs.viewAdminById(id)
    expect.assertions(1)
    console.log(response.data.data)
    expect(response.data.data.firstName).toBe("create testing")  
})

test('Update an admin',async ()=>{
    id= "5ca7b2a355cbdd2af8ce7aff"
    const body={
       firstName:"updated",
        middleName:"hamada",
        lastName:"el Updated",
        age : 500,
    }
    expect.assertions(1)
    const response = await funcs.updateAdminById(id,body)
    console.log(response.data.data)
    expect(response.data.data.firstName).toBe(body.firstName)

},10000)
test('Delete an admin',async()=>{
    id= "5ca7b2a355cbdd2af8ce7aff"
    expect.assertions(1)
    const response = await funcs.deleteAdmin(id)
    expect(response.data.data.firstName).toBe("updated")
},10000)

test('create admin',async () =>{
    const body={
        firstName:"create testing",
        middleName:"mid",
        lastName:"lastName",
        age:22
    }
    expect.assertions(1)
    const response = await funcs.createAdmin(body)
    gid= response.data.data.id;
    expect(response.data.data.age).toEqual(22)

})
