// components/NavBar.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* Home Link */}
        <Link className="navbar-brand" to="/overview">
          Home
          Servers
          Sessions
        </Link>
        <div className="navbar-icons ml-auto">
          <FontAwesomeIcon icon={faBell} />
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <span className="user-name">John Doe</span>
          <span className="dropdown-arrow">&#9662;</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
