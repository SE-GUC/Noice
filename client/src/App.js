import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {Provider} from 'react-redux'

//import your component here
import Main from './components/main'

//add the rest of the admin cruds here


//importing the store
import store from './store.js'
//add other cruds here

//react mdl components
import {Layout,Header,Navigation,Drawer,Content } from 'react-mdl';

//bootstrap components 
import 'bootstrap/dist/css/bootstrap.min.css';



class App extends Component {

  render() {
    return (
      <Provider store ={store}>
      {/*Store holds all the state together*/ }
      <Router>
        <div className="App">
            {/*the new header*/}
            <div className="demo-big-content">
               <Layout>
                 <Header className= 'header-color' title="Lirten Hub" scroll>
                   <Navigation>
                     <Link to="/">Home</Link>
                     <Link to="/createAdmin">Admin Cruds</Link>
                     <Link to="/vacancy/viewAll">Vacancy View all</Link>
                     <Link to="/signup">Sign Up</Link>
                     <Link to="/search/Vacancies">Filter Vacancies</Link>
                     <Link to="/search/Rooms">Filter Rooms</Link>
                     <Link to="/search/Events">Filter Events</Link>

                     </Navigation>
                   </Header>
                   <Drawer title="User Name?">
                     <Navigation>
                     <Link to="/userProfile">
                    {/*put an awesome icon here from https://fontawesome.com/icons/id-card?style=solid */}
                   
                     </Link>
                     <Link to="/">Home</Link>
                     <h1>Admin</h1>
                     <Link to="/admin/createAdmin">create</Link>
                     <Link to="/admin/viewAdmin">view</Link>
                     <h2>Vacancy</h2>
                     <Link to="/vacancy/viewAll">View all</Link>
                     <Link to="/viewUser">View User</Link>
                     <Link to="/deleteUser">Delete User</Link>
                     <Link to="/viewAllUsers">View All Users</Link>
                     <Link to="/member">Member Update</Link>
                     <Link to="/partner">Partner Update</Link>
                     <Link to="/location">Co-Working Space Update</Link>
                     <Link to="/search/Vacancies">Filter Vacancies</Link>
                     <Link to="/search/Rooms">Filter Rooms</Link>
                     <Link to="/search/Events">Filter Events</Link>
                     <h3>Events</h3>
                     <Link to="/create/Event">Create Events</Link>
                     <Link to="/update/Event">Update Events</Link>
                     <Link to="/delete/Event">Delete Events</Link>
                     <Link to="/viewAll/Event">View All Events</Link>
                     <Link to="/ViewById/Event">View Event By ID</Link>
                     <Link to="/vacancy/getApplicants">Get Applicants</Link>
                     <Link to="/vacancy/accept">Accept applicant</Link>
                     <Link to="/vacancy/close">Close Vacancy</Link>


                      </Navigation>
                 </Drawer>
                 <Content>
                 <div className="page-content" />
                 <Main/>
                 </Content>
               </Layout>
             </div>
        </div>
     </Router>
      </Provider>
    );
   
  }
}

export default App;
