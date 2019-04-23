import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import createAdmin from './adminCruds/CreateAdminForm'
import viewAdmin from './adminCruds/ViewDeleteAdmin'


import {Switch,Route} from 'react-router-dom'

import vacancyFilter from './filters/VacancySearch'
import roomFilter from './filters/RoomSearch'
import eventFilter from './filters/EventSearch'
import UpdateAdminForm from './adminCruds/UpdateAdminForm';
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>

    <Route  path= "/updateAdmin" component = {UpdateAdminForm}/>
    <Route  path= "/admin/createAdmin" component = {createAdmin}/>
    <Route  path= "/admin/viewAdmin" component = {viewAdmin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
 
    <Route  path= "/search/Vacancies" component = {vacancyFilter}/>
    <Route  path= "/search/Rooms" component = {roomFilter}/>
    <Route  path= "/search/Events" component = {eventFilter}/>

    
</Switch>
)
export default Main;
