import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import admin from './adminCruds/CreateAdminForm'
import signUp from './usersCruds/signUpForm'
import memberUpdate from './usersCruds/memberUpdate'
import partnerUpdate from './usersCruds/partnerUpdate'
import locationUpdate from './usersCruds/locationUpdate'
import viewUser from './usersCruds/viewUser'

import {Switch,Route} from 'react-router-dom'
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route  path= "/createAdmin" component = {admin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
    <Route  path= "/signup" component = {signUp}/>
    <Route  path= "/member" component = {memberUpdate}/>
    <Route  path= "/partner" component = {partnerUpdate}/>
    <Route  path= "/location" component = {locationUpdate}/>
    <Route  path= "/viewUser" component = {viewUser} />

</Switch>
)
export default Main;
