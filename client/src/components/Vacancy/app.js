import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteVacancy from "./components/Vacancy/deletevacancy.component";
import UpdateVacancy from "./components/Vacancy/updatevacancy.component";

function Admins() {
return <h2>Admins</h2>;
}

function Members() {
return <h2>Members</h2>;
}

function Vacancy() {
    return <h2>Vacancy</h2>;
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
<Link to="/Vacancy/">Vacancy</Link>
</li>
<li>
<Link to="/update_Vacancy/">update Vacancy</Link>
</li>
<li>
<Link to="/delete_Vacancy/">delete Vacancy</Link>
</li>
<li>
<Link to="/Members/">get all Members</Link>
</li>
<li>
<Link to="/Member_id/">get Member by id</Link>
</li>
<li>
<Link to="/create_Member/">create Member</Link>
</li>
<li>
<Link to="/update_Member/">update Member</Link>
</li>
<li>
<Link to="/delete_Member/">delete Member</Link>
</li>
<li>
<Link to="/Partners/">Partners</Link>
</li>
</ul>
</nav>

<Route path="/Admins/" component={Admins} />
<Route path="/Vacancy/" component={Vacancy} />
<Route path="/delete_Vacancy/" component={DeleteVacancy} />
<Route path="/update_Vacancy/" component={UpdateVacancy} />
<Route path="/Location/" component={Location} />
<Route path="/Members/" component={Members} />
<Route path="/Member_id/" component={Members} />
<Route path="/create_Member/" component={CreateMember} />
<Route path="/update_Member/" component={UpdateMember} />
<Route path="/delete_Member/" component={DeleteMember} />
<Route path="/Partners/" component={Partners} />
</div>
</Router>
);
}

export default AppRouter;

