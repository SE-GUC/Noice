import React from 'react';
import Home from './Home'
import ViewVacancy from './vacancyCruds/Vacancy'
import admin from './adminCruds/CreateAdminForm'
import {Switch,Route} from 'react-router-dom'

import ViewRoomsFromLoc from '../components/ViewRoomResLocs/ViewRoomResLoc'
import ViewRoomsFromMem from '../components/ViewRoomResMems/ViewRoomResMem'
import CreateRoomResMem from '../components/CreateRoomRes/CreateRoomRes'
import UpdateRoomResMem from '../components/UpdateRoomRes/UpdateRoomRes'

import vacancyFilter from './filters/VacancySearch'
import roomFilter from './filters/RoomSearch'
import eventFilter from './filters/EventSearch'
const Main = ()=>(
<Switch>
    <Route exact path ="/" component = {Home}/>,
    <Route  path= "/createAdmin" component = {admin}/>
    <Route  path= "/vacancy/viewAll" component = {ViewVacancy}/>
    {/* Please add the id of the room you want to get the reservations for in form of id="<id>" */}
    <Route  path= "/location/view/roomreservations" render={(props) => <ViewRoomsFromLoc id="5cbe35f0f7e7e83478a2574b" {...props} />}/>
    {/* Please add the id of the room you want to get the reservations for in form of id="<id>" */}
    <Route  path= "/member/view/roomreservations" render={(props) => <ViewRoomsFromMem id="5cbe35f0f7e7e83478a2574b" {...props} />}/>
    {/* Please add the id of the room you want to set the reservation for and the reserverId that they ar doing the reservation in form of id="<id>" and reserverid="<reserverId>" */}
    <Route  path= "/member/view/createRoomRes" render={(props) => <CreateRoomResMem reserverId="hamada"id="5cbe35f0f7e7e83478a2574b" {...props} />}/>
    {/* Please add the id of the room you want to set the reservation for and the reserverId that they ar doing the reservation in form of id="<id>" and reserverid="<reserverId>" */}
    <Route  exact path= "/member/view/updateRoomRes/:id" render={(props) => <UpdateRoomResMem reserverId="hamada"id="5cbe35f0f7e7e83478a2574b" {...props} />}/>
    <Route  path= "/search/Vacancies" component = {vacancyFilter}/>
    <Route  path= "/search/Rooms" component = {roomFilter}/>
    <Route  path= "/search/Events" component = {eventFilter}/>

    
</Switch>
)
export default Main;
