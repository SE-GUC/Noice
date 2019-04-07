import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import UpdatePartner from "./components/update-partner.component";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to="/" className="navbar-brand">Update Partner</Link>
          </nav>

          <Route path="/update/:id" component={UpdatePartner} />
        </div>
      </Router>
    );
  }
}

export default App;