import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import CreateEvent from './eventCruds/CreateEvent'
import admin from './adminCruds/CreateAdminForm'
import {Switch,Route} from 'react-router-dom'

import vacancyFilter from './filters/VacancySearch'
import roomFilter from './filters/RoomSearch'
import eventFilter from './filters/EventSearch'
import DeleteEvent from './eventCruds/DeleteEvent';
import UpdateEvent from './eventCruds/UpdateEvent';
import ViewAllEvents from './eventCruds/ViewAllEvents';
import ViewEvent from './eventCruds/ViewEvent';
import { deleteEvent, updateEvent } from '../actions/eventActionsFolder/EventActions';
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route  path= "/createAdmin" component = {admin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>

    <Route  path= "/create/Event" component = {CreateEvent}/>
    <Route  path= "/update/Event" component = {UpdateEvent}/>
    <Route  path= "/delete/Event" component = {DeleteEvent}/>
    <Route  path= "/viewAll/Event" component = {ViewAllEvents}/>
    <Route  path= "/ViewById/Event" component = {ViewEvent}/>

    <Route  path= "/search/Vacancies" component = {vacancyFilter}/>
    <Route  path= "/search/Rooms" component = {roomFilter}/>
    <Route  path= "/search/Events" component = {eventFilter}/>

    
</Switch>
)
export default Main;
