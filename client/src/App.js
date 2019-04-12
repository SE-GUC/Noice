import React, { Component } from 'react';
import './App.css';
import CreateAdmin from './components/adminCruds/createAdmin'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
//add the rest of the admin cruds here
import CreateAdminForm from './components/adminCruds/createAdminForm'

//add other cruds here


//bootstrap components
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'

class App extends Component {

  render() {
    return (
      <Router>
      <div className="App">
      <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
  <Navbar.Brand href="#home">LirtenHub</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="lirten">
      <Nav.Link className="homeLink" href={'/'}>Home</Nav.Link>
      <Nav.Link className="vacancyLink" href={'/vacancy'}>Vacancy</Nav.Link>
      <Nav.Link className="eventLink" href={'/event'}>Events</Nav.Link>
      <Nav.Link className="adminCreateLink" href={'/adminCreate'}>createAdmin</Nav.Link>

    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<br/>
<Switch>
              <Route exact path='/adminCreate' component={ CreateAdminForm  } />
          </Switch>
</div>
      </Router>
      
    );
   
  }
}

export default App;
