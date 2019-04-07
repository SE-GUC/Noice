import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { create } from "domain";
import { updateLocation } from "../../controllers/locationControllers";
import createLocation from './componentsLocation/create.component';
import updateLocation from './componentsLocation/update.component';
import viewLocation from './componentsLocation/view.component';

function Admins() {
  return <h2>Admins</h2>;
}

function Members() {
  return <h2>Members</h2>;
}

function Location() {
  <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/location/create">Create</Link>
        </li>
        <li>
          <Link to="/location/update/:id">Update</Link>
        </li>
        <li>
          <Link to="/location/view">View</Link>
        </li>
      </ul>
    </nav>

    <Route path="/location/create"  component={createLocation} />
    <Route path="/location/update/:id"  component={updateLocation} />
    <Route path="/location/view"  component={viewLocation} />

  </div>
</Router>;
}
function Partners() {
  return <h2>Partners</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/Admins">Admins</Link>
            </li>
            <li>
              <Link to="/Location/">Location</Link>
            </li>
            <li>
              <Link to="/Members/">Members</Link>
            </li>
            <li>
              <Link to="/Partners/">Partners</Link>
            </li>
          </ul>
        </nav>

        <Route path="/Admins/"  component={Admins} />
        <Route path="/Location/" component={Location} />
        <Route path="/Members/" component={Members} />
        <Route path="/Partners/" component={Partners} />
      </div>
    </Router>
  );
}



export default AppRouter;
