<<<<<<< HEAD
import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import admin from './adminCruds/CreateAdminForm'
import signUp from './usersCruds/signUpForm'
import {Switch,Route} from 'react-router-dom'
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route  path= "/createAdmin" component = {admin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
    <Route  path= "/signup" component = {signUp}/>
</Switch>
)
export default Main;
=======
import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import createAdmin from './adminCruds/CreateAdminForm'
import viewAdmin from './adminCruds/ViewDeleteAdmin'


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
    <Route  path= "/admin/createAdmin" component = {createAdmin}/>
    <Route  path= "/admin/viewAdmin" component = {viewAdmin}/>
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
>>>>>>> 75946dff48194546cfcaede96b714b67ef1717ec
