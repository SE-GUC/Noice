/**
 * @jest-environment node
 */

const funcs = require('./fn');
test('view all admins',async()=>{
    expect.assertions(1)
    const response =  await funcs.viewAllAdmins()
    expect(response.data.data.length).toEqual(2)  
})
test('view admin by id',async()=>{
    const id ="5ca670bb2f32d169acc67047"
    const response =  await funcs.viewAdminById(id)
    expect.assertions(1)
    //console.log(response.data.data)
    expect(response.data.data.firstName).toBe("bala7a")  
})
/*test('Update an admin',async ()=>{
    const id ="5ca4a15e92da5617b41b7a40"
    const body={
       firstName:"mohamed",
        middleName:"hamada",
        lastName:"el Updated",
        age : 500,
    }
    expect.assertions(1)
    const response = await funcs.updateAdminById(id,body)
    console.log(response.data.data)
    expect(funcs.viewAdminById(id).data.data[0].firstName).toBe(body.firstName)

})*/
