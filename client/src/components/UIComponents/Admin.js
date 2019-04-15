import React from 'react'

const Admin = ({firstName,middleName,lastName,age,education,_id})=>{
 return (
     <div>
     <h3>Admin: {(firstName)?(firstName): "We don't know his/her name"}</h3>
     <p></p>
     <div>Middle Name: {(middleName)?(middleName): "We don't know his/her middle name"}</div>
     <p></p>
     <div>Last Name: {(lastName?(lastName): "We don't know his/her last name")}</div>
     <p></p>
     <div>Age: {(age)?(age): "We don't know his/her age"}</div>
     <p></p>
     <div>Education : {(education)?(education): "We don't know his/her education"}</div>
     
     </div>
 )
}

export default Admin