import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
      <Link to="/" className="navbar-brand">Shop</Link>
      
      <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link">Products</Link>
          </li>

          <li className="navbar-item">
            <Link to="/create" className="nav-link">Users</Link>
          </li>

          <li className="navbar-item">
            <Link to="/user" className="nav-link">Create Product</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;