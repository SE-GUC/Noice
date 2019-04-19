import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route,Link } from 'react-router-dom';
import {Provider} from 'react-redux'

//import your component here
import Home from './components/Home'
import Vacancy from './components/vacancyCruds/Vacancy'
import Main from './components/main'

//add the rest of the admin cruds here
import CreateAdminForm from './components/adminCruds/CreateAdminForm'

//importing the store
import store from './store.js'
//add other cruds here

//react mdl components
import { Footer, FooterSection, FooterLinkList,Layout,Header,Navigation,Drawer,Textfield,Content } from 'react-mdl';

//bootstrap components 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'


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
                     
                     </Navigation>
                   </Header>
                <Drawer title="User Name?">
                     <Navigation>
                     <Link to="/userProfile">
                    {/*put an awesome icon here from https://fontawesome.com/icons/id-card?style=solid */}
                     </Link>
                     
                     <Link to="/">Home</Link>
                     <h1>Admin</h1>
                     <Link to="/createAdmin">create</Link>
                     <h2>Vacancy</h2>
                     <Link to="/vacancy/viewAll">View all</Link>
                     
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
