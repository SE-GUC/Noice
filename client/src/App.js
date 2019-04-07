import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Admins() {
  return <h2>Admins</h2>;
}

function Members() {
  return <h2>Members</h2>;
}

function Location() {
  return <h2>Location</h2>;
}
function Partners() {
  return <h2>Ptners</h2>;
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