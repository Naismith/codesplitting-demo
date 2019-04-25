import React from 'react';
import { Link } from '@reach/router';
import './Nav.css';

const Nav = () => (
  <div className="nav">
    <Link className="nav__link" to="/">
      Home
    </Link>
    <Link className="nav__link" to="/about">
      About
    </Link>
    <Link className="nav__link" to="/northot">
      NorthOT
    </Link>
  </div>
);

export default Nav;
