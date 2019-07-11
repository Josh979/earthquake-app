import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className="header mb-3">
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Earthquake Monitor</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/" activeClassName="is-active" exact={true} className="nav-link">Dashboard</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/latest" activeClassName="is-active" className="nav-link">Latest Earthquakes</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/help" activeClassName="is-active" className="nav-link">Help</NavLink>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  </header>
);

export default Header;
