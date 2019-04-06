const axios = require('axios');
const functions={
viewAllAdmins: async() =>{
const admins =  await axios.get('http://localhost:3000/api/admins/')
//console.log(admins.data.data)
return admins
},
viewAdminById:async(id)=>{
    console.log('im invoked')
    const admins =  await axios.get(`http://localhost:3000/api/admins/${id}`)
    console.log(admins.data.data)
    return admins
    
},
createAdmin: async(body)=>{
    const admin = await axios.post('http://localhost:3000/api/admins/create',body)
    console.log('admin info is'+admin.data.data)  
    return admin
},
deleteAdmin : async (id)=>{
 const admin = await axios.delete(`http://localhost:3000/api/admins/${id}`)
 return admin
},
updateAdminById: async(id,body) =>{
   const admin = await axios.put(`http://localhost:3000/api/admins/${id}`,body)
   console.log(admin.data.data)
   return admin
}


};
module.exports = functions;