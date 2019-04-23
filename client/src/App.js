import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {Provider} from 'react-redux'

//import your component here
import Home from './components/Home'
import Vacancy from './components/vacancyCruds/Vacancy'
import Main from './components/main'

//add the rest of the admin cruds here
import signUpForm from './components/usersCruds/signUpForm'

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
<<<<<<< HEAD
                     <Link to="/signup">Sign Up</Link>
                     
=======
                     <Link to="/search/Vacancies">Filter Vacancies</Link>
                     <Link to="/search/Rooms">Filter Rooms</Link>
                     <Link to="/search/Events">Filter Events</Link>
>>>>>>> 75946dff48194546cfcaede96b714b67ef1717ec
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
<<<<<<< HEAD
                     
                     
=======
                     <Link to="/search/Vacancies">Filter Vacancies</Link>
                     <Link to="/search/Rooms">Filter Rooms</Link>
                     <Link to="/search/Events">Filter Events</Link>
                     <Link to="/vacancy/getApplicants">Get Applicants</Link>
                     <Link to="/vacancy/accept">Accept applicant</Link>
                     <Link to="/vacancy/close">Close Vacancy</Link>
>>>>>>> 75946dff48194546cfcaede96b714b67ef1717ec
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
