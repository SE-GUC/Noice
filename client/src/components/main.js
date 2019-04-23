<<<<<<< HEAD
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
import deleteUser from './usersCruds/deleteUser';
import viewAllUsers from './usersCruds/viewAllUsers';
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
    <Route  path= "/deleteUser" component = {deleteUser} />
    <Route  path= "/viewAllUsers" component = {viewAllUsers} />

</Switch>
)
export default Main;
=======

import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import admin from './adminCruds/CreateAdminForm'
import signUp from './usersCruds/signUpForm'
import {Switch,Route} from 'react-router-dom'
import getapp from './vacancyCruds/Viewapplicants'
import acceptapp from './vacancyCruds/Acceptapp'
import closeapp from './vacancyCruds/Closeapp'
import vacancyFilter from './filters/VacancySearch'
import roomFilter from './filters/RoomSearch'
import eventFilter from './filters/EventSearch'

const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route  path= "/createAdmin" component = {admin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
    <Route  path= "/signup" component = {signUp}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
    <Route  path="/vacancy/getApplicants" component= {getapp}/>
    <Route  path="/vacancy/accept" component= {acceptapp}/>
    <Route  path="/vacancy/close" component= {closeapp}/>
    <Route  path= "/search/Vacancies" component = {vacancyFilter}/>
    <Route  path= "/search/Rooms" component = {roomFilter}/>
    <Route  path= "/search/Events" component = {eventFilter}/>
</Switch>
)
export default Main;
>>>>>>> user
