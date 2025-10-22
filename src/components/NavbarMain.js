import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchModal from './SearchModal';


 function NavbarMain() {
	const [showSearch, setShowSearch] = useState(false);
	return (
		<>
			<nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom sticky-top">
				<div className="container">
					<Link className="navbar-brand fw-bold text-white" to="/">Apple Clone</Link>
					<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNav">
						<span className="navbar-toggler-icon" />
					</button>


					<div className="collapse navbar-collapse" id="mainNav">
						<ul className="navbar-nav mx-auto mb-2 mb-lg-0">
							<li className="nav-item"><NavLink className="nav-link" to="/store">Store</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/mac">Mac</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/ipad">iPad</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/iphone">iPhone</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/watch">Watch</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/vision">Vision</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/airpods">AirPods</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/tv-home">TV &amp; Home</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/entertainment">Entertainment</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/accessories">Accessories</NavLink></li>
							<li className="nav-item"><NavLink className="nav-link" to="/support">Support</NavLink></li>
						</ul>


				<ul className="navbar-nav ms-auto">
					<li className="nav-item"><button className="nav-link btn btn-link text-white" onClick={() => setShowSearch(true)}>Search</button></li>
					<li className="nav-item"><button className="nav-link btn btn-link text-white">Bag</button></li>
				</ul>
					</div>
				</div>
			</nav>
			<SearchModal show={showSearch} onClose={() => setShowSearch(false)} />
		</>
	);
}
export default NavbarMain