const axios = require('axios');
const functions={
viewAllAdmins: async() =>{
const admins =  await axios.get('http://localhost:3000/api/admins/')
//console.log(admins.data.data)
return admins
},
viewAdminById:async(id)=>{
    const admins =  await axios.get(`http://localhost:3000/api/admins/${id}`)
    //console.log(admins.data.data)
    return admins
    
},
updateAdminById: async(id,body) =>{
   const admin = await axios.put('http://localhost:3000/api/admins/?id='+id)
   console.log(admin.data.data)
   return admin
}


};
module.exports = functions;