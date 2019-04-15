import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {Provider} from 'react-redux'
import Home from './components/Home'
//add the rest of the admin cruds here
import CreateAdminForm from './components/adminCruds/CreateAdminForm'
import CreateUsersForm from './components/usersCruds/CreateUsersForm'
//importing the store
import store from './store.js'
//add other cruds here


//bootstrap components 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button';

class App extends Component {

  render() {
    return (
      <Provider store ={store}>
      {/*Store holds all the state together*/ }
       <Router>
          <div className="App">
             {/*dont touch this*/ }
             <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
             <Navbar.Brand href="/">LirtenHub</Navbar.Brand>
             <Navbar.Toggle aria-controls="basic-navbar-nav" />
             <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="lirten">
           {/*create a url for your component here then add a route for it down with the SAME url and  component name,
           dont forget to import your component name AND USE CAMEL CASE  le hwa awel 7arf mn kol kelma capital*/ }
             <Nav.Link className="homeLink" href={'/home'}>Home</Nav.Link>
             <Nav.Link className="vacancyLink" href={'/vacancy'}>Vacancy</Nav.Link>
             <Nav.Link className="eventLink" href={'/event'}>Events</Nav.Link>
             <Nav.Link className="adminCreateLink" href={'/adminCreate'}>createAdmin</Nav.Link>
            </Nav>
      
       {/*add filter link here*/}
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <button type="button" className="btn btn-outline-info">Search</button>
        </Form>
           </Navbar.Collapse>
           <button type="button" className="btn btn-outline-info">
           <Nav.Link  className="usersCreateLink" href={'/usersCreate'}>Sign up</Nav.Link>
           </button>
           </Navbar><br/>
   
          {/* add a route for you here */}
              <Switch>
                <Route exact path='/adminCreate' component={ CreateAdminForm  } />
                <Route exact path='/home' component={ Home  } />
                <Route exact path='/usersCreate' component={ CreateUsersForm  } />
              
               </Switch>
          </div>
               </Router>
      </Provider>
    );
   
  }
}

export default App;
