import React from 'react';
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
            <NavLink activeClassName="active" exact to="/" className="nav-link">Home</NavLink>
              
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" exact to="/about" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink activeClassName="active" exact to="/login" className="nav-link">Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
