import React from 'react';
import { Link, NavLink } from 'react-router-dom';


 function NavbarMain() {
return (
<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom sticky-top">
<div className="container">
<Link className="navbar-brand fw-bold" to="/">Apple Clone</Link>
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
<span className="navbar-toggler-icon" />
</button>


<div className="collapse navbar-collapse" id="mainNav">
<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
<li className="nav-item"><NavLink className="nav-link" to="/mac">Mac</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/iphone">iPhone</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/">iPad</NavLink></li>
<li className="nav-item"><NavLink className="nav-link" to="/">Watch</NavLink></li>
</ul>


<ul className="navbar-nav ms-auto">
<li className="nav-item"><a className="nav-link" href="#">Search</a></li>
<li className="nav-item"><a className="nav-link" href="#">Bag</a></li>
</ul>
</div>
</div>
</nav>
);
}
export default NavbarMain