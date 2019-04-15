import React from 'react'
import Admin from './Admin'
import {connect} from 'react-redux'
import {selectAdminToUpdate} from '../../actions/adminActionsFolder/adminActions'
const Admins = ({admins,selectAdminToUpdate}) =>{
    if(!admins){
        return(<div>No Admins to show</div>)
    }
    let adminsList = admins.map(admin=>{
        return(
            <div key = {admin._id}>
            <p></p>
            <Admin firstName = {admin.firstName} middleName = {admin.middleName}
                age = {admin.age} education = {admin.education}/>  
            <p></p>
            <button onClick = {()=>{
                selectAdminToUpdate(admin)}}>Update Me</button>
            <br></br>
            </div>
        )
    })

    return (
        <div>
            {adminsList}
        </div>
    )
}

export default connect(null,selectAdminToUpdate)(Admins)