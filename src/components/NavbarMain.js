import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import SearchModal from './SearchModal';


function NavbarMain() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-black border-bottom sticky-top shadow-sm">
        <div className="container">
          <Link className="navbar-brand fw-bold text-white text-uppercase tracking-wide" to="/">
            Apple Clone
          </Link>
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNav"
            aria-controls="mainNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse" id="mainNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3">
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/store">
                  Store
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/mac">
                  Mac
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/ipad">
                  iPad
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/iphone">
                  iPhone
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/watch">
                  Watch
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/vision">
                  Vision
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/airpods">
                  AirPods
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/tv-home">
                  TV &amp; Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/entertainment">
                  Entertainment
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/accessories">
                  Accessories
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link nav-link--compact small" to="/support">
                  Support
                </NavLink>
              </li>
            </ul>

            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <button
                  type="button"
                  className="nav-link btn btn-link text-white nav-link--compact small"
                  onClick={() => setShowSearch(true)}
                >
                  Search
                </button>
              </li>
              <li className="nav-item">
                <button type="button" className="nav-link btn btn-link text-white nav-link--compact small">
                  Bag
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <SearchModal show={showSearch} onClose={() => setShowSearch(false)} />
    </>
  );
}

export default NavbarMain;